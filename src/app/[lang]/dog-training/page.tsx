import { Metadata } from "next";
import { CinofilaSection } from "../../components/CinofilaSection";

export const metadata: Metadata = {
    title: "Dog Training",
    description:
        "Canine education and dog training by Maksim Leali. Puppies, communication, walking and adoption — building a real relationship with your dog.",
    alternates: { canonical: "https://lemaks.it/dog-training" },
    openGraph: {
        title: "Dog Training | LeMaks",
        description:
            "Canine education and dog training by Maksim Leali — puppies, communication, walking, adoption.",
        url: "https://lemaks.it/dog-training",
        siteName: "LeMaks",
        type: "website",
    },
};

export default function CinofilaPage() {
    return <CinofilaSection />;
}
