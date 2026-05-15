import { ProjectsPage } from "@/app/components/pages/ProjectsPage";
import { getPublicProjects } from "@/lib/public-queries";

export default async function Page() {
  const projects = await getPublicProjects();

  return <ProjectsPage projects={projects || []} />;
}
