"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./locales/it/common.json";
import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import es from "./locales/es/common.json";

export { SUPPORTED_LANGUAGES, LANGUAGE_STORAGE_KEY } from "./languages";
export type { SupportedLanguage } from "./languages";

import { SUPPORTED_LANGUAGES } from "./languages";

if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources: {
            it: { common: it },
            en: { common: en },
            fr: { common: fr },
            es: { common: es },
        },
        lng: "it",
        fallbackLng: "it",
        supportedLngs: SUPPORTED_LANGUAGES,
        defaultNS: "common",
        ns: ["common"],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });
}

export default i18n;
