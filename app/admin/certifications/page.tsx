import { AdminCertifications } from "@/app/components/admin/AdminCertifications";
import { getAdminCertifications } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const certifications = await getAdminCertifications();

  return <AdminCertifications initialCertifications={certifications} />;
}
