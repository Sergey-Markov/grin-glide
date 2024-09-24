// eslint-disable-next-line no-use-before-define
export type Locale = (typeof locales)[number];

export const locales = ["en", "ru", "uk"] as const;
export const defaultLocale: Locale = "ru";
