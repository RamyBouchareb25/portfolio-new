import { AdminDashboard } from "@/app/components/admin/AdminDashboard";
import {
  getAdminProjects,
  getAdminSkills,
  getAdminBlogPosts,
  getAdminCertifications,
} from "@/lib/admin-queries";

export default async function Page() {
  const [projects, skills, blogPosts, certifications] = await Promise.all([
    getAdminProjects(),
    getAdminSkills(),
    getAdminBlogPosts(),
    getAdminCertifications(),
  ]);

  return (
    <AdminDashboard
      projects={projects}
      skills={skills}
      blogPosts={blogPosts}
      certifications={certifications}
    />
  );
}
