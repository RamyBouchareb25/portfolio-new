import { AboutPage } from "@/app/components/pages/AboutPage";
import {
  getPublicAbout,
  getPublicActiveCV,
  getPublicActivePhoto,
  getPublicExperiences,
} from "@/lib/public-queries";

export default async function Page() {
  const [aboutData, cv, photo, experiences] = await Promise.all([
    getPublicAbout(),
    getPublicActiveCV(),
    getPublicActivePhoto(),
    getPublicExperiences(),
  ]);

  return (
    <AboutPage
      aboutData={aboutData}
      experiences={experiences}
      cv={cv}
      photo={photo}
    />
  );
}
