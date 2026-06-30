import { MetadataRoute } from "next";

const BASE = "https://lemaks.it";
const LOCALES = ["it", "en", "fr", "es"];

const PAGES = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/manifesto", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/web-dev", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/game-dev", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/dog-training", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/articles", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return LOCALES.flatMap((locale) =>
        PAGES.map((page) => ({
            url: `${BASE}/${locale}${page.path}`,
            priority: page.priority,
            changeFrequency: page.changeFrequency,
            lastModified,
        })),
    );
}
