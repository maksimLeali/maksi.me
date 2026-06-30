import { Metadata } from "next";
import { LocalPage } from "../../components/LocalPage";

const SLUG = "automations";

const META: Record<string, { title: string; description: string }> = {
    it: {
        title: "Automazioni semplici per richieste e contatti",
        description:
            "Automazioni leggere per gestire richieste, contatti e iscrizioni: email automatiche, notifiche e raccolta ordinata dei dati a Brescia.",
    },
    en: {
        title: "Simple automations for requests and contacts",
        description:
            "Light automations to handle requests, contacts and sign-ups: automatic emails, notifications and tidy data collection in Brescia.",
    },
    fr: {
        title: "Automatisations simples pour demandes et contacts",
        description:
            "Automatisations légères pour gérer demandes, contacts et inscriptions : e-mails automatiques, notifications et collecte ordonnée.",
    },
    es: {
        title: "Automatizaciones sencillas para solicitudes y contactos",
        description:
            "Automatizaciones ligeras para gestionar solicitudes, contactos e inscripciones: correos automáticos, notificaciones y datos ordenados.",
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
            title: `${m.title} | LeMaks`,
            description: m.description,
            url: `https://lemaks.it/${lang}/${SLUG}`,
            siteName: "LeMaks",
            type: "website",
        },
    };
}

export default function AutomationsPage() {
    return <LocalPage ns="automations" />;
}
