import StyledComponentsRegistry from "../layouts/StyledComponentsRegistry";
import "./globals.css";
import { MainLayout } from "@layouts";
import Script from "next/script";

export const metadata = {
    title: "Le Maks",
    description:
        "Il sito personale di Maksim Leali, sviluppatore web e appassionato di tecnologia.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsRegistry>
            <html lang="en">
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
                </head>
                <body>
                    <MainLayout>{children}</MainLayout>
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
