"use client";

import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config";
import { SUPPORTED_LANGUAGES, SupportedLanguage } from "./languages";

type Props = {
    children: ReactNode;
    lang: string;
};

export const I18nProvider: React.FC<Props> = ({ children, lang }) => {
    const safeLang = (SUPPORTED_LANGUAGES as readonly string[]).includes(lang)
        ? (lang as SupportedLanguage)
        : "it";

    if (i18n.isInitialized && i18n.language !== safeLang) {
        void i18n.changeLanguage(safeLang);
    }

    useEffect(() => {
        document.documentElement.lang = safeLang;
    }, [safeLang]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
