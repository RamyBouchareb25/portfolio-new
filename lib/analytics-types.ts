export type AnalyticsDateRange = {
  startDate: string;
  endDate: string;
  days: number;
};

export type AnalyticsDailyPoint = {
  date: string;
  label: string;
  ga4Users: number;
  ga4Sessions: number;
  ga4PageViews: number;
  gscClicks: number;
  gscImpressions: number;
  gscAveragePosition: number;
};

export type AnalyticsTotals = {
  totalUsers: number;
  sessions: number;
  pageViews: number;
  clicks: number;
  impressions: number;
  averagePosition: number;
};

export type AnalyticsSourceStatus = {
  ok: boolean;
  lastSuccessfulSyncAt: string;
  latestDataDate: string;
  lagDays: number;
  warning?: string;
  error?: string;
};

export type AnalyticsSourcePayload = {
  totals: AnalyticsTotals;
  series: AnalyticsDailyPoint[];
  status: AnalyticsSourceStatus;
};

export type AnalyticsDashboardPayload = {
  generatedAt: string;
  dateRange: AnalyticsDateRange;
  ga4: AnalyticsSourcePayload;
  gsc: AnalyticsSourcePayload;
};
