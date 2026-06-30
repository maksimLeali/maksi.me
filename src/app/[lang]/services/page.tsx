import { Metadata } from "next";
import { ServicesSection } from "../../components/ServicesSection";

export const metadata: Metadata = {
    title: "Services | Le Maks",
    description:
        "Web development and dog training services by Maksim Leali. Custom websites, UI design, and canine education tailored to your needs.",
    alternates: { canonical: "https://lemaks.it/services" },
    openGraph: {
        title: "Services | Le Maks",
        description:
            "Web development and dog training services by Maksim Leali — custom websites, UI design, canine education.",
        url: "https://lemaks.it/services",
        siteName: "Le Maks",
        type: "website",
    },
};

export default function ServicesPage() {
    return <ServicesSection />;
}
