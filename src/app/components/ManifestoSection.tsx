"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const COLUMNS = [
    { symbol: "◇", key: "clarity" },
    { symbol: "◯", key: "comprehension" },
    { symbol: "△", key: "interaction" },
] as const;

export const ManifestoSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="manifesto">
            <Header>
                <span className="tech-label">{t("manifesto.techLabel")}</span>
                <h2>{t("manifesto.title")}</h2>
                <p>{t("manifesto.intro")}</p>
            </Header>
            <Columns>
                {COLUMNS.map((col, i) => (
                    <Column
                        key={col.key}
                        style={{ animationDelay: `${0.15 * i}s` }}
                    >
                        <span className="symbol">{col.symbol}</span>
                        <p className="context">
                            {t(`manifesto.columns.${col.key}.context`)}
                        </p>
                        <p className="keyword cyan">
                            {t(`manifesto.columns.${col.key}.keyword`)}.
                        </p>
                        <p className="desc">
                            {t(`manifesto.columns.${col.key}.desc`)}
                        </p>
                    </Column>
                ))}
            </Columns>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${$cssTRBL(2, 1)};
    gap: ${$uw(2)};
    margin-bottom: ${$uw(4)};
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
        gap: ${$uw(3)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(4)};
        margin-bottom: ${$uw(6)};
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
        color: ${$color("gray")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const Columns = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${$uw(2)};
    ${$breakPoint(820)} {
        flex-direction: column;
        gap: ${$uw(3)};
    }
`;

const Column = styled.div`
    flex: 1;
    padding: ${$uw(1.5)};
    border: 1px solid transparent;
    border-radius: 4px;
    transition:
        border-color 0.3s ease,
        background-color 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
    ${$breakPoint(500)} {
        padding: ${$uw(2.5)};
        border-color: ${$color("gray-dark")};
    }

    .symbol {
        display: inline-block;
        font-size: ${$uw(2.5)};
        color: ${$color("gray")};
        margin-bottom: ${$uw(1)};
        animation: slowFloat 8s ease-in-out infinite;
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
        }
    }
    .context {
        color: ${$color("gray")};
        font-size: 1.6rem;
    }
    .keyword {
        font-family: "Martian Mono", monospace;
        font-size: ${$uw(2)};
        font-weight: 300;
        margin-bottom: ${$uw(0.8)};
        ${$breakPoint(500)} {
            font-size: ${$uw(3.4)};
            margin-bottom: ${$uw(1.2)};
        }
    }
    .desc {
        color: ${$color("white-dark")};
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }

    &:hover {
        border-color: ${$color("tertiary-dark")};
        background-color: rgba(0, 251, 255, 0.04);
    }
    &:hover .symbol {
        color: ${$color("tertiary")};
    }
`;
