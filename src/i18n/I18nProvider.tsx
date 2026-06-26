"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { SUPPORTED_LANGUAGES, SupportedLanguage } from "./config";

type Props = {
    children: ReactNode;
};

export const I18nProvider: React.FC<Props> = ({ children }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Mantiene <html lang="..."> aggiornato lato client per accessibilità/SEO
        const syncHtmlLang = (lng: string) => {
            const base = (lng?.split("-")[0] ?? "it") as SupportedLanguage;
            const lang = (SUPPORTED_LANGUAGES as readonly string[]).includes(
                base,
            )
                ? base
                : "it";
            if (typeof document !== "undefined") {
                document.documentElement.lang = lang;
            }
        };

        syncHtmlLang(i18n.language);
        i18n.on("languageChanged", syncHtmlLang);
        setReady(true);

        return () => {
            i18n.off("languageChanged", syncHtmlLang);
        };
    }, []);

    if (!ready) {
        // Evita flash di chiavi non tradotte sul primo render lato client
        return null;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
