import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Ramy - DevOps & Infrastructure Expert",
  description: "Portfolio of DevOps, Kubernetes, and Infrastructure expertise",
  openGraph: {
    title: "Ramy - DevOps & Infrastructure Expert",
    description:
      "Portfolio of DevOps, Kubernetes, and Infrastructure expertise",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ramybouchareb.me",
    siteName: "Ramy",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://ramybouchareb.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
