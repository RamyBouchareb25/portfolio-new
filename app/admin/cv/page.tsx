import { AdminCV } from "@/app/components/admin/AdminCV";
import { getAdminCVFiles } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const cvFiles = await getAdminCVFiles();

  return <AdminCV initialCVFiles={cvFiles} />;
}
