import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./providers";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ramybouchareb.me";
const metaImage = `${siteUrl}/meta.png`;

export const metadata: Metadata = {
  title: "Ramy - DevOps & Infrastructure Expert",
  description: "Portfolio of DevOps, Kubernetes, and Infrastructure expertise",
  keywords: [
    "DevOps",
    "Kubernetes",
    "Infrastructure",
    "Cloud",
    "SRE",
    "Observability",
  ],
  authors: [{ name: "Ramy Bouchareb", url: siteUrl }],
  creator: "Ramy Bouchareb",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Ramy - DevOps & Infrastructure Expert",
    description:
      "Portfolio of DevOps, Kubernetes, and Infrastructure expertise",
    url: siteUrl,
    siteName: "Ramy",
    images: [
      {
        url: metaImage,
        alt: "Ramy - DevOps & Infrastructure Expert",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramy - DevOps & Infrastructure Expert",
    description:
      "Portfolio of DevOps, Kubernetes, and Infrastructure expertise",
    images: [metaImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D6529PKJWB"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D6529PKJWB');
            `,
          }}
        />

        {/* Basic favicons / manifest / canonical and social images for non-blog routes */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={siteUrl} />

        {/* Force default open graph / twitter image for generic pages (blog/[slug] should provide its own metadata) */}
        <meta property="og:image" content={metaImage} />
        <meta
          property="og:image:alt"
          content="Ramy - DevOps & Infrastructure Expert"
        />
        <meta name="twitter:image" content={metaImage} />
      </head>
      <body className="h-full antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
