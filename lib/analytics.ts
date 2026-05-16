import { google } from "googleapis";
import { getGoogleAuthClient } from "./google-auth";
import type {
  AnalyticsDashboardPayload,
  AnalyticsDailyPoint,
  AnalyticsDateRange,
  AnalyticsSourcePayload,
  AnalyticsSourceStatus,
  AnalyticsTotals,
} from "./analytics-types";

const DASHBOARD_DAYS = 30;

function getUtcDayStart(date = new Date()) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
}

function addUtcDays(date: Date, days: number) {
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate() + days,
    ),
  );
}

function formatIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function fromApiDateKey(value: string) {
  if (value.length !== 8) {
    return value;
  }

  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
}

function buildDateRange(days: number = DASHBOARD_DAYS): AnalyticsDateRange {
  const endDate = getUtcDayStart();
  const startDate = addUtcDays(endDate, -(days - 1));

  return {
    startDate: formatIsoDate(startDate),
    endDate: formatIsoDate(endDate),
    days,
  };
}

function buildEmptySeries(range: AnalyticsDateRange): AnalyticsDailyPoint[] {
  const start = new Date(`${range.startDate}T00:00:00.000Z`);
  const points: AnalyticsDailyPoint[] = [];

  for (let index = 0; index < range.days; index += 1) {
    const current = addUtcDays(start, index);
    const date = formatIsoDate(current);

    points.push({
      date,
      label: formatDateLabel(current),
      ga4Users: 0,
      ga4Sessions: 0,
      ga4PageViews: 0,
      gscClicks: 0,
      gscImpressions: 0,
      gscAveragePosition: 0,
    });
  }

  return points;
}

function calcLagDays(latestDataDate: string) {
  const latest = new Date(`${latestDataDate}T00:00:00.000Z`);
  const today = getUtcDayStart();
  const diff = Math.round(
    (today.getTime() - latest.getTime()) / (1000 * 60 * 60 * 24),
  );
  return Number.isFinite(diff) && diff > 0 ? diff : 0;
}

function toTotals(series: AnalyticsDailyPoint[]): AnalyticsTotals {
  const totals = series.reduce(
    (accumulator, point) => {
      accumulator.totalUsers += point.ga4Users;
      accumulator.sessions += point.ga4Sessions;
      accumulator.pageViews += point.ga4PageViews;
      accumulator.clicks += point.gscClicks;
      accumulator.impressions += point.gscImpressions;
      accumulator.averagePositionWeighted +=
        point.gscAveragePosition * point.gscImpressions;
      return accumulator;
    },
    {
      totalUsers: 0,
      sessions: 0,
      pageViews: 0,
      clicks: 0,
      impressions: 0,
      averagePositionWeighted: 0,
    },
  );

  return {
    totalUsers: totals.totalUsers,
    sessions: totals.sessions,
    pageViews: totals.pageViews,
    clicks: totals.clicks,
    impressions: totals.impressions,
    averagePosition:
      totals.impressions > 0
        ? Number(
            (totals.averagePositionWeighted / totals.impressions).toFixed(2),
          )
        : 0,
  };
}

function createSourceStatus(params: {
  ok: boolean;
  latestDataDate: string;
  warning?: string;
  error?: string;
}): AnalyticsSourceStatus {
  return {
    ok: params.ok,
    lastSuccessfulSyncAt: new Date().toISOString(),
    latestDataDate: params.latestDataDate,
    lagDays: calcLagDays(params.latestDataDate),
    warning: params.warning,
    error: params.error,
  };
}

function mergeSeries(
  series: AnalyticsDailyPoint[],
  overrides: Partial<AnalyticsDailyPoint>[],
) {
  return series.map((point) => {
    const override = overrides.find((item) => item.date === point.date);
    if (!override) {
      return point;
    }

    return {
      ...point,
      ...override,
    };
  });
}

function finalizeSourcePayload(
  series: AnalyticsDailyPoint[],
  overrides: Partial<AnalyticsDailyPoint>[],
  latestDataDate: string,
  warning?: string,
): AnalyticsSourcePayload {
  const mergedSeries = mergeSeries(series, overrides);

  return {
    totals: toTotals(mergedSeries),
    series: mergedSeries,
    status: createSourceStatus({
      ok: true,
      latestDataDate,
      warning,
    }),
  };
}

async function fetchGa4Source(range: AnalyticsDateRange) {
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) {
    throw new Error("GA4_PROPERTY_ID is not configured");
  }

  const analyticsData = google.analyticsdata({
    version: "v1beta",
    auth: getGoogleAuthClient(),
  });

  const response = await analyticsData.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: range.startDate, endDate: range.endDate }],
      dimensions: [{ name: "date" }],
      metrics: [
        { name: "totalUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
      ],
      orderBys: [{ dimension: { dimensionName: "date" } }],
    },
  });

  const baseSeries = buildEmptySeries(range);
  const rows = (response.data.rows || []).slice().sort((left, right) => {
    const leftDate = left.dimensionValues?.[0]?.value || "";
    const rightDate = right.dimensionValues?.[0]?.value || "";
    return leftDate.localeCompare(rightDate);
  });
  const overrides: Partial<AnalyticsDailyPoint>[] = rows.map((row) => {
    const dateKey = row.dimensionValues?.[0]?.value || "";
    return {
      date: fromApiDateKey(dateKey),
      ga4Users: Number(row.metricValues?.[0]?.value || 0),
      ga4Sessions: Number(row.metricValues?.[1]?.value || 0),
      ga4PageViews: Number(row.metricValues?.[2]?.value || 0),
    };
  });

  const latestDataDate = rows.length
    ? fromApiDateKey(rows.at(-1)?.dimensionValues?.[0]?.value || range.endDate)
    : range.endDate;

  return finalizeSourcePayload(baseSeries, overrides, latestDataDate);
}

async function fetchGscSource(range: AnalyticsDateRange) {
  const siteUrl = process.env.GSC_SITE_URL;
  if (!siteUrl) {
    throw new Error("GSC_SITE_URL is not configured");
  }

  const searchConsole = google.searchconsole({
    version: "v1",
    auth: getGoogleAuthClient(),
  });

  const response = await searchConsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: range.startDate,
      endDate: range.endDate,
      dimensions: ["date"],
      rowLimit: 250,
      startRow: 0,
    },
  });

  const baseSeries = buildEmptySeries(range);
  const rows = (response.data.rows || []).slice().sort((left, right) => {
    const leftDate = left.keys?.[0] || "";
    const rightDate = right.keys?.[0] || "";
    return leftDate.localeCompare(rightDate);
  });
  const overrides: Partial<AnalyticsDailyPoint>[] = rows.map((row) => {
    const dateKey = row.keys?.[0] || "";
    return {
      date: fromApiDateKey(dateKey),
      gscClicks: Number(row.clicks || 0),
      gscImpressions: Number(row.impressions || 0),
      gscAveragePosition: Number(row.position || 0),
    };
  });

  const latestDataDate = rows.length
    ? fromApiDateKey(
        rows.at(-1)?.keys?.[0] || range.endDate.replaceAll("-", ""),
      )
    : range.endDate;

  const warning =
    calcLagDays(latestDataDate) >= 2
      ? "Google Search Console data can lag by up to 48 hours."
      : undefined;

  const mergedSeries = mergeSeries(baseSeries, overrides);

  return {
    totals: toTotals(mergedSeries),
    series: mergedSeries,
    status: createSourceStatus({
      ok: true,
      latestDataDate,
      warning,
    }),
  };
}

function buildFallbackSource(
  range: AnalyticsDateRange,
  source: "ga4" | "gsc",
  error: unknown,
): AnalyticsSourcePayload {
  const series = buildEmptySeries(range);
  const latestDataDate = range.endDate;
  const errorMessage =
    error instanceof Error
      ? error.message
      : `Failed to fetch ${source.toUpperCase()}`;

  return {
    totals: toTotals(series),
    series,
    status: {
      ok: false,
      lastSuccessfulSyncAt: new Date().toISOString(),
      latestDataDate,
      lagDays: 0,
      error: errorMessage,
    },
  };
}

export async function getAnalyticsDashboardPayload(): Promise<AnalyticsDashboardPayload> {
  const dateRange = buildDateRange();
  const [ga4Result, gscResult] = await Promise.allSettled([
    fetchGa4Source(dateRange),
    fetchGscSource(dateRange),
  ]);

  const ga4 =
    ga4Result.status === "fulfilled"
      ? ga4Result.value
      : buildFallbackSource(dateRange, "ga4", ga4Result.reason);
  const gsc =
    gscResult.status === "fulfilled"
      ? gscResult.value
      : buildFallbackSource(dateRange, "gsc", gscResult.reason);

  return {
    generatedAt: new Date().toISOString(),
    dateRange,
    ga4,
    gsc,
  };
}
