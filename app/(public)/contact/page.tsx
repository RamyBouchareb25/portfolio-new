import { ContactPage } from "@/app/components/pages/ContactPage";
import { getPublicAbout } from "@/lib/public-queries";

export default async function Page() {
  const aboutData = await getPublicAbout();

  return <ContactPage aboutData={aboutData} />;
}
