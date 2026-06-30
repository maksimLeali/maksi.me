export const SUPPORTED_LANGUAGES = ["it", "en", "fr", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const LANGUAGE_STORAGE_KEY = "lemaks_lang";
