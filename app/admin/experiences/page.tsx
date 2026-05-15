import {AdminExperience} from "@/app/components/admin/AdminExperience";
import { getPublicExperiences } from "@/lib/public-queries";
export const dynamic = "force-dynamic";


export default async function ExperiencesPage() {
    const experiences = await getPublicExperiences();
  return (
   <AdminExperience initialExperiences={experiences} />
  );
}