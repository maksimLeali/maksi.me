"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiArrowRightUpLine, RiCornerDownRightLine } from "react-icons/ri";

const FEATURED = {
    category: "REACT / STYLED-COMPONENTS / RESPONSIVE DESIGN",
    title: "Enhancing React Development with Dynamic Styled Components and a Custom Grid System",
    desc: "Un approfondimento su come usare funzioni e utility personalizzate con styled-components per gestire colori, spaziature, breakpoint e un sistema grid responsive costruito su misura.",
    meta: "8 min di lettura · Medium · 30 maggio 2024",
    href: "https://medium.com/@xmaksimlealix/enhancing-react-development-with-dynamic-styled-components-and-a-custom-grid-system-64b187f17e0d",
};

const PROFILE_URL = "https://medium.com/@xmaksimlealix";

export const ArticlesSection = () => {
    return (
        <Section id="articles">
            <Header>
                <span className="tech-label cyan">04 / ARTICOLI</span>
                <h2>Scrivo di ciò che sto costruendo.</h2>
                <p>
                    Raccolgo qui articoli, appunti tecnici e approfondimenti
                    nati dai miei progetti.
                </p>
                <p>
                    Non sono contenuti pubblicati automaticamente: seleziono
                    solo quelli che rappresentano bene il mio modo di lavorare,
                    le tecnologie che uso e le idee che voglio condividere.
                </p>
                <Cta
                    href={PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Scopri gli articoli
                    <RiCornerDownRightLine />
                </Cta>
            </Header>

            <Featured>
                <h3>Articolo in evidenza</h3>
                <Card
                    href={FEATURED.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CardCopy>
                        <span className="category tech-label cyan">
                            {FEATURED.category}
                        </span>
                        <h4>{FEATURED.title}</h4>
                        <p className="desc">{FEATURED.desc}</p>
                        <span className="meta mono">{FEATURED.meta}</span>
                        <span className="read mono">
                            Leggi l&apos;articolo su Medium
                            <RiArrowRightUpLine />
                        </span>
                    </CardCopy>

                    <CardVisual
                        viewBox="0 0 200 200"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient
                                id="articleGridFade"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="var(--tertiary)"
                                    stopOpacity="0.7"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--tertiary-dark)"
                                    stopOpacity="0.05"
                                />
                            </linearGradient>
                        </defs>
                        <g className="grid-lines">
                            <line
                                x1="0"
                                y1="40"
                                x2="200"
                                y2="40"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="0"
                                y1="100"
                                x2="200"
                                y2="100"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="0"
                                y1="160"
                                x2="200"
                                y2="160"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="40"
                                y1="0"
                                x2="40"
                                y2="200"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="100"
                                y1="0"
                                x2="100"
                                y2="200"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                            <line
                                x1="160"
                                y1="0"
                                x2="160"
                                y2="200"
                                stroke="var(--tertiary-dark-shade)"
                                strokeWidth="0.5"
                            />
                        </g>
                        <g className="grid-columns">
                            <rect
                                x="20"
                                y="60"
                                width="20"
                                height="100"
                                fill="url(#articleGridFade)"
                            />
                            <rect
                                x="60"
                                y="30"
                                width="20"
                                height="140"
                                fill="url(#articleGridFade)"
                                opacity="0.7"
                            />
                            <rect
                                x="100"
                                y="80"
                                width="20"
                                height="80"
                                fill="url(#articleGridFade)"
                                opacity="0.55"
                            />
                            <rect
                                x="140"
                                y="50"
                                width="20"
                                height="120"
                                fill="url(#articleGridFade)"
                                opacity="0.85"
                            />
                        </g>
                        <g className="grid-accents">
                            <line
                                x1="0"
                                y1="0"
                                x2="200"
                                y2="200"
                                stroke="var(--tertiary)"
                                strokeWidth="0.8"
                                strokeDasharray="2 4"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="3"
                                fill="var(--tertiary)"
                            />
                        </g>
                    </CardVisual>
                </Card>
            </Featured>
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
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
        gap: ${$uw(5)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(6)};
        margin-bottom: ${$uw(6)};
    }
`;

const Header = styled.div`
    max-width: ${$uw(36)};
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.6)};
    ${$breakPoint(820)} {
        max-width: 100%;
    }
    ${$breakPoint(500)} {
        gap: ${$uw(1)};
    }

    h2 {
        font-family: "Martian Mono", monospace;
        font-weight: 200;
        font-size: ${$uw(3)};
        ${$breakPoint(500)} {
            font-size: ${$uw(5)};
        }
    }
    p {
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
    margin-top: ${$uw(0.8)};
    padding: ${$cssTRBL(0.6, 1.2)};
    border-radius: 2px;
    text-decoration: none;
    font-family: "Space Mono", monospace;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${$color("black-dark")};
    background-color: ${$color("tertiary")};
    transition:
        transform 0.2s ease,
        background-color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.2, 2)};
        margin-top: ${$uw(1)};
    }
    &:hover {
        transform: translateY(-2px);
    }
    svg {
        transition: transform 0.2s ease;
    }
    &:hover svg {
        transform: translateX(4px);
    }
`;

const Featured = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(1.2)};

    h3 {
        font-family: "Martian Mono", monospace;
        font-weight: 300;
        font-size: ${$uw(2.4)};
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
        }
    }
`;

const Card = styled.a`
    position: relative;
    display: grid;
    grid-template-columns: 1fr ${$uw(20)};
    gap: ${$uw(2.5)};
    padding: ${$uw(1.8)};
    border: 1px solid ${$color("tertiary-dark-shade")};
    border-radius: 6px;
    background-color: ${$color("black")};
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    transition:
        border-color 0.3s ease,
        transform 0.3s ease,
        box-shadow 0.3s ease;
    ${$breakPoint(820)} {
        grid-template-columns: 1fr;
        gap: ${$uw(3)};
        padding: ${$uw(2.5)};
    }
    ${$breakPoint(500)} {
        padding: ${$uw(3)};
    }

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -10%;
        width: 0;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            ${$color("tertiary")},
            transparent
        );
        transition: width 0.6s ease-out;
        z-index: 1;
        pointer-events: none;
    }

    &:hover {
        border-color: ${$color("tertiary")};
        transform: translateY(-3px);
        box-shadow: ${$uw(0.4)} ${$uw(0.4)} ${$color("tertiary-dark-shade")};
    }
    &:hover::before {
        width: 120%;
    }
`;

const CardCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.8)};
    position: relative;
    z-index: 2;
    ${$breakPoint(500)} {
        gap: ${$uw(1.2)};
    }

    .category {
        font-size: 1.2rem;
        letter-spacing: 0.18em;
    }

    h4 {
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        font-size: ${$uw(2)};
        line-height: 1.25;
        color: ${$color("white-light")};
        ${$breakPoint(820)} {
            font-size: ${$uw(2.6)};
        }
        ${$breakPoint(500)} {
            font-size: ${$uw(3.4)};
        }
    }
    .desc {
        color: ${$color("white-dark")};
        line-height: 1.6;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
    .meta {
        font-size: 1.2rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${$color("gray")};
        margin-top: ${$uw(0.4)};
    }
    .read {
        display: inline-flex;
        align-items: center;
        gap: ${$uw(0.4)};
        font-size: 1.3rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${$color("tertiary")};
        margin-top: ${$uw(0.4)};
        transition: transform 0.25s ease;

        svg {
            width: 1.6rem;
            height: 1.6rem;
            transition: transform 0.25s ease;
        }
    }

    ${Card}:hover & .read {
        transform: translateX(${$uw(0.4)});
    }
    ${Card}:hover & .read svg {
        transform: translate(2px, -2px);
    }
`;

const CardVisual = styled.svg`
    width: 100%;
    height: 100%;
    min-height: ${$uw(14)};
    align-self: stretch;
    border-left: 1px solid ${$color("tertiary-dark-shade")};
    padding-left: ${$uw(1.5)};
    ${$breakPoint(820)} {
        border-left: none;
        padding-left: 0;
        border-top: 1px solid ${$color("tertiary-dark-shade")};
        padding-top: ${$uw(2)};
        min-height: ${$uw(20)};
    }
    ${$breakPoint(500)} {
        min-height: ${$uw(28)};
    }

    .grid-lines line,
    .grid-accents line {
        stroke-dasharray: 220;
        stroke-dashoffset: 220;
        transition: stroke-dashoffset 1.4s ease-out;
    }
    .grid-accents line {
        stroke-dasharray: 8;
        stroke-dashoffset: 0;
        opacity: 0.55;
    }
    .grid-columns rect {
        transform-origin: center bottom;
        transform: scaleY(0.6);
        transition:
            transform 0.6s ease-out,
            opacity 0.6s ease-out;
    }
    .grid-accents circle {
        opacity: 0.7;
        transition:
            transform 0.4s ease-out,
            opacity 0.4s ease-out;
        transform-origin: center;
    }

    ${Card}:hover & .grid-lines line {
        stroke-dashoffset: 0;
    }
    ${Card}:hover & .grid-columns rect {
        transform: scaleY(1);
    }
    ${Card}:hover & .grid-accents circle {
        opacity: 1;
        transform: scale(1.4);
    }
`;
