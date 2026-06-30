"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const LocalSeoSection = () => {
    const { t } = useTranslation();
    return (
        <Section id="local-seo">
            <h1>{t("home.seoH1")}</h1>
            <Lead>{t("home.seoLead")}</Lead>
            <h2>{t("home.seoH2")}</h2>
            <Body>{t("home.seoBody")}</Body>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.8)};
    padding: ${$cssTRBL(2, 1)};
    max-width: ${$uw(40)};
    margin: 0 auto;
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
        max-width: 100%;
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
    }

    h1 {
        font-family: "Martian Mono", monospace;
        font-weight: 200;
        font-size: ${$uw(2.4)};
        line-height: 1.15;
        color: ${$color("white-light")};
        ${$breakPoint(500)} {
            font-size: ${$uw(4)};
        }
    }

    h2 {
        font-family: "Martian Mono", monospace;
        font-weight: 300;
        font-size: ${$uw(1.6)};
        line-height: 1.3;
        margin-top: ${$uw(1)};
        color: ${$color("white-light")};
        ${$breakPoint(500)} {
            font-size: ${$uw(2.8)};
        }
    }
`;

const Lead = styled.p`
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${$color("white-dark")};
    ${$breakPoint(500)} {
        font-size: 1.7rem;
    }
`;

const Body = styled.p`
    font-size: 1.5rem;
    line-height: 1.7;
    color: ${$color("gray")};
    ${$breakPoint(500)} {
        font-size: 1.6rem;
    }
`;
