import { HomePage } from "@/app/components/pages/HomePage";
import {
  getPublicProjects,
  getPublicAbout,
  getPublicActiveCV,
} from "@/lib/public-queries";

export default async function Page() {
  const [projects, about, activeCV] = await Promise.all([
    getPublicProjects(),
    getPublicAbout(),
    getPublicActiveCV(),
  ]);
  const featuredProjects = projects?.slice(0, 3) || [];

  return (
    <HomePage featuredProjects={featuredProjects} about={about} cv={activeCV} />
  );
}
