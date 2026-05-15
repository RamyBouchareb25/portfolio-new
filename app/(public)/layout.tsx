import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import{ getPublicAbout } from "@/lib/public-queries";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutData = await getPublicAbout();

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "#131313" }}
    >
      <Navbar username={aboutData?.name} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
