"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { RiCornerDownRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SERVICE_KEYS = [
    { n: "01", key: "showcase", color: "primary" },
    { n: "02", key: "corporate", color: "primary-dark" },
    { n: "03", key: "landing", color: "aqua-dark" },
    { n: "04", key: "restyling", color: "secondary" },
] as const;

const PROCESS_KEYS = ["01", "02", "03", "04", "05"] as const;

export const WebDevSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="web">
            <Intro>
                <div className="copy">
                    <span className="tech-label cyan">
                        {t("web.techLabel")}
                    </span>
                    <h2>{t("web.title")}</h2>
                    <p>{t("web.intro")}</p>
                    <Cta href="#contact">
                        {t("web.cta")}
                        <RiCornerDownRightLine />
                    </Cta>
                </div>
            </Intro>

            <Mockups>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="desktop"
                    src="/assets/barba.png"
                    alt={t("web.mockupAltDesktop")}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="mobile"
                    src="/assets/barba_mobile.png"
                    alt={t("web.mockupAltMobile")}
                />
            </Mockups>
            <DemoLink
                href="https://barber.makso.me"
                target="_blank"
                rel="noopener noreferrer"
            >
                <RiCornerDownRightLine />
                Guarda questo sito demo
            </DemoLink>

            <Block>
                <h3>{t("web.block1Title")}</h3>
                <p className="muted">{t("web.block1Muted")}</p>
                <Cards>
                    {SERVICE_KEYS.map((s, i) => (
                        <Card
                            key={s.n}
                            $bg={s.color}
                            style={{ animationDelay: `${0.12 * i}s` }}
                        >
                            <span className="num mono">{s.n}</span>
                            <h4>{t(`web.services.${s.key}.title`)}</h4>
                            <p>{t(`web.services.${s.key}.desc`)}</p>
                        </Card>
                    ))}
                </Cards>
            </Block>

            <Block>
                <h3>{t("web.block2Title")}</h3>
                <p className="muted">{t("web.block2Muted")}</p>
                <Timeline>
                    {PROCESS_KEYS.map((n) => (
                        <Step key={n}>
                            <span className="num mono">{n}</span>
                            <p>{t(`web.process.${n}`)}</p>
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
            top: unset;
            width: ${$uw(15)};
            height: ${$uw(32)};
            bottom: ${$uw(-5)};
            right: ${$uw(5)};
        }
    }
`;

const DemoLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.6)};
    width: fit-content;
    align-self: center;
    margin-top: ${$uw(-1)};
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
        margin-top: ${$uw(2)};
    }
    &:hover {
        transform: translateY(-2px);
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
