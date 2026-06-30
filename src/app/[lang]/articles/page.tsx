import { Metadata } from "next";
import { ArticlesSection } from "../../components/ArticlesSection";

export const metadata: Metadata = {
    title: "Articles | Le Maks",
    description:
        "Articles and thoughts by Maksim Leali on web development, game design, and dog training. Essays, tutorials and observations.",
    alternates: { canonical: "https://lemaks.it/articles" },
    openGraph: {
        title: "Articles | Le Maks",
        description:
            "Articles and thoughts by Maksim Leali on web development, game design, and dog training.",
        url: "https://lemaks.it/articles",
        siteName: "Le Maks",
        type: "website",
    },
};

export default function ArticlesPage() {
    return <ArticlesSection />;
}
