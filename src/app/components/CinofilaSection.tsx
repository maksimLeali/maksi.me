"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";

const TOPICS = [
    {
        symbol: "◜",
        title: "Cuccioli e primi mesi",
        desc: "Routine, inserimento in famiglia e costruzione delle prime basi.",
        hint: "Costruire abitudini serene fin da subito.",
    },
    {
        symbol: "◝",
        title: "Comunicazione",
        desc: "Imparare a leggere segnali, bisogni e momenti di difficoltà.",
        hint: "Ascoltare prima di chiedere.",
    },
    {
        symbol: "◟",
        title: "Passeggiata e ambiente",
        desc: "Creare esperienze più serene dentro e fuori casa.",
        hint: "L'ambiente è parte dell'educazione.",
    },
    {
        symbol: "◞",
        title: "Cani adottati",
        desc: "Accogliere la storia del cane e costruire nuove abitudini con gradualità.",
        hint: "Ogni storia merita tempo.",
    },
];

export const CinofilaSection = () => {
    return (
        <Section id="cinofila">
            <Intro>
                <Photo>
                    <img
                        src="/assets/doggo3.jpg"
                        alt="Cane durante una sessione di educazione"
                    />
                </Photo>
                <div className="copy">
                    <span className="tech-label aqua">
                        03 / EDUCAZIONE CINOFILA
                    </span>
                    <h2>Capire il cane è il primo passo per educarlo.</h2>
                    <p>
                        Sto approfondendo il metodo cognitivo-relazionale per
                        imparare a osservare il cane come individuo: con
                        emozioni, bisogni, esperienze e un proprio modo di
                        comunicare. Un percorso in formazione, portato avanti
                        con serietà, studio e rispetto.
                    </p>
                    <Cta href="#contact">
                        Scopri il mio percorso
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
            </Intro>

            <Approach>
                <div className="text">
                    <h3>Ogni cane ha una storia. Da lì si comincia.</h3>
                    <p>
                        Non esistono soluzioni standard valide per tutti. Ogni
                        percorso parte dall&apos;
                        <span className="aqua">osservazione</span> del cane, dal
                        contesto in cui vive e dalle esigenze della sua
                        famiglia.
                    </p>
                    <p>
                        Il metodo cognitivo-relazionale valorizza{" "}
                        <span className="aqua">collaborazione</span> e{" "}
                        <span className="aqua">fiducia</span>. L&apos;obiettivo
                        non è avere un cane perfetto, ma un cane più sereno,
                        ascoltato e capace di affrontare il mondo accanto alla
                        sua persona.
                    </p>
                </div>
                <Curve viewBox="0 0 200 300" preserveAspectRatio="none">
                    <path
                        d="M180,10 C40,80 220,160 60,290"
                        fill="none"
                        stroke="var(--tertiary)"
                        strokeWidth="1"
                    />
                </Curve>
                <PhotoTall>
                    <img
                        src="/assets/doggo.jpg"
                        alt="Cane in un momento di relax"
                    />
                </PhotoTall>
            </Approach>

            <Topics>
                <h3>Piccoli passi, utili nella vita reale.</h3>
                <div className="grid">
                    {TOPICS.map((t, i) => (
                        <Topic
                            key={t.title}
                            style={{ animationDelay: `${0.1 * i}s` }}
                        >
                            <span className="symbol">{t.symbol}</span>
                            <h4>{t.title}</h4>
                            <p>{t.desc}</p>
                            <span className="hint aqua">{t.hint}</span>
                        </Topic>
                    ))}
                </div>
            </Topics>

            <Diary>
                <div className="copy">
                    <h3>Studio, osservo, imparo.</h3>
                    <p>
                        Questo spazio raccoglie appunti, riflessioni e
                        osservazioni dal mio percorso di formazione. Non vuole
                        dare risposte assolute: vuole condividere domande
                        migliori e un modo più consapevole di stare accanto ai
                        cani.
                    </p>
                    <span className="soon mono">DIARIO IN ARRIVO</span>
                </div>
                <Notebook>
                    <img
                        src="/assets/doggo2.jpg"
                        alt="Momento di connessione con il cane"
                    />
                </Notebook>
            </Diary>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${$uw(4)};
    padding: ${$cssTRBL(2, 1)};
    margin-bottom: ${$uw(4)};
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
        gap: ${$uw(5)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(6)};
        margin-bottom: ${$uw(6)};
    }

    h2 {
        font-family: "Martian Mono", monospace;
        font-weight: 200;
        font-size: ${$uw(3)};
        ${$breakPoint(500)} {
            font-size: ${$uw(5)};
        }
    }
    h3 {
        font-family: "Martian Mono", monospace;
        font-weight: 300;
        font-size: ${$uw(2.4)};
        margin-bottom: ${$uw(0.8)};
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
            margin-bottom: ${$uw(1.2)};
        }
    }
`;

const Photo = styled.div`
    position: relative;
    width: ${$uw(22)};
    height: ${$uw(18)};
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid ${$color("aqua")};
    ${$breakPoint(820)} {
        width: 100%;
        height: ${$uw(28)};
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Intro = styled.div`
    display: flex;
    align-items: center;
    gap: ${$uw(2)};
    ${$breakPoint(820)} {
        flex-direction: column;
        align-items: flex-start;
        gap: ${$uw(3)};
    }
    .copy {
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.8)};
        max-width: ${$uw(30)};
        ${$breakPoint(820)} {
            max-width: 100%;
        }
        ${$breakPoint(500)} {
            gap: ${$uw(1.2)};
        }
    }
    .copy p {
        color: ${$color("white-dark")};
        text-align: justify;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const Cta = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.6)};
    width: fit-content;
    margin-top: ${$uw(0.6)};
    padding: ${$cssTRBL(0.6, 1.2)};
    border-radius: 2px;
    text-decoration: none;
    font-family: "Space Mono", monospace;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${$color("black-dark")};
    background-color: ${$color("aqua")};
    transition:
        transform 0.2s ease,
        background-color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.2, 2)};
        margin-top: ${$uw(1)};
    }
    &:hover {
        transform: translateY(-2px);
        background-color: ${$color("aqua-light")};
    }
`;

const Approach = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${$uw(3)};
    ${$breakPoint(820)} {
        flex-direction: column;
        align-items: flex-start;
        gap: ${$uw(3)};
    }
    .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.8)};
        ${$breakPoint(500)} {
            gap: ${$uw(1.2)};
        }
    }
    .text p {
        color: ${$color("white-dark")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const Curve = styled.svg`
    position: absolute;
    top: 0;
    left: 45%;
    width: ${$uw(10)};
    height: 100%;
    opacity: 0.5;
    pointer-events: none;
    ${$breakPoint(820)} {
        display: none;
    }
`;

const PhotoTall = styled.div`
    position: relative;
    width: ${$uw(16)};
    height: ${$uw(24)};
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid ${$color("aqua")};
    ${$breakPoint(820)} {
        width: 100%;
        height: ${$uw(28)};
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Topics = styled.div`
    display: flex;
    flex-direction: column;
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: ${$uw(1.5)};
        ${$breakPoint(820)} {
            grid-template-columns: repeat(2, 1fr);
            gap: ${$uw(2)};
        }
        ${$breakPoint(500)} {
            grid-template-columns: 1fr;
            gap: ${$uw(2.5)};
        }
    }
`;

const Topic = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.4)};
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    ${$breakPoint(500)} {
        gap: ${$uw(0.8)};
    }

    .symbol {
        font-size: ${$uw(2.4)};
        color: ${$color("aqua")};
        animation: slowFloat 9s ease-in-out infinite;
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
        }
    }
    h4 {
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        color: ${$color("white-light")};
        ${$breakPoint(500)} {
            font-size: ${$uw(2.4)};
        }
    }
    p {
        color: ${$color("gray")};
        font-size: 1.5rem;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
    .hint {
        font-size: 1.3rem;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
        ${$breakPoint(820)} {
            max-height: ${$uw(3)};
            opacity: 1;
            font-size: 1.4rem;
        }
    }
    &:hover .hint {
        max-height: ${$uw(3)};
        opacity: 1;
    }
`;

const Diary = styled.div`
    display: flex;
    gap: ${$uw(2)};
    padding: ${$uw(1.5)};
    border-radius: 6px;
    background-color: ${$color("black")};
    border: 1px solid ${$color("gray-dark")};
    ${$breakPoint(820)} {
        flex-direction: column;
        gap: ${$uw(2.5)};
        padding: ${$uw(2)};
    }
    ${$breakPoint(500)} {
        padding: ${$uw(2.5)};
    }
    .copy {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.6)};
        ${$breakPoint(500)} {
            gap: ${$uw(1)};
        }
    }
    .copy p {
        color: ${$color("gray")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
    .soon {
        font-size: 1.3rem;
        letter-spacing: 0.2em;
        color: ${$color("aqua-light")};
        margin-top: ${$uw(0.4)};
    }
`;

const Notebook = styled.div`
    position: relative;
    width: ${$uw(14)};
    height: ${$uw(10)};
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid ${$color("aqua-dark")};
    ${$breakPoint(820)} {
        width: 100%;
        height: ${$uw(16)};
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;
