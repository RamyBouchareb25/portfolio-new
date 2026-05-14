import { AdminAbout } from "@/app/components/admin/AdminAbout";
import { getAdminAbout } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const about = await getAdminAbout();

  return <AdminAbout initialAbout={about} />;
}
