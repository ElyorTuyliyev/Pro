import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const isPlaceholderDomain = SITE_URL.includes("your-domain.com");

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: isPlaceholderDomain ? undefined : `${SITE_URL}/sitemap.xml`,
  host: isPlaceholderDomain ? undefined : SITE_URL,
});

export default robots;
