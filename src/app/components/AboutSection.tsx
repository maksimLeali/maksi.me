"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const TYPED_TEXT = "Curiosità\napplicata.";

export const AboutSection = () => {
    const [typed, setTyped] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        let interval: ReturnType<typeof setInterval> | undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !interval) {
                    let i = 0;
                    interval = setInterval(() => {
                        i += 1;
                        setTyped(TYPED_TEXT.slice(0, i));
                        if (i >= TYPED_TEXT.length && interval)
                            clearInterval(interval);
                    }, 90);
                }
            },
            { threshold: 0.4 },
        );
        observer.observe(node);
        return () => {
            observer.disconnect();
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <Section id="about" ref={ref}>
            <Visual>
                <span className="shape" />
                <div className="portrait-border" />
                <div className="portrait-mask">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="portrait"
                        src="/assets/presentation.png"
                        alt="Foto di Maksim Leali"
                    />
                </div>
            </Visual>
            <Copy>
                <span className="tech-label">CHI SONO</span>
                <h2>Progetto, osservo, sperimento.</h2>
                <p>
                    Sono Maksim, web developer con oltre 8 anni di esperienza.
                    Il web è il mio lavoro principale: progetto siti di
                    presentazione per aiutare attività, professionisti e aziende
                    a raccontarsi meglio online.
                </p>
                <p>
                    Accanto al lavoro, sto approfondendo due percorsi che mi
                    stanno insegnando molto: l&apos;educazione cinofila
                    cognitivo-relazionale e il game development con Godot.
                </p>
                <p>
                    Sono ambiti diversi, ma hanno qualcosa in comune: richiedono
                    ascolto, osservazione, pazienza e la capacità di costruire
                    esperienze che abbiano senso per chi le vive.
                </p>
                <Typed className="mono">
                    {typed}
                    <span className="caret">_</span>
                </Typed>
            </Copy>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    align-items: center;
    gap: ${$uw(3)};
    padding: ${$cssTRBL(2, 1)};
    margin-bottom: ${$uw(4)};
    ${$breakPoint(820)} {
        flex-direction: column-reverse;
        align-items: flex-start;
        padding: ${$cssTRBL(2.5, 1.5)};
        gap: ${$uw(4)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(5)};
        margin-bottom: ${$uw(6)};
    }
`;

const Visual = styled.div`
    position: relative;
    width: ${$uw(22)};
    height: ${$uw(22)};
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${$breakPoint(820)} {
        width: 100%;
        height: ${$uw(30)};
    }

    .shape {
        position: absolute;
        width: ${$uw(18)};
        height: ${$uw(18)};
        background-color: ${$color("primary")};
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        animation: slowSpin 40s linear infinite;
        opacity: 0.7;
        ${$breakPoint(820)} {
            width: ${$uw(28)};
            height: ${$uw(28)};
        }
    }
    .portrait-border {
        position: relative;
        z-index: 1;
        width: ${$uw(15)};
        height: ${$uw(15)};
        background-color: ${$color("tertiary-dark")};
        clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
        );
        ${$breakPoint(820)} {
            width: ${$uw(22)};
            height: ${$uw(22)};
        }
    }
    .portrait-mask {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        /* must match portrait-border inner hex (border - 4px) to keep clip aligned */
        width: calc(${$uw(15)} - 4px);
        height: calc(${$uw(15)} - 4px);
        ${$breakPoint(820)} {
            width: calc(${$uw(22)} - 4px);
            height: calc(${$uw(22)} - 4px);
        }
        /* Clip only the bottom hex edges; top is open so the image overflows upward */
        clip-path: polygon(-200% -400%, 300% -400%, 100% 75%, 50% 100%, 0% 75%);
    }
    .portrait {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        /* >100% scales the image up within the hex while clip stays aligned */
        width: 120%;
        height: auto;
    }
`;

const Copy = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.8)};
    max-width: ${$uw(34)};
    ${$breakPoint(820)} {
        max-width: 100%;
    }
    ${$breakPoint(500)} {
        gap: ${$uw(1.2)};
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

const Typed = styled.p`
    margin-top: ${$uw(1)};
    font-size: ${$uw(2)} !important;
    line-height: 1.5;
    color: ${$color("tertiary")} !important;
    white-space: pre-wrap;
    /* reserve space for 2 lines from the start to avoid layout shift */
    min-height: calc(${$uw(2)} * 1.5 * 2);
    ${$breakPoint(500)} {
        font-size: ${$uw(3.4)} !important;
        min-height: calc(${$uw(3.4)} * 1.5 * 2);
        margin-top: ${$uw(1.5)};
    }
    .caret {
        animation: blinkCaret 1s step-end infinite;
    }
`;
