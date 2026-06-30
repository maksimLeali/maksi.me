import { Metadata } from "next";
import { LocalPage } from "../../components/LocalPage";

const SLUG = "events";

const META: Record<string, { title: string; description: string }> = {
    it: {
        title: "Pagine evento e moduli di iscrizione a Brescia",
        description:
            "Pagine dedicate a eventi, corsi e iniziative a Brescia e provincia, con moduli di iscrizione e raccolta richieste semplici da gestire.",
    },
    en: {
        title: "Event pages and sign-up forms in Brescia",
        description:
            "Dedicated pages for events, courses and initiatives in Brescia and its province, with sign-up forms that are easy to manage.",
    },
    fr: {
        title: "Pages d'événement et inscriptions à Brescia",
        description:
            "Pages dédiées aux événements, cours et initiatives à Brescia et sa province, avec des formulaires d'inscription faciles à gérer.",
    },
    es: {
        title: "Páginas de eventos e inscripciones en Brescia",
        description:
            "Páginas dedicadas a eventos, cursos e iniciativas en Brescia y provincia, con formularios de inscripción fáciles de gestionar.",
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
        alternates: { canonical: `https://lemaks.it/${lang}/${SLUG}` },
        openGraph: {
            title: `${m.title} | Le Maks`,
            description: m.description,
            url: `https://lemaks.it/${lang}/${SLUG}`,
            siteName: "Le Maks",
            type: "website",
        },
    };
}

export default function EventsPage() {
    return <LocalPage ns="events" />;
}
