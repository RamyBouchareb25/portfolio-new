import { AboutPage } from "@/app/components/pages/AboutPage";
import {
  getPublicAbout,
  getPublicActiveCV,
  getPublicExperiences,
} from "@/lib/public-queries";

export default async function Page() {
  const [aboutData, cv, experiences] = await Promise.all([
    getPublicAbout(),
    getPublicActiveCV(),
    getPublicExperiences(),
  ]);

  return <AboutPage aboutData={aboutData} experiences={experiences} cv={cv} />;
}
