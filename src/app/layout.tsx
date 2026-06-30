import { headers } from "next/headers";
import StyledComponentsRegistry from "../layouts/StyledComponentsRegistry";
import "./globals.css";
import Script from "next/script";

export const metadata: import("next").Metadata = {
    title: {
        default: "LeMaks — Maksim Leali",
        template: "%s | LeMaks",
    },
    description:
        "Maksim Leali — web developer, dog trainer and game developer. I design websites, study the relationship between people and dogs, and experiment with game development.",
    metadataBase: new URL("https://lemaks.it"),
    alternates: { canonical: "/" },
    keywords: [
        "web development",
        "dog training",
        "game development",
        "Maksim Leali",
        "Le Maks",
        "sviluppatore web",
    ],
    openGraph: {
        type: "website",
        siteName: "LeMaks",
        title: "LeMaks — Maksim Leali",
        description:
            "Maksim Leali — web developer, dog trainer and game developer.",
        url: "https://lemaks.it",
    },
    twitter: {
        card: "summary",
        title: "LeMaks — Maksim Leali",
        description:
            "Maksim Leali — web developer, dog trainer and game developer.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const headersList = await headers();
    const locale = headersList.get("x-locale") ?? "it";

    return (
        <StyledComponentsRegistry>
            <html lang={locale}>
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    {/* eslint-disable @next/next/no-page-custom-font */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Oxygen:wght@300;400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
                        rel="stylesheet"
                    />
                    {/* eslint-enable @next/next/no-page-custom-font */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": [
                                    {
                                        "@type": "Person",
                                        "@id": "https://lemaks.it/#person",
                                        name: "Maksim Leali",
                                        alternateName: "Le Maks",
                                        url: "https://lemaks.it",
                                        jobTitle: "Web Developer",
                                        sameAs: [
                                            "https://github.com/maksimLeali",
                                            "https://www.instagram.com/lemaks_dev/",
                                            "https://www.linkedin.com/in/maksim-leali-50a940168/",
                                        ],
                                    },
                                    {
                                        "@type": "WebSite",
                                        "@id": "https://lemaks.it/#website",
                                        url: "https://lemaks.it",
                                        name: "LeMaks",
                                        publisher: {
                                            "@id": "https://lemaks.it/#person",
                                        },
                                        inLanguage: "it",
                                    },
                                ],
                            }),
                        }}
                    />
                </head>
                <body>
                    {children}
                    <Script
                        defer
                        src="https://analytics.lemaks.it/script.js"
                        data-website-id="c2ecd1dd-1be4-404d-bb0e-a0d096832d10"
                        data-domains="lemaks.it,www.lemaks.it"
                        data-do-not-track="true"
                        data-exclude-search="true"
                        data-exclude-hash="true"
                    ></Script>
                </body>
            </html>
        </StyledComponentsRegistry>
    );
}
