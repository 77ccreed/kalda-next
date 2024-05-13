import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "et" as const;
export const locales = ["en", "et"] as const;

export const pathnames = {
  "/": "/",
  "/meist": {
    et: "/meist",
    en: "/about-us",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "as-needed" as const;

export type AppPathnames = keyof typeof pathnames;
