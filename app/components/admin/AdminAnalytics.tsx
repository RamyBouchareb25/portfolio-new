"use client";

import Link from "next/link";
import {
  TrendingUp,
  Users,
  Activity,
  MousePointerClick,
  Eye,
  Gauge,
} from "lucide-react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
} from "@/app/components/ui/chart";
import type { AnalyticsDashboardPayload } from "@/lib/analytics-types";

interface AdminAnalyticsProps {
  data: AnalyticsDashboardPayload;
}

const metricCardClass =
  "rounded-lg border border-[rgba(0,242,255,0.12)] bg-[rgba(10,10,10,0.6)] p-5 backdrop-blur-[6px]";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatPosition(value: number) {
  return value > 0 ? value.toFixed(2) : "0.00";
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function MetricCard({
  label,
  value,
  icon: Icon,
  color,
  helper,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  helper?: string;
}) {
  return (
    <div className={metricCardClass}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[11px] uppercase tracking-[1.4px] text-[#849495]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            {label}
          </p>
          <p
            className="mt-2 text-[28px] tracking-[-0.8px] text-[#e1fdff]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            {value}
          </p>
        </div>
        <Icon size={18} className="shrink-0" style={{ color }} />
      </div>
      {helper ? (
        <p className="mt-3 text-[12px] leading-5 text-[#b9cacb]">{helper}</p>
      ) : null}
    </div>
  );
}

function SourceStatus({
  label,
  ok,
  lagDays,
  warning,
  error,
  latestDataDate,
}: {
  label: string;
  ok: boolean;
  lagDays: number;
  warning?: string;
  error?: string;
  latestDataDate: string;
}) {
  return (
    <div className="rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(225,253,255,0.03)] p-4">
      <div className="flex items-center justify-between gap-3">
        <span
          className="text-[12px] uppercase tracking-[1.2px] text-[#b3c5ff]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          {label}
        </span>
        <span
          className={`rounded-full px-2 py-1 text-[11px] uppercase tracking-[1px] ${
            ok
              ? "bg-[rgba(0,242,255,0.12)] text-[#00F2FF]"
              : "bg-[rgba(255,90,90,0.12)] text-[#ff8b8b]"
          }`}
        >
          {ok ? "Connected" : "Issue"}
        </span>
      </div>
      <p className="mt-3 text-[13px] text-[#b9cacb]">
        Latest data through{" "}
        <span className="text-[#e1fdff]">{latestDataDate}</span>
      </p>
      <p className="mt-1 text-[12px] text-[#849495]">
        Lag: {lagDays} day{lagDays === 1 ? "" : "s"}
      </p>
      {warning ? (
        <p className="mt-2 text-[12px] text-[#b3c5ff]">{warning}</p>
      ) : null}
      {error ? (
        <p className="mt-2 text-[12px] text-[#ff8b8b]">{error}</p>
      ) : null}
    </div>
  );
}

function AnalyticsChart({
  title,
  subtitle,
  data,
  seriesKey,
  color,
  formatter,
}: {
  title: string;
  subtitle: string;
  data: AnalyticsDashboardPayload["ga4"]["series"];
  seriesKey:
    | "ga4Users"
    | "ga4Sessions"
    | "ga4PageViews"
    | "gscClicks"
    | "gscImpressions"
    | "gscAveragePosition";
  color: string;
  formatter?: (value: number) => string;
}) {
  const chartConfig = {
    [seriesKey]: {
      label: title,
      color,
    },
  };

  return (
    <section className={metricCardClass}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2
            className="text-[16px] text-[#e1fdff]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            {title}
          </h2>
          <p className="mt-1 text-[12px] text-[#849495]">{subtitle}</p>
        </div>
      </div>
      <div className="h-[280px]">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(225,253,255,0.08)"
            />
            <XAxis
              dataKey="label"
              tick={{ fill: "#849495", fontSize: 12 }}
              axisLine={{ stroke: "rgba(225,253,255,0.12)" }}
              tickLine={false}
              minTickGap={24}
            />
            <YAxis
              tick={{ fill: "#849495", fontSize: 12 }}
              axisLine={{ stroke: "rgba(225,253,255,0.12)" }}
              tickLine={false}
              width={44}
              tickFormatter={formatter}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey={seriesKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </section>
  );
}

export function AdminAnalytics({ data }: AdminAnalyticsProps) {
  const ga4 = data.ga4;
  const gsc = data.gsc;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1
            className="text-[28px] tracking-[-0.5px] text-[#e1fdff]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            Analytics
          </h1>
          <p
            className="text-[13px] tracking-[0.28px] text-[#849495]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            [SYSTEM: GA4 + GSC // LAST_30_DAYS]
          </p>
        </div>
        <div className="rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(225,253,255,0.03)] px-4 py-3">
          <p
            className="text-[11px] uppercase tracking-[1.2px] text-[#b3c5ff]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            Last updated
          </p>
          <p className="mt-1 text-[13px] text-[#e1fdff]">
            {formatTimestamp(data.generatedAt)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SourceStatus
          label="Google Analytics 4"
          ok={ga4.status.ok}
          lagDays={ga4.status.lagDays}
          warning={ga4.status.warning}
          error={ga4.status.error}
          latestDataDate={ga4.status.latestDataDate}
        />
        <SourceStatus
          label="Google Search Console"
          ok={gsc.status.ok}
          lagDays={gsc.status.lagDays}
          warning={
            gsc.status.warning ||
            "Search Console data may lag behind by up to 48 hours."
          }
          error={gsc.status.error}
          latestDataDate={gsc.status.latestDataDate}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <MetricCard
          label="Users"
          value={formatNumber(ga4.totals.totalUsers)}
          icon={Users}
          color="#00F2FF"
          helper="GA4 total users in the selected range."
        />
        <MetricCard
          label="Sessions"
          value={formatNumber(ga4.totals.sessions)}
          icon={Activity}
          color="#b3c5ff"
          helper="GA4 sessions grouped by day."
        />
        <MetricCard
          label="Page Views"
          value={formatNumber(ga4.totals.pageViews)}
          icon={Eye}
          color="#e1fdff"
          helper="GA4 screen page views in the last 30 days."
        />
        <MetricCard
          label="Clicks"
          value={formatNumber(gsc.totals.clicks)}
          icon={MousePointerClick}
          color="#00F2FF"
          helper="Search Console clicks across verified pages."
        />
        <MetricCard
          label="Impressions"
          value={formatNumber(gsc.totals.impressions)}
          icon={TrendingUp}
          color="#b3c5ff"
          helper="Search Console impressions in the selected range."
        />
        <MetricCard
          label="Avg. Position"
          value={formatPosition(gsc.totals.averagePosition)}
          icon={Gauge}
          color="#e1fdff"
          helper="Impression-weighted average position from GSC."
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AnalyticsChart
          title="GA4 Trend"
          subtitle="Users, sessions, and page views follow the same date axis."
          data={ga4.series}
          seriesKey="ga4Users"
          color="#00F2FF"
          formatter={formatNumber}
        />
        <AnalyticsChart
          title="Search Console Trend"
          subtitle="Clicks and impressions are charted with GSC's expected freshness lag."
          data={gsc.series}
          seriesKey="gscClicks"
          color="#b3c5ff"
          formatter={formatNumber}
        />
      </div>

      <section className="rounded-lg border border-[rgba(179,197,255,0.16)] bg-[rgba(179,197,255,0.05)] p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p
              className="text-[12px] uppercase tracking-[1.2px] text-[#b3c5ff]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              Data Notes
            </p>
            <p className="mt-2 text-[13px] leading-6 text-[#b9cacb]">
              GA4 data is live enough for same-day visibility, while Google
              Search Console is expected to trail by up to 48 hours. That means
              the GSC chart should be read as the latest available reporting
              window rather than a real-time feed.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin"
              className="rounded-md border border-[rgba(225,253,255,0.12)] px-3 py-2 text-[12px] text-[#e1fdff] transition-colors hover:border-[rgba(0,242,255,0.3)]"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
