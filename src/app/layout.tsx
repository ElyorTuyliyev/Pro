import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "@/app/providers";
import { SITE_URL } from "@/lib/site";

const SITE_NAME = "Elyor Tuyliyev Portfolio";
const DEFAULT_TITLE = "Elyor Tuyliyev";
const DEFAULT_DESCRIPTION =
  "Elyor Tuyliyev is a web developer and software engineer building fast, responsive, and conversion-focused React + TypeScript products.";
const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Elyor Tuyliyev",
  },
  description: DEFAULT_DESCRIPTION,
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
  creator: "Elyor Tuyliyev",
  publisher: "Elyor Tuyliyev",
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  other: {
    google: "notranslate",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/og-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      translate="no"
      className="notranslate"
    >
      <body className="notranslate">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
