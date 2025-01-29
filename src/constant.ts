/**
 * Check if the environment is in development mode
 */
export const IS_DEV = process.env.NODE_ENV !== "production";

/**
 * Currently experimental, and not working as expected
 * Will move to config file in the future
 */
export const USE_CACHE = false;

/**
 * Base URL of the Index
 * Will use the specified domain in the environment variable if available
 * Otherwise, it will use the Vercel project production URL or the Vercel URL
 *
 * On development, it will use `http://localhost:3000`
 */
export const BASE_URL = "archimax.vercel.app"
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_DOMAIN ??
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      process.env.VERCEL_URL ??
      process.env.URL ?? // Netlify
      process.env.DEPLOY_URL ?? // Netlify
      process.env.CF_PAGES_URL ?? // Cloudflare Pages
      process.env.RAILWAY_PUBLIC_DOMAIN ?? // Railway
      process.env.RENDER_EXTERNAL_HOSTNAME ?? // Render
      "you-need-to-set-the-domain.com" // Fallback to prevent build error
    : "http://localhost:3000";

/**
 * Cookies name for the app
 */
export const COOKIES_NAME = {
  indexPassword: "next-gdrive-index-password",
  folderPassword: "next-gdrive-index-folder-password",
  viewType: "next-gdrive-index-view-type",
} as const;
export const COOKIES_AGE = 60 * 60 * 24 * 365; // Default: 1 year
export const COOKIES_OPTIONS = {
  path: "/",
  secure: !IS_DEV,
  sameSite: "strict",
  httpOnly: true,
  maxAge: COOKIES_AGE * 1000,
} as const;

/**
 * On this paths, navbar and footer will not be rendered
 */
export const NO_LAYOUT_PATHS = [/\/ngdi-internal\/embed\//g];
