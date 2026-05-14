import { AdminSkills } from "@/app/components/admin/AdminSkills";
import { getAdminSkills } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const skills = await getAdminSkills();

  return <AdminSkills initialSkills={skills} />;
}
