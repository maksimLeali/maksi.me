import { Metadata } from "next";
import { GameDevSection } from "../../components/GameDevSection";

export const metadata: Metadata = {
    title: "Game Development | LeMaks",
    description:
        "Game development experiments by Maksim Leali. Exploring mechanics, design and interactive experiences through indie games.",
    alternates: { canonical: "https://lemaks.it/game-dev" },
    openGraph: {
        title: "Game Development | LeMaks",
        description:
            "Game development experiments by Maksim Leali — mechanics, design, interactive experiences.",
        url: "https://lemaks.it/game-dev",
        siteName: "LeMaks",
        type: "website",
    },
};

export default function GameDevPage() {
    return <GameDevSection />;
}
