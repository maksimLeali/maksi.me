import { Metadata } from "next";
import { WebDevSection } from "../../components/WebDevSection";

export const metadata: Metadata = {
    title: "Web Development | Le Maks",
    description:
        "Web development projects by Maksim Leali — minimal design, real usability, clear interfaces. From concept to production.",
    alternates: { canonical: "https://lemaks.it/web-dev" },
    openGraph: {
        title: "Web Development | Le Maks",
        description:
            "Web development projects by Maksim Leali — minimal design, real usability, clear interfaces.",
        url: "https://lemaks.it/web-dev",
        siteName: "Le Maks",
        type: "website",
    },
};

export default function WebDevPage() {
    return <WebDevSection />;
}
