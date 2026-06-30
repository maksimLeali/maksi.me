"use client";
import { useParams } from "next/navigation";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import { useTranslation } from "react-i18next";

export default function TerminiECondizioni() {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const tr = (k: string) => t(`legal.terms.${k}`);
    return (
        <Container>
            <Header>
                <Title>{tr("title")}</Title>
                <LastUpdate>{t("legal.lastUpdate")}: 25/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>{tr("s1.title")}</SectionTitle>
                <Paragraph>
                    {tr("s1.p1")}{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s2.title")}</SectionTitle>
                <Paragraph>{tr("s2.p1")}</Paragraph>
                <Paragraph>{tr("s2.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s3.title")}</SectionTitle>
                <Paragraph>{tr("s3.p1")}</Paragraph>
                <Paragraph>{tr("s3.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s4.title")}</SectionTitle>
                <Paragraph>{tr("s4.p1")}</Paragraph>
                <Paragraph>{tr("s4.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s5.title")}</SectionTitle>
                <Paragraph>{tr("s5.p1")}</Paragraph>
                <Paragraph>{tr("s5.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s6.title")}</SectionTitle>
                <Paragraph>{tr("s6.p1")}</Paragraph>
                <Paragraph>{tr("s6.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s7.title")}</SectionTitle>
                <Paragraph>
                    {tr("s7.p1Pre")}{" "}
                    <a href={`/${lang}/privacy-policy`}>{tr("s7.p1Link")}</a>{" "}
                    {tr("s7.p1Post")}
                </Paragraph>
                <Paragraph>{tr("s7.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s8.title")}</SectionTitle>
                <Paragraph>{tr("s8.p1")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{tr("s9.title")}</SectionTitle>
                <Paragraph>{tr("s9.p1")}</Paragraph>
                <Paragraph>{tr("s9.p2")}</Paragraph>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    max-width: ${$uw(36)};
    margin: 0 auto;
    padding: ${$cssTRBL(2, 1.5, 4)};
    ${$breakPoint(820)} {
        max-width: 100%;
        padding: ${$cssTRBL(2.5, 2, 4)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2.5, 5)};
    }
`;

const Header = styled.div`
    margin-bottom: ${$uw(3)};
    ${$breakPoint(500)} {
        margin-bottom: ${$uw(4)};
    }
`;

const Title = styled.h1`
    font-family: "Martian Mono", monospace;
    font-size: ${$uw(3)};
    font-weight: 200;
    line-height: 1.1;
    margin: 0 0 ${$uw(0.5)};
    color: ${$color("white-light")};
    ${$breakPoint(820)} {
        font-size: ${$uw(4)};
    }
    ${$breakPoint(500)} {
        font-size: ${$uw(5.5)};
    }
`;

const LastUpdate = styled.p`
    font-family: "Space Mono", monospace;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
    color: ${$color("gray")};
    margin: 0;
`;

const Section = styled.section`
    margin-bottom: ${$uw(2)};
    ${$breakPoint(500)} {
        margin-bottom: ${$uw(3)};
    }
`;

const SectionTitle = styled.h2`
    font-family: "Martian Mono", monospace;
    font-size: ${$uw(1.6)};
    font-weight: 300;
    line-height: 1.3;
    margin: 0 0 ${$uw(0.8)};
    color: ${$color("white-light")};
    ${$breakPoint(820)} {
        font-size: ${$uw(2.2)};
    }
    ${$breakPoint(500)} {
        font-size: ${$uw(3.2)};
        margin: 0 0 ${$uw(1.2)};
    }
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    line-height: 1.7;
    color: ${$color("white-dark")};
    margin: 0 0 ${$uw(0.6)};
    ${$breakPoint(500)} {
        font-size: 1.6rem;
        margin: 0 0 ${$uw(1)};
    }

    a {
        color: ${$color("tertiary")};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${$color("gray")};
    margin: ${$uw(1.5)} 0;
    opacity: 0.3;
    ${$breakPoint(500)} {
        margin: ${$uw(2.5)} 0;
    }
`;
