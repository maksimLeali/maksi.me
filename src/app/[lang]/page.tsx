import { Metadata } from "next";
import { HomeContent } from "../components/HomeContent";

const META: Record<string, { title: string; description: string }> = {
    it: {
        title: "Sviluppatore web a Brescia",
        description:
            "Creo siti web, pagine evento e automazioni semplici per attività locali, associazioni e professionisti a Brescia e provincia.",
    },
    en: {
        title: "Web developer in Brescia",
        description:
            "I build websites, event pages and simple automations for local businesses, associations and professionals in Brescia and its province.",
    },
    fr: {
        title: "Développeur web à Brescia",
        description:
            "Je crée des sites web, des pages d'événement et des automatisations simples pour les entreprises et professionnels à Brescia et sa province.",
    },
    es: {
        title: "Desarrollador web en Brescia",
        description:
            "Creo sitios web, páginas de eventos y automatizaciones sencillas para negocios, asociaciones y profesionales en Brescia y provincia.",
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const m = META[lang] ?? META.it;
    return {
        title: m.title,
        description: m.description,
        alternates: { canonical: `https://lemaks.it/${lang}` },
        openGraph: {
            title: `${m.title} | LeMaks`,
            description: m.description,
            url: `https://lemaks.it/${lang}`,
            siteName: "LeMaks",
            type: "website",
        },
    };
}

export default function Main() {
    return <HomeContent />;
}
