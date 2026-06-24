"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";

const SERVICES = [
    {
        n: "01",
        title: "Siti vetrina",
        desc: "Per professionisti e attività che vogliono raccontarsi con chiarezza.",
        color: "primary",
    },
    {
        n: "02",
        title: "Siti aziendali",
        desc: "Per aziende che hanno bisogno di una presenza online credibile e ordinata.",
        color: "primary-dark",
    },
    {
        n: "03",
        title: "Landing page",
        desc: "Per servizi, campagne, prodotti o idee da presentare in modo diretto.",
        color: "aqua-dark",
    },
    {
        n: "04",
        title: "Restyling",
        desc: "Per trasformare un sito datato in uno strumento più chiaro, veloce e attuale.",
        color: "secondary",
    },
];

const PROCESS = [
    { n: "01", text: "Capire obiettivi e pubblico" },
    { n: "02", text: "Organizzare contenuti e struttura" },
    { n: "03", text: "Disegnare un'interfaccia coerente" },
    { n: "04", text: "Sviluppare, testare e ottimizzare" },
    { n: "05", text: "Pubblicare un sito pronto a crescere" },
];

export const WebDevSection = () => {
    return (
        <Section id="web">
            <Intro>
                <div className="copy">
                    <span className="tech-label cyan">
                        01 / WEB DEVELOPMENT
                    </span>
                    <h2>Siti web che raccontano bene chi sei.</h2>
                    <p>
                        Da oltre 8 anni progetto e sviluppo siti di
                        presentazione per professionisti, attività locali e
                        aziende. Creo esperienze digitali ordinate, veloci e
                        costruite per aiutare chi visita il sito a capire subito
                        una cosa: perché scegliere proprio te.
                    </p>
                    <Cta href="#contact">
                        Parliamo del tuo sito
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
            </Intro>

            <Mockups>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="desktop"
                    src="/assets/barba.png"
                    alt="Mockup desktop di un sito sviluppato da LeMaks"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="mobile"
                    src="/assets/barba_mobile.png"
                    alt="Mockup mobile di un sito sviluppato da LeMaks"
                />
            </Mockups>

            <Block>
                <h3>
                    Progetto siti che funzionano prima ancora di essere belli.
                </h3>
                <p className="muted">
                    Un sito efficace non deve solo avere un buon design. Deve
                    guidare, spiegare, rassicurare e portare le persone verso
                    un&apos;azione concreta.
                </p>
                <Cards>
                    {SERVICES.map((s, i) => (
                        <Card
                            key={s.n}
                            $bg={s.color}
                            style={{ animationDelay: `${0.12 * i}s` }}
                        >
                            <span className="num mono">{s.n}</span>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                        </Card>
                    ))}
                </Cards>
            </Block>

            <Block>
                <h3>Strategia, design e sviluppo nello stesso percorso.</h3>
                <p className="muted">
                    Ogni progetto parte da una domanda semplice: cosa deve
                    capire una persona quando arriva sul tuo sito? Da lì
                    costruisco struttura, contenuti, design e sviluppo.
                </p>
                <Timeline>
                    {PROCESS.map((p) => (
                        <Step key={p.n}>
                            <span className="num mono">{p.n}</span>
                            <p>{p.text}</p>
                        </Step>
                    ))}
                </Timeline>
            </Block>
        </Section>
    );
};

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${$uw(4)};
    padding: ${$cssTRBL(2, 1)};
    margin-bottom: ${$uw(4)};
    background-image:
        linear-gradient(${$color("primary-dark-shade")} 1px, transparent 1px),
        linear-gradient(
            90deg,
            ${$color("primary-dark-shade")} 1px,
            transparent 1px
        );
    background-size: ${$uw(4)} ${$uw(4)};
    animation: gridScan 30s linear infinite;
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
        margin-bottom: ${$uw(0.6)};
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
            margin-bottom: ${$uw(1)};
        }
    }
    .muted {
        color: ${$color("gray")};
        max-width: ${$uw(34)};
        margin-bottom: ${$uw(2)};
        ${$breakPoint(500)} {
            max-width: 100%;
            font-size: 1.6rem;
            margin-bottom: ${$uw(2.5)};
        }
    }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    .copy {
        max-width: ${$uw(34)};
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.8)};
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
    background-color: ${$color("tertiary")};
    transition: transform 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.2, 2)};
        margin-top: ${$uw(1)};
    }
    &:hover {
        transform: translateY(-2px);
    }
`;

const Mockups = styled.div`
    position: relative;
    /* bleed outside the section's horizontal padding to go full width */
    margin-left: ${$uw(-1)};
    margin-right: ${$uw(-1)};
    height: ${$uw(28)};
    overflow: visible;
    ${$breakPoint(820)} {
        margin-left: ${$uw(-1.5)};
        margin-right: ${$uw(-1.5)};
        height: ${$uw(30)};
    }
    ${$breakPoint(500)} {
        margin-left: ${$uw(-2)};
        margin-right: ${$uw(-2)};
        height: ${$uw(34)};
    }
    .desktop,
    .mobile {
        position: absolute;
        display: block;
        border: 1px solid ${$color("tertiary-dark-shade")};
        border-radius: 4px;
        object-fit: cover;
        object-position: top left;
        background-color: ${$color("glass-dark")};
    }
    .desktop {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: fadeInUp 1s ease-out forwards;
        ${$breakPoint(500)} { 
            width: calc(100% - ${$uw(2)});
            margin-left: ${$uw(1)};
        }
        
    }
    .mobile {
        top: ${$uw(-3)};
        right: ${$uw(1)};
        width: ${$uw(12)};
        height: ${$uw(26)};
        object-position: top center;
        border: 2px solid ${$color("tertiary-dark-shade")};
        animation: fadeInUp 1s ease-out 0.3s forwards;
        opacity: 0;
        ${$breakPoint(500)} {
            top:unset;
            width: ${$uw(15)};
            height: ${$uw(32)};
            bottom: ${$uw(-5)};
            right: ${$uw(5)};
        }
    }
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${$uw(1)};
    ${$breakPoint(820)} {
        grid-template-columns: repeat(2, 1fr);
        gap: ${$uw(1.5)};
    }
    ${$breakPoint(500)} {
        grid-template-columns: 1fr;
        gap: ${$uw(2)};
    }
`;

const Card = styled.div<{ $bg: string }>`
    position: relative;
    padding: ${$uw(1.2)};
    border-radius: 4px;
    background-color: ${({ $bg }) => $color($bg)};
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.4)};
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$uw(2)};
        gap: ${$uw(0.8)};
    }

    &:nth-child(odd) {
        margin-top: ${$uw(1)};
    }
    ${$breakPoint(500)} {
        &:nth-child(odd) {
            margin-top: 0;
        }
    }

    .num {
        font-size: 1.4rem;
        color: ${$color("white-dark")};
        transition: color 0.2s ease;
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
        font-size: 1.5rem;
        color: ${$color("white-dark")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${$uw(0.2)} ${$uw(0.2)} ${$color("black-dark")};
    }
    &:hover .num {
        color: ${$color("tertiary")};
    }
`;

const Timeline = styled.div`
    display: flex;
    position: relative;
    gap: ${$uw(1)};
    ${$breakPoint(820)} {
        flex-direction: column;
        gap: ${$uw(1.5)};
    }
    &::before {
        content: "";
        position: absolute;
        top: ${$uw(1.4)};
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
            90deg,
            ${$color("tertiary")},
            ${$color("tertiary-dark-shade")}
        );
        ${$breakPoint(820)} {
            top: 0;
            left: ${$uw(1.4)};
            width: 1px;
            height: 100%;
            background: linear-gradient(
                ${$color("tertiary")},
                ${$color("tertiary-dark-shade")}
            );
        }
        ${$breakPoint(500)} {
            left: ${$uw(2.4)};
        }
    }
`;

const Step = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.6)};
    ${$breakPoint(820)} {
        flex-direction: row;
        align-items: center;
        gap: ${$uw(1.5)};
    }
    .num {
        font-size: ${$uw(2.8)};
        font-weight: 200;
        color: ${$color("white-light")};
        line-height: 1;
        ${$breakPoint(500)} {
            font-size: ${$uw(4.8)};
        }
    }
    p {
        color: ${$color("gray")};
        font-size: 1.5rem;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;
