"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";

const SKILLS = [
    { label: "GDScript", filled: true },
    { label: "Sviluppo 2D", filled: true },
    { label: "Movimento e fisica", filled: true },
    { label: "Interazioni tra oggetti", filled: true },
    { label: "UI e feedback di gioco", filled: false },
    { label: "Level design", filled: false },
    { label: "Prototipazione", filled: true },
];

const CATEGORIES = [
    {
        title: "Giochi web app",
        desc: "Esperienze interattive accessibili dal browser, progettate per essere semplici da avviare e coinvolgenti da giocare.",
    },
    {
        title: "Prototipi e meccaniche",
        desc: "Piccoli esperimenti per testare idee, regole, ritmo e feedback di gioco.",
    },
    {
        title: "Progetti con Godot",
        desc: "Nuovi esercizi e prototipi realizzati per approfondire lo sviluppo 2D, GDScript, fisica e level design.",
    },
];

export const GameDevSection = () => {
    return (
        <Section id="game">
            <Intro>
                <div className="copy">
                    <span className="tech-label magenta">
                        02 / GAME DEVELOPMENT
                    </span>
                    <h2>
                        Creo giochi per il web. Ora sto esplorando anche Godot.
                    </h2>
                    <p>
                        Ho già realizzato giochi sotto forma di web app,
                        trasformando idee e meccaniche in esperienze accessibili
                        direttamente dal browser.
                    </p>
                    <p>
                        Oggi sto approfondendo Godot per avvicinarmi in modo più
                        strutturato allo sviluppo videoludico: prototipazione,
                        game design, fisica, interazioni e costruzione di
                        piccoli mondi giocabili.
                    </p>
                    <Cta href="#contact">
                        Esplora i miei giochi
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
                <Preview>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/game.jpg"
                        alt="Controller e schermo di gioco"
                    />
                    <span className="credit">
                        Foto di{" "}
                        <a
                            href="https://unsplash.com/it/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Compagnons
                        </a>{" "}
                        su{" "}
                        <a
                            href="https://unsplash.com/it/foto/dispositivo-digitale-nero-a-0-00-By-tZImt0Ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unsplash
                        </a>
                    </span>
                </Preview>
            </Intro>

            <Block>
                <h3>Dal browser al game engine.</h3>
                <p className="muted">
                    Il mio percorso nel game development è iniziato dal web:
                    giochi e piccole esperienze interattive costruite per essere
                    immediate, accessibili e giocabili ovunque.
                </p>
                <p className="muted">
                    Ora sto studiando Godot per ampliare il mio modo di
                    progettare giochi, sperimentando con strumenti pensati
                    specificamente per il game development.
                </p>
                <p className="muted">
                    Non parto da zero: porto con me l&apos;esperienza maturata
                    nello sviluppo web, nella progettazione di interfacce e
                    nella costruzione di interazioni chiare.
                </p>
            </Block>

            <Block>
                <h3>Cosa creo</h3>
                <CatGrid>
                    {CATEGORIES.map((c) => (
                        <CatCard key={c.title}>
                            <h4>{c.title}</h4>
                            <p>{c.desc}</p>
                        </CatCard>
                    ))}
                </CatGrid>
            </Block>

            <Spotlight>
                <div className="spotlight-header">
                    <span className="tech-label magenta">
                        WEB GAME / MOBILE FIRST
                    </span>
                    <h3>
                        Un gioco di parole, pensato per lo schermo che hai in
                        mano.
                    </h3>
                    <p>
                        Un piccolo gioco web ispirato ai word game a tentativi:
                        semplice da capire, rapido da giocare e progettato per
                        funzionare al meglio da smartphone.
                    </p>
                    <p>
                        L&apos;obiettivo è indovinare la parola corretta
                        attraverso tentativi, indizi e feedback visivi. Ogni
                        scelta deve essere immediata, leggibile e soddisfacente.
                    </p>
                    <div className="spotlight-tags">
                        <span className="mono">PIATTAFORMA: WEB</span>
                        <span className="mono">FORMATO: MOBILE FIRST</span>
                        <span className="mono">STATO: PUBBLICATO</span>
                    </div>
                    <SpotlightCta
                        href="https://b-day-quiz.makso.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Prova il gioco ↗
                    </SpotlightCta>
                </div>
                <div className="spotlight-screens">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz3.png"
                        alt="Screenshot del gioco — schermata 1"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz2.png"
                        alt="Screenshot del gioco — schermata 2"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz.png"
                        alt="Screenshot del gioco — schermata 3"
                    />
                </div>
                <p className="spotlight-note">
                    Il gioco è ottimizzato principalmente per dispositivi
                    mobili. Le schermate mostrate rappresentano
                    l&apos;esperienza pensata per smartphone.
                </p>
            </Spotlight>

            <Block>
                <h3>Cosa sto approfondendo con Godot</h3>
                <Nodes>
                    {SKILLS.map((s, i) => (
                        <Node
                            key={s.label}
                            $filled={s.filled}
                            style={{ animationDelay: `${0.08 * i}s` }}
                        >
                            <span className="dot" />
                            {s.label}
                        </Node>
                    ))}
                </Nodes>
            </Block>

            <Projects>
                <h3>Idee che diventano giocabili.</h3>
                <p className="muted">
                    Qui raccolgo giochi web, prototipi e progetti in sviluppo.
                </p>
                <p className="muted">
                    Alcuni nascono per esplorare una meccanica, altri per creare
                    un&apos;esperienza completa. Ogni progetto è
                    un&apos;occasione per capire meglio come funzionano
                    interazione, ritmo, difficoltà e divertimento.
                </p>
                <ProtoCard>
                    <div className="clip">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/zodiac_lullaby.png"
                            alt="Concept visuale del primo gioco web"
                        />
                    </div>
                    <div className="meta">
                        <h4>Primo gioco Godot</h4>
                        <p>
                            Un&apos;esperienza interattiva costruita per il
                            browser, tra meccanica semplice e ritmo di gioco.
                        </p>
                        <p className="ai-note">
                            Concept visuale generato con IA, utilizzato come
                            placeholder per rappresentare l&apos;idea e
                            l&apos;atmosfera del gioco. Non è materiale
                            artistico definitivo.
                        </p>
                        <div className="tags">
                            <span className="mono">PIATTAFORMA: GODOT</span>
                            <span className="mono">TIPO: GIOCO</span>
                            <span className="mono">STATO: IN SVILUPPO</span>
                        </div>
                        <span className="build mono">BUILD 0.1.0</span>
                    </div>
                </ProtoCard>
            </Projects>

            <Block>
                <h3>Costruire esperienze che invitano a giocare.</h3>
                <p className="muted">
                    Voglio continuare a sviluppare giochi per il web e, allo
                    stesso tempo, far crescere le mie competenze con Godot.
                </p>
                <p className="muted">
                    L&apos;obiettivo è unire ciò che già conosco del web con
                    strumenti e logiche proprie del game development, per creare
                    esperienze più curate, interattive e memorabili.
                </p>
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
    overflow: hidden;
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
        gap: ${$uw(5)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(6)};
        margin-bottom: ${$uw(6)};
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: repeating-linear-gradient(
            0deg,
            rgba(154, 50, 154, 0.05) 0px,
            rgba(154, 50, 154, 0.05) 1px,
            transparent 1px,
            transparent 4px
        );
        background-size: 100% 200%;
        animation: scanline 12s linear infinite;
        z-index: 0;
    }
    > * {
        position: relative;
        z-index: 1;
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
    .muted {
        color: ${$color("gray")};
        max-width: ${$uw(34)};
        margin-bottom: ${$uw(1.5)};
        ${$breakPoint(500)} {
            max-width: 100%;
            font-size: 1.6rem;
            margin-bottom: ${$uw(2.5)};
        }
    }
`;

const Intro = styled.div`
    display: flex;
    align-items: center;
    gap: ${$uw(2)};
    ${$breakPoint(820)} {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: ${$uw(3)};
    }
    .copy {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.8)};
        max-width: ${$uw(32)};
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

const Preview = styled.div`
    position: relative;
    width: ${$uw(20)};
    height: ${$uw(16)};
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid ${$color("secondary-light")};
    ${$breakPoint(820)} {
        width: 100%;
        height: ${$uw(26)};
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .credit {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 4px 8px;
        font-size: 1rem;
        line-height: 1.4;
        color: ${$color("white-dark")};
        background-color: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(4px);
        letter-spacing: 0.02em;

        a {
            color: ${$color("secondary-light")};
            text-decoration: underline;
            text-underline-offset: 2px;
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
    color: ${$color("white-light")};
    background-color: ${$color("secondary-light")};
    transition:
        transform 0.2s ease,
        background-color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.2, 2)};
        margin-top: ${$uw(1)};
    }
    &:hover {
        transform: translateY(-2px);
        background-color: ${$color("tertiary")};
        color: ${$color("black-dark")};
    }
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
`;

const Nodes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${$uw(0.8)};
    ${$breakPoint(500)} {
        gap: ${$uw(1.2)};
    }
`;

const Node = styled.span<{ $filled: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.4)};
    padding: ${$cssTRBL(0.4, 0.9)};
    border-radius: 999px;
    font-family: "Space Mono", monospace;
    font-size: 1.3rem;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
    transition:
        transform 0.2s ease,
        border-color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(0.8, 1.4)};
        font-size: 1.4rem;
        gap: ${$uw(0.6)};
    }

    background-color: ${({ $filled }) =>
        $filled ? $color("secondary") : "transparent"};
    border: 1px solid
        ${({ $filled }) =>
            $filled ? $color("secondary-light") : $color("gray-dark")};
    color: ${({ $filled }) =>
        $filled ? $color("white-light") : $color("gray")};

    .dot {
        width: ${$uw(0.4)};
        height: ${$uw(0.4)};
        border-radius: 50%;
        background-color: ${({ $filled }) =>
            $filled ? $color("tertiary") : $color("gray-dark")};
        animation: pulseDot 3s ease-in-out infinite;
    }

    &:hover {
        transform: translateY(-2px);
        border-color: ${$color("tertiary")};
        color: ${$color("tertiary")};
    }
`;

const Projects = styled.div`
    display: flex;
    flex-direction: column;
`;

const Spotlight = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(1.5)};
    padding: ${$uw(2)};
    border-radius: 6px;
    background-color: ${$color("black")};
    border: 1px solid ${$color("secondary")};
    ${$breakPoint(500)} {
        padding: ${$uw(2.5)};
        gap: ${$uw(2)};
    }

    .spotlight-header {
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.6)};
        ${$breakPoint(500)} {
            gap: ${$uw(1)};
        }
    }
    .spotlight-header h3 {
        margin-bottom: 0;
    }
    .spotlight-header p {
        color: ${$color("white-dark")};
        text-align: justify;
        max-width: ${$uw(38)};
        ${$breakPoint(820)} {
            max-width: 100%;
        }
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
    .spotlight-tags {
        display: flex;
        flex-wrap: wrap;
        gap: ${$uw(0.6)};
        margin-top: ${$uw(0.4)};
    }
    .spotlight-tags span {
        font-size: 1.1rem;
        letter-spacing: 0.1em;
        color: ${$color("secondary-light")};
        border: 1px solid ${$color("secondary")};
        border-radius: 2px;
        padding: ${$cssTRBL(0.2, 0.5)};
        ${$breakPoint(500)} {
            font-size: 1.2rem;
            padding: ${$cssTRBL(0.5, 0.8)};
        }
    }
    .spotlight-screens {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${$uw(1)};
        ${$breakPoint(500)} {
            gap: ${$uw(1.5)};
        }

        img {
            display: block;
            width: 100%;
            aspect-ratio: 9 / 16;
            object-fit: cover;
            object-position: top;
            border-radius: 6px;
            border: 1px solid ${$color("secondary")};
            transition: transform 0.25s ease;
            &:hover {
                transform: translateY(-4px);
            }
        }
    }
    .spotlight-note {
        font-size: 1.2rem;
        font-style: italic;
        color: ${$color("gray-dark")};
        line-height: 1.5;
        ${$breakPoint(500)} {
            font-size: 1.3rem;
        }
    }
`;

const SpotlightCta = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.4)};
    width: fit-content;
    margin-top: ${$uw(0.4)};
    padding: ${$cssTRBL(0.5, 1.1)};
    border-radius: 2px;
    text-decoration: none;
    font-family: "Space Mono", monospace;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${$color("white-light")};
    border: 1px solid ${$color("secondary-light")};
    transition:
        transform 0.2s ease,
        background-color 0.2s ease,
        color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1, 2)};
        margin-top: ${$uw(0.8)};
    }
    &:hover {
        transform: translateX(4px);
        background-color: ${$color("secondary-light")};
        color: ${$color("black-dark")};
    }
`;

const ProtoCard = styled.div`
    display: flex;
    gap: ${$uw(1.5)};
    padding: ${$uw(1)};
    border-radius: 6px;
    background-color: ${$color("black")};
    border: 1px solid ${$color("secondary")};
    transition: transform 0.2s ease;
    ${$breakPoint(820)} {
        flex-direction: column;
        gap: ${$uw(2)};
        padding: ${$uw(1.5)};
    }
    ${$breakPoint(500)} {
        gap: ${$uw(2.5)};
        padding: ${$uw(2)};
    }
    &:hover {
        transform: rotate(-0.4deg);
    }
    .clip {
        position: relative;
        width: ${$uw(16)};
        height: ${$uw(10)};
        flex-shrink: 0;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid ${$color("secondary-light")};
        ${$breakPoint(820)} {
            width: 100%;
            height: ${$uw(18)};
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .ai-note {
        font-size: 1.2rem !important;
        font-style: italic;
        color: ${$color("gray-dark")} !important;
        line-height: 1.5;
        ${$breakPoint(500)} {
            font-size: 1.3rem !important;
        }
    }
    .meta {
        display: flex;
        flex-direction: column;
        gap: ${$uw(0.4)};
        ${$breakPoint(500)} {
            gap: ${$uw(0.8)};
        }
    }
    .meta h4 {
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        color: ${$color("white-light")};
        ${$breakPoint(500)} {
            font-size: ${$uw(2.4)};
        }
    }
    .meta > p {
        color: ${$color("gray")};
        font-size: 1.5rem;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: ${$uw(0.6)};
        margin-top: ${$uw(0.4)};
        ${$breakPoint(500)} {
            gap: ${$uw(0.8)};
        }
    }
    .tags span {
        font-size: 1.1rem;
        letter-spacing: 0.1em;
        color: ${$color("secondary-light")};
        border: 1px solid ${$color("secondary")};
        border-radius: 2px;
        padding: ${$cssTRBL(0.2, 0.5)};
        ${$breakPoint(500)} {
            font-size: 1.2rem;
            padding: ${$cssTRBL(0.5, 0.8)};
        }
    }
    .build {
        font-size: 1.1rem;
        letter-spacing: 0.2em;
        color: ${$color("tertiary-dark")};
        margin-top: ${$uw(0.4)};
        ${$breakPoint(500)} {
            font-size: 1.2rem;
        }
    }
`;

const CatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${$uw(1.2)};
    margin-top: ${$uw(0.8)};
    ${$breakPoint(820)} {
        grid-template-columns: 1fr;
        gap: ${$uw(1.5)};
    }
`;

const CatCard = styled.div`
    padding: ${$uw(1.2)};
    border-radius: 4px;
    background-color: ${$color("glass-dark")};
    border: 1px solid ${$color("secondary")};
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.4)};
    ${$breakPoint(500)} {
        padding: ${$uw(2)};
        gap: ${$uw(0.8)};
    }

    h4 {
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${$color("secondary-light")};
    }
    p {
        font-size: 1.4rem;
        color: ${$color("gray")};
        line-height: 1.5;
        ${$breakPoint(500)} {
            font-size: 1.5rem;
        }
    }
`;
