import { ProjectsPage } from "@/app/components/pages/ProjectsPage";
import { getPublicProjects } from "@/lib/public-queries";

export default async function Page() {
  const projects = await getPublicProjects();
  const tagCounts = new Map<string, number>();

  for (const project of projects || []) {
    for (const tag of project.tags || []) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }

  const availableTags = Array.from(tagCounts.entries())
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    })
    .map(([tag]) => tag)
    .slice(0, 7);

  return (
    <ProjectsPage projects={projects || []} availableTags={availableTags} />
  );
}
