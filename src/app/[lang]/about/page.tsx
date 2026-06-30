import { Metadata } from "next";
import { AboutSection } from "../../components/AboutSection";

export const metadata: Metadata = {
    title: "About | Le Maks",
    description:
        "About Maksim Leali — web developer, dog trainer, and game developer. Three paths, one direction: observe, simplify, build.",
    alternates: { canonical: "https://lemaks.it/about" },
    openGraph: {
        title: "About | Le Maks",
        description:
            "About Maksim Leali — web developer, dog trainer, and game developer.",
        url: "https://lemaks.it/about",
        siteName: "Le Maks",
        type: "website",
    },
};

export default function AboutPage() {
    return <AboutSection />;
}
