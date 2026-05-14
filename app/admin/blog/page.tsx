import { AdminBlog } from "@/app/components/admin/AdminBlog";
// import { getAdminBlogPosts } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  // const blogPosts = await getAdminBlogPosts();

  // return <AdminBlog initialBlogPosts={blogPosts} />;
  return <AdminBlog />;
}
