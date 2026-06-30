import { Metadata } from "next";
import { ManifestoSection } from "../../components/ManifestoSection";

export const metadata: Metadata = {
    title: "Manifesto",
    description:
        "Three directions, one way of working. How Maksim Leali approaches web development, game development, and dog training — clarity, comprehension, interaction.",
    alternates: { canonical: "https://lemaks.it/manifesto" },
    openGraph: {
        title: "Manifesto | LeMaks",
        description:
            "Three directions, one way of working. Observe, simplify, build something that truly works.",
        url: "https://lemaks.it/manifesto",
        siteName: "LeMaks",
        type: "website",
    },
};

export default function ManifestoPage() {
    return <ManifestoSection />;
}
