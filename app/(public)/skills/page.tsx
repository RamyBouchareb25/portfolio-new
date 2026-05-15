import { SkillsPage } from "@/app/components/pages/SkillsPage";
import { getPublicSkills, getPublicCertifications } from "@/lib/public-queries";

export default async function Page() {
  const [skills, certifications] = await Promise.all([
    getPublicSkills(),
    getPublicCertifications(),
  ]);

  return (
    <SkillsPage skills={skills || []} certifications={certifications || []} />
  );
}
