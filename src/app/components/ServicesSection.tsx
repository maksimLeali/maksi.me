"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import Link from "next/link";
import styled from "styled-components";
import { RiGlobalLine, RiFlowChart } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SERVICE_KEYS = [
    { key: "local", icon: <RiGlobalLine />, accent: "tertiary" },
    { key: "automation", icon: <RiFlowChart />, accent: "primary" },
] as const;

export const ServicesSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="servizi">
            <Header>
                <span className="tech-label cyan">
                    {t("services.techLabel")}
                </span>
                <h2>{t("services.title")}</h2>
                <p>{t("services.subtitle")}</p>
            </Header>

            <Grid>
                {SERVICE_KEYS.map((s) => (
                    <Card key={s.key} $accent={s.accent}>
                        <IconWrap $accent={s.accent}>{s.icon}</IconWrap>
                        <h3>{t(`services.items.${s.key}.title`)}</h3>
                        <p>{t(`services.items.${s.key}.desc`)}</p>
                    </Card>
                ))}
            </Grid>

            <CTA href="#contact">{t("services.cta")}</CTA>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${$cssTRBL(2, 1)};
    gap: ${$uw(2)};
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
    }
`;

const Header = styled.div`
    max-width: ${$uw(34)};
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.6)};
    ${$breakPoint(820)} {
        max-width: 100%;
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
        color: ${$color("gray")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${$uw(2)};
    ${$breakPoint(820)} {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div<{ $accent: string }>`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.8)};
    padding: ${$cssTRBL(1.5, 1.5)};
    border: 1px solid ${$color("gray-dark")};
    border-top: 3px solid
        ${({ $accent }) => $color($accent as Parameters<typeof $color>[0])};
    border-radius: 2px;
    background: ${$color("black-dark")};

    h3 {
        font-family: "Martian Mono", monospace;
        font-weight: 300;
        font-size: ${$uw(1.8)};
        ${$breakPoint(500)} {
            font-size: ${$uw(2.8)};
        }
    }
    p {
        color: ${$color("gray")};
        line-height: 1.7;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const IconWrap = styled.span<{ $accent: string }>`
    color: ${({ $accent }) => $color($accent as Parameters<typeof $color>[0])};
    svg {
        width: ${$uw(2)};
        height: ${$uw(2)};
        ${$breakPoint(500)} {
            width: ${$uw(3)};
            height: ${$uw(3)};
        }
    }
`;

const CTA = styled(Link)`
    align-self: flex-start;
    font-family: "Space Mono", monospace;
    font-size: 1.5rem;
    color: ${$color("tertiary")};
    text-decoration: none;
    border: 1px solid ${$color("tertiary")};
    padding: ${$cssTRBL(0.6, 1.2)};
    border-radius: 2px;
    transition:
        background-color 0.2s ease,
        color 0.2s ease;
    ${$breakPoint(500)} {
        font-size: 1.6rem;
    }
    &:hover {
        background-color: ${$color("tertiary")};
        color: ${$color("black-dark")};
    }
`;
