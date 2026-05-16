import { AdminAnalytics } from "@/app/components/admin/AdminAnalytics";
import { getAnalyticsDashboardPayload } from "@/lib/analytics";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getAnalyticsDashboardPayload();

  return <AdminAnalytics data={data} />;
}
