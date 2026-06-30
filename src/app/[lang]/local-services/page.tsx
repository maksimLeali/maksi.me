import { Metadata } from "next";
import { LocalPage } from "../../components/LocalPage";

const SLUG = "local-services";

const META: Record<string, { title: string; description: string }> = {
    it: {
        title: "Siti web per attività locali a Brescia",
        description:
            "Siti web semplici e curati per negozi, studi e associazioni a Brescia e provincia, pensati per farsi trovare e ricevere richieste.",
    },
    en: {
        title: "Websites for local businesses in Brescia",
        description:
            "Simple, well-crafted websites for shops, studios and associations in Brescia and its province, designed to be found and receive requests.",
    },
    fr: {
        title: "Sites web pour entreprises locales à Brescia",
        description:
            "Sites web simples et soignés pour commerces, cabinets et associations à Brescia et sa province, conçus pour être trouvés.",
    },
    es: {
        title: "Sitios web para negocios locales en Brescia",
        description:
            "Sitios web sencillos y cuidados para tiendas, despachos y asociaciones en Brescia y provincia, pensados para ser encontrados.",
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

export default function LocalServicesPage() {
    return <LocalPage ns="localServices" />;
}
