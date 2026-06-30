import { Metadata } from "next";
import { ArticlesSection } from "../../components/ArticlesSection";

export const metadata: Metadata = {
    title: "Articles",
    description:
        "Articles and thoughts by Maksim Leali on web development, game design, and dog training. Essays, tutorials and observations.",
    alternates: { canonical: "https://lemaks.it/articles" },
    openGraph: {
        title: "Articles | LeMaks",
        description:
            "Articles and thoughts by Maksim Leali on web development, game design, and dog training.",
        url: "https://lemaks.it/articles",
        siteName: "LeMaks",
        type: "website",
    },
};

export default function ArticlesPage() {
    return <ArticlesSection />;
}
