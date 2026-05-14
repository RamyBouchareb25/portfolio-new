import { AdminProjects } from "@/app/components/admin/AdminProjects";
import { getAdminProjects } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const projects = await getAdminProjects();

  return <AdminProjects initialProjects={projects} />;
}
