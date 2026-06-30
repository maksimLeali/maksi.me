import { notFound } from "next/navigation";
import { MainLayout } from "@layouts";
import { SUPPORTED_LANGUAGES } from "../../i18n/languages";

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
    return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: Props) {
    const { lang } = await params;
    if (!(SUPPORTED_LANGUAGES as readonly string[]).includes(lang)) {
        notFound();
    }
    return <MainLayout lang={lang}>{children}</MainLayout>;
}
