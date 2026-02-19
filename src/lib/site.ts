const DEFAULT_DEV_SITE_URL = "http://localhost:3000";
const DEFAULT_PROD_SITE_URL = "https://elyorjon.uz/";

const ensureProtocol = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

const normalizeUrl = (value: string) =>
  ensureProtocol(value).replace(/\/+$/, "");

const resolveSiteUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (envUrl) {
    return normalizeUrl(envUrl);
  }

  return process.env.NODE_ENV === "development"
    ? DEFAULT_DEV_SITE_URL
    : DEFAULT_PROD_SITE_URL;
};

export const SITE_URL = resolveSiteUrl();
