"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import HexagonCollisionSketch from "./Sketch";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const ROTATING_WORDS = [
    "essenziali",
    "chiare",
    "utili",
    "giocabili",
    "consapevoli",
];

export const MainSection = () => {
    const [mounted, setMounted] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section id="mainSection">
            <HexagonCollisionSketch />
            <Content className={mounted ? "mounted" : ""}>
                <Title className="mainTitle">
                    <span className="line">Realizzo</span>
                    <span className="line">
                        <span className="cyan">esperienze</span>
                    </span>
                    <span className="line rotating">
                        <RotatingWord key={wordIndex}>
                            {ROTATING_WORDS[wordIndex]}
                        </RotatingWord>
                        <span className="caret">_</span>
                    </span>
                </Title>
                <Lead>
                    Progetto siti web, studio la relazione tra persone e cani e
                    sperimento con il game development.
                </Lead>
                <Lead className="muted">
                    Tre percorsi diversi, un&apos;unica direzione: osservare,
                    semplificare e costruire qualcosa che funzioni davvero.
                </Lead>
                <TechLabel className="tech-label">
                    WEB / GAME DEVELOPMENT / CINOFILIA
                </TechLabel>
                <Actions>
                    <Primary href="#web">Esplora il mio mondo</Primary>
                    <Ghost href="#contact">Contattami</Ghost>
                </Actions>
            </Content>
            <ScrollDown href="#manifesto">
                <p className="label">Scopri di più</p>
                <FaAngleDoubleDown />
            </ScrollDown>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: ${$cssTRBL(1)};
    min-height: calc(100dvh - ${$uw(3)});
    width: 100%;
    position: relative;
    overflow: hidden;
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2, 1.5)};
        min-height: calc(100dvh - ${$uw(5)});
    }
    ${$breakPoint(500)} {
        align-items: flex-start;
        padding: ${$cssTRBL(2, 2)};
        min-height: calc(100dvh + ${$uw(30)});
        overflow: visible;
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    max-width: ${$uw(28)};
    pointer-events: none;
    ${$breakPoint(820)} {
        max-width: 100%;
    }

    > * {
        pointer-events: auto;
    }

    .brand {
        font-size: 1.6rem;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: ${$color("dust")};
        opacity: 0;
        margin-bottom: ${$uw(0.8)};
        ${$breakPoint(500)} {
            margin-bottom: ${$uw(1.5)};
        }
    }
    &.mounted .brand {
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }
`;

const Title = styled.h1`
    display: flex;
    flex-direction: column;
    font-weight: 200;
    line-height: 0.95;
    margin-bottom: ${$uw(2)};
    ${$breakPoint(500)} {
        margin-bottom: ${$uw(3)};
    }

    .line {
        font-size: ${$uw(3)};
        opacity: 0;
        display: block;
        margin-bottom: ${$uw(0.5)};
        ${$breakPoint(820)} {
            font-size: ${$uw(4.5)};
        }
        ${$breakPoint(500)} {
            font-size: ${$uw(3.25)};
        }
    }

    .line.rotating {
        display: flex;
        align-items: baseline;
        color: ${$color("white-light")};
    }

    .caret {
        color: ${$color("tertiary")};
        animation: blinkCaret 1s step-end infinite;
        margin-left: 0.1em;
    }

    &.mainTitle .line:nth-child(1) {
        animation: fadeInUp 0.7s ease-out 0.5s forwards;
    }
    &.mainTitle .line:nth-child(2) {
        animation: fadeInUp 0.7s ease-out 0.8s forwards;
    }
    &.mainTitle .line:nth-child(3) {
        animation: fadeInUp 0.7s ease-out 1.1s forwards;
    }
`;

const RotatingWord = styled.span`
    display: inline-block;
    color: ${$color("white-light")};
    animation: wordSwap 3s ease-in-out;
`;

const Lead = styled.p`
    max-width: ${$uw(28)};
    margin-bottom: ${$uw(0.6)};
    opacity: 0;
    animation: fadeIn 1s ease-out 1.4s forwards;
    &.muted {
        color: ${$color("gray")};
        animation-delay: 1.6s;
    }
    ${$breakPoint(500)} {
        max-width: 100%;
        font-size: 1.6rem;
        margin-bottom: ${$uw(1)};
    }
`;

const TechLabel = styled.span`
    margin-top: ${$uw(1)};
    margin-bottom: ${$uw(1)};
    color: ${$color("tertiary-dark")} !important;
    opacity: 0;
    animation: fadeIn 1s ease-out 1.8s forwards;
    ${$breakPoint(500)} {
        margin-top: ${$uw(2)};
        margin-bottom: ${$uw(2)};
    }
`;

const Actions = styled.div`
    display: flex;
    gap: ${$uw(1)};
    opacity: 0;
    animation: fadeInUp 0.8s ease-out 2s forwards;
    ${$breakPoint(500)} {
        flex-direction: column;
        gap: ${$uw(1.5)};
        align-items: stretch;
    }
`;

const Primary = styled.a`
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.4rem;
    text-decoration: none;
    padding: ${$cssTRBL(0.7, 1.5)};
    border-radius: 2px;
    color: ${$color("black-dark")};
    background-color: ${$color("tertiary")};
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    box-shadow: ${$uw(0.2)} ${$uw(0.2)} ${$color("tertiary-dark-shade")};
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.4, 2)};
        text-align: center;
    }
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${$uw(0.3)} ${$uw(0.3)} ${$color("tertiary-dark")};
    }
`;

const Ghost = styled.a`
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.4rem;
    text-decoration: none;
    padding: ${$cssTRBL(0.7, 1.5)};
    border-radius: 2px;
    color: ${$color("white-light")};
    border: 1px solid ${$color("gray-dark")};
    transition:
        border-color 0.2s ease,
        color 0.2s ease;
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(1.4, 2)};
        text-align: center;
    }
    &:hover {
        border-color: ${$color("tertiary")};
        color: ${$color("tertiary")};
    }
`;

const ScrollDown = styled.a`
    width: ${$uw(5)};
    position: absolute;
    opacity: 0;
    right: ${$uw(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${$uw(0.5)};
    bottom: ${$uw(2)};
    cursor: pointer;
    color: ${$color("white")};
    z-index: 10;
    animation: fadeIn 1s ease-in 2.4s forwards;
    > svg {
        width: ${$uw(1)};
        height: ${$uw(1)};
    }
    > * {
        position: relative;
        animation: upandDown 2s ease-in-out infinite;
    }
    ${$breakPoint(500)} {
        position: fixed;
        right: ${$uw(2)};
        transform: none;
        bottom: ${$uw(3)};
        width: auto;
        display: flex;
        animation: fadeIn 1s ease-in 4s forwards;
        .label {
            display: none;
        }
        > svg {
            width: ${$uw(2.5)};
            height: ${$uw(2.5)};
        }
    }
`;
