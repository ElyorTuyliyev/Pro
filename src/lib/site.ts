const DEFAULT_SITE_URL = "https://elyorjon.uz";
const LOCAL_URL_PATTERN =
  /^(?:https?:\/\/)?(?:localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)(?::\d+)?(?:\/|$)/i;

const ensureProtocol = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

const normalizeUrl = (value: string) =>
  ensureProtocol(value).replace(/\/+$/, "");

const isLocalUrl = (value: string) => LOCAL_URL_PATTERN.test(value.trim());

const resolveSiteUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (envUrl && !isLocalUrl(envUrl)) {
    return normalizeUrl(envUrl);
  }

  return normalizeUrl(DEFAULT_SITE_URL);
};

export const SITE_URL = resolveSiteUrl();
