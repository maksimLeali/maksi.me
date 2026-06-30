import { Metadata } from "next";
import { GameDevSection } from "../../components/GameDevSection";

export const metadata: Metadata = {
    title: "Game Development | Le Maks",
    description:
        "Game development experiments by Maksim Leali. Exploring mechanics, design and interactive experiences through indie games.",
    alternates: { canonical: "https://lemaks.it/game-dev" },
    openGraph: {
        title: "Game Development | Le Maks",
        description:
            "Game development experiments by Maksim Leali — mechanics, design, interactive experiences.",
        url: "https://lemaks.it/game-dev",
        siteName: "Le Maks",
        type: "website",
    },
};

export default function GameDevPage() {
    return <GameDevSection />;
}
