import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "et" as const;
export const locales = ["en", "et"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/meist": {
    et: "/meist",
    en: "/about-us",
  },
  "/majutus/hostel": {
    et: "/majutus/hostel",
    en: "/accommodation/hostel",
  },
  "/majutus/kodumajutuse-toad": {
    et: "/majutus/kodumajutuse-toad",
    en: "/accommodation/homestay-rooms",
  },
  "/majutus/puhkemaja": {
    et: "/majutus/puhkemaja",
    en: "/accommodation/holiday-house",
  },
  "/majutus/kampingmajad": {
    et: "/majutus/kampingmajad",
    en: "/accommodation/camping-cabins",
  },
  "/majutus/karavanid-ja-autoelamud": {
    et: "/majutus/karavanid-ja-autoelamud",
    en: "/accommodation/caravans-and-motorhomes",
  },
  "/majutus/telkimisala": {
    et: "/majutus/telkimisala",
    en: "/accommodation/camping-area",
  },
  "/broneerimine": {
    et: "/broneerimine",
    en: "/booking",
  },
  "/teenused/kanuurent": {
    et: "/teenused/kanuurent",
    en: "/services/canoe-rental",
  },
  "/teenused/sündmuste-korraldamine": {
    et: "/teenused/sündmuste-korraldamine",
    en: "/services/event-organization",
  },
  "/teenused/saun": {
    et: "/teenused/saun",
    en: "/services/sauna",
  },
  "/kontakt": {
    et: "/kontakt",
    en: "/contact",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "as-needed" as const;

export type AppPathnames = keyof typeof pathnames;
