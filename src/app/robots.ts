import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://lemaks.it/sitemap.xml",
        host: "https://lemaks.it",
    };
}
