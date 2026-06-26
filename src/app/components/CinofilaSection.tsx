"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const TOPIC_KEYS = [
    { symbol: "◜", key: "puppies" },
    { symbol: "◝", key: "communication" },
    { symbol: "◟", key: "walking" },
    { symbol: "◞", key: "adopted" },
] as const;

export const CinofilaSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="cinofila">
            <Intro>
                <Photo>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/doggo3.jpg"
                        alt={t("cinofila.photoAlt1")}
                    />
                </Photo>
                <div className="copy">
                    <span className="tech-label aqua">
                        {t("cinofila.techLabel")}
                    </span>
                    <h2>{t("cinofila.title")}</h2>
                    <p>{t("cinofila.intro")}</p>
                    <Cta href="#contact">
                        {t("cinofila.cta")}
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
            </Intro>

            <Approach>
                <div className="text">
                    <h3>{t("cinofila.approach.title")}</h3>
                    <p>
                        {t("cinofila.approach.p1Before")}
                        <span className="aqua">
                            {t("cinofila.approach.p1Highlight1")}
                        </span>
                        {t("cinofila.approach.p1After")}
                    </p>
                    <p>
                        {t("cinofila.approach.p2Before")}
                        <span className="aqua">
                            {t("cinofila.approach.p2Highlight1")}
                        </span>
                        {t("cinofila.approach.p2Middle")}
                        <span className="aqua">
                            {t("cinofila.approach.p2Highlight2")}
                        </span>
                        {t("cinofila.approach.p2After")}
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/doggo.jpg"
                        alt={t("cinofila.photoAlt2")}
                    />
                </PhotoTall>
            </Approach>

            <Topics>
                <h3>{t("cinofila.topics.title")}</h3>
                <div className="grid">
                    {TOPIC_KEYS.map((topic, i) => (
                        <Topic
                            key={topic.key}
                            style={{ animationDelay: `${0.1 * i}s` }}
                        >
                            <span className="symbol">{topic.symbol}</span>
                            <h4>
                                {t(`cinofila.topics.items.${topic.key}.title`)}
                            </h4>
                            <p>
                                {t(`cinofila.topics.items.${topic.key}.desc`)}
                            </p>
                            <span className="hint aqua">
                                {t(`cinofila.topics.items.${topic.key}.hint`)}
                            </span>
                        </Topic>
                    ))}
                </div>
            </Topics>

            <Diary>
                <div className="copy">
                    <h3>{t("cinofila.diary.title")}</h3>
                    <p>{t("cinofila.diary.desc")}</p>
                    <span className="soon mono">
                        {t("cinofila.diary.soon")}
                    </span>
                </div>
                <Notebook>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/doggo2.jpg"
                        alt={t("cinofila.photoAlt3")}
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
