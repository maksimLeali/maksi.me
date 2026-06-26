"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SKILL_KEYS = [
    { key: "gdscript", filled: true },
    { key: "twod", filled: true },
    { key: "physics", filled: true },
    { key: "interactions", filled: true },
    { key: "ui", filled: false },
    { key: "leveldesign", filled: false },
    { key: "prototyping", filled: true },
] as const;

const CATEGORY_KEYS = ["webApp", "prototypes", "godot"] as const;

export const GameDevSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="game">
            <Intro>
                <div className="copy">
                    <span className="tech-label magenta">
                        {t("game.techLabel")}
                    </span>
                    <h2>{t("game.title")}</h2>
                    <p>{t("game.intro1")}</p>
                    <p>{t("game.intro2")}</p>
                    <Cta href="#contact">
                        {t("game.cta")}
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
                <Preview>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/game.jpg" alt={t("game.previewAlt")} />
                    <span className="credit">
                        {t("game.credit.by")}{" "}
                        <a
                            href="https://unsplash.com/it/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Compagnons
                        </a>{" "}
                        {t("game.credit.on")}{" "}
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
                <h3>{t("game.browserBlock.title")}</h3>
                <p className="muted">{t("game.browserBlock.p1")}</p>
                <p className="muted">{t("game.browserBlock.p2")}</p>
                <p className="muted">{t("game.browserBlock.p3")}</p>
            </Block>

            <Block>
                <h3>{t("game.createBlock.title")}</h3>
                <CatGrid>
                    {CATEGORY_KEYS.map((k) => (
                        <CatCard key={k}>
                            <h4>{t(`game.categories.${k}.title`)}</h4>
                            <p>{t(`game.categories.${k}.desc`)}</p>
                        </CatCard>
                    ))}
                </CatGrid>
            </Block>

            <Spotlight>
                <div className="spotlight-header">
                    <span className="tech-label magenta">
                        {t("game.spotlight.techLabel")}
                    </span>
                    <h3>{t("game.spotlight.title")}</h3>
                    <p>{t("game.spotlight.p1")}</p>
                    <p>{t("game.spotlight.p2")}</p>
                    <div className="spotlight-tags">
                        <span className="mono">
                            {t("game.spotlight.tags.platform")}
                        </span>
                        <span className="mono">
                            {t("game.spotlight.tags.format")}
                        </span>
                        <span className="mono">
                            {t("game.spotlight.tags.status")}
                        </span>
                    </div>
                    <SpotlightCta
                        href="https://b-day-quiz.makso.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("game.spotlight.cta")}
                    </SpotlightCta>
                </div>
                <div className="spotlight-screens">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz3.png"
                        alt={t("game.spotlight.screenAlt1")}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz2.png"
                        alt={t("game.spotlight.screenAlt2")}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/quiz.png"
                        alt={t("game.spotlight.screenAlt3")}
                    />
                </div>
                <p className="spotlight-note">{t("game.spotlight.note")}</p>
            </Spotlight>

            <Block>
                <h3>{t("game.skillsTitle")}</h3>
                <Nodes>
                    {SKILL_KEYS.map((s, i) => (
                        <Node
                            key={s.key}
                            $filled={s.filled}
                            style={{ animationDelay: `${0.08 * i}s` }}
                        >
                            <span className="dot" />
                            {t(`game.skills.${s.key}`)}
                        </Node>
                    ))}
                </Nodes>
            </Block>

            <Projects>
                <h3>{t("game.projects.title")}</h3>
                <p className="muted">{t("game.projects.muted1")}</p>
                <p className="muted">{t("game.projects.muted2")}</p>
                <ProtoCard>
                    <div className="clip">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/zodiac_lullaby.png"
                            alt={t("game.projects.proto.imageAlt")}
                        />
                    </div>
                    <div className="meta">
                        <h4>{t("game.projects.proto.title")}</h4>
                        <p>{t("game.projects.proto.desc")}</p>
                        <p className="ai-note">
                            {t("game.projects.proto.aiNote")}
                        </p>
                        <div className="tags">
                            <span className="mono">
                                {t("game.projects.proto.tags.platform")}
                            </span>
                            <span className="mono">
                                {t("game.projects.proto.tags.type")}
                            </span>
                            <span className="mono">
                                {t("game.projects.proto.tags.status")}
                            </span>
                        </div>
                        <span className="build mono">
                            {t("game.projects.proto.build")}
                        </span>
                    </div>
                </ProtoCard>
            </Projects>

            <Block>
                <h3>{t("game.vision.title")}</h3>
                <p className="muted">{t("game.vision.p1")}</p>
                <p className="muted">{t("game.vision.p2")}</p>
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
