import { Metadata } from "next";
import { AboutSection } from "../../components/AboutSection";

export const metadata: Metadata = {
    title: "About | LeMaks",
    description:
        "About Maksim Leali — web developer, dog trainer, and game developer. Three paths, one direction: observe, simplify, build.",
    alternates: { canonical: "https://lemaks.it/about" },
    openGraph: {
        title: "About | LeMaks",
        description:
            "About Maksim Leali — web developer, dog trainer, and game developer.",
        url: "https://lemaks.it/about",
        siteName: "LeMaks",
        type: "website",
    },
};

export default function AboutPage() {
    return <AboutSection />;
}
