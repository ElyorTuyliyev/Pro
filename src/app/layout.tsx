import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "@/app/providers";

const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com").replace(
    /\/$/,
    "",
  );

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Elyor Tuyliyev | Web Developer Portfolio",
  description:
    "Elyor Tuyliyev is a web developer and software engineer building fast, responsive, and conversion-focused React + TypeScript products.",
  keywords: [
    "Elyor Tuyliyev",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Elyor Tuyliyev" }],
  applicationName: "Elyor Tuyliyev Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/og-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Elyor Tuyliyev | Web Developer Portfolio",
    description:
      "Web developer portfolio focused on modern React, TypeScript, performance, and business-driven frontend products.",
    siteName: "Elyor Tuyliyev Portfolio",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 640,
        height: 640,
        alt: "Elyor Tuyliyev web developer portfolio cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elyor Tuyliyev | Web Developer Portfolio",
    description:
      "Web developer portfolio with React and TypeScript projects, experience, and direct contact.",
    images: ["/og-image.jpg"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
