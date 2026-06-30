"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";

type Props = {
    ns: "localServices" | "events" | "automations";
};

export const LocalPage = ({ ns }: Props) => {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const tr = (k: string) => t(`${ns}.${k}`);
    return (
        <Container>
            <h1>{tr("h1")}</h1>
            <Lead>{tr("lead")}</Lead>

            <h2>{tr("h2")}</h2>
            <Body>{tr("body")}</Body>

            <Cta href={`/${lang}/#contact`}>{tr("cta")}</Cta>
        </Container>
    );
};

export default LocalPage;

const Container = styled.div`
    max-width: ${$uw(40)};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${$uw(1)};
    padding: ${$cssTRBL(2, 1.5, 4)};
    ${$breakPoint(820)} {
        max-width: 100%;
        padding: ${$cssTRBL(2.5, 2, 4)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2.5, 5)};
    }

    h1 {
        font-family: "Martian Mono", monospace;
        font-weight: 200;
        font-size: ${$uw(2.6)};
        line-height: 1.15;
        color: ${$color("white-light")};
        ${$breakPoint(820)} {
            font-size: ${$uw(3.4)};
        }
        ${$breakPoint(500)} {
            font-size: ${$uw(4.5)};
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

const Cta = styled(Link)`
    align-self: flex-start;
    margin-top: ${$uw(1)};
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
        padding: ${$cssTRBL(1.2, 2)};
    }
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${$uw(0.3)} ${$uw(0.3)} ${$color("tertiary-dark")};
    }
`;
