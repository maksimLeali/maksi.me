"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import it from "./locales/it/common.json";
import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import es from "./locales/es/common.json";

export const SUPPORTED_LANGUAGES = ["it", "en", "fr", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_STORAGE_KEY = "lemaks_lang";

if (!i18n.isInitialized) {
    i18n.use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                it: { common: it },
                en: { common: en },
                fr: { common: fr },
                es: { common: es },
            },
            fallbackLng: "it",
            supportedLngs: SUPPORTED_LANGUAGES,
            defaultNS: "common",
            ns: ["common"],
            interpolation: {
                escapeValue: false,
            },
            detection: {
                // Niente cookie: solo localStorage + browser navigator
                order: ["localStorage", "navigator", "htmlTag"],
                caches: ["localStorage"],
                lookupLocalStorage: LANGUAGE_STORAGE_KEY,
            },
            react: {
                useSuspense: false,
            },
        });
}

export default i18n;
