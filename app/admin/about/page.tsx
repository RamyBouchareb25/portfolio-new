import { AdminAbout } from "@/app/components/admin/AdminAbout";
import { getAdminAbout, getAdminPhotoFiles } from "@/lib/admin-queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [about, photoFiles] = await Promise.all([
    getAdminAbout(),
    getAdminPhotoFiles(),
  ]);

  return <AdminAbout initialAbout={about} initialPhotoFiles={photoFiles} />;
}
