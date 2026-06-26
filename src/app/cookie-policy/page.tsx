"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
    const { t } = useTranslation();
    const c = (k: string) => t(`legal.cookie.${k}`);
    return (
        <Container>
            <Header>
                <Title>{c("title")}</Title>
                <LastUpdate>{t("legal.lastUpdate")}: 26/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>{c("s1.title")}</SectionTitle>
                <Paragraph>{c("s1.p1")}</Paragraph>
                <Paragraph>{c("s1.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s2.title")}</SectionTitle>
                <Paragraph>{c("s2.p1")}</Paragraph>
                <Paragraph>{c("s2.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s3.title")}</SectionTitle>
                <Paragraph>{c("s3.p1")}</Paragraph>
                <Paragraph>{c("s3.p2")}</Paragraph>
                <Paragraph>{c("s3.p3")}</Paragraph>
                <List>
                    <li>{c("s3.l1")}</li>
                    <li>{c("s3.l2")}</li>
                    <li>{c("s3.l3")}</li>
                    <li>{c("s3.l4")}</li>
                    <li>{c("s3.l5")}</li>
                </List>
                <Paragraph>{c("s3.p4")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s4.title")}</SectionTitle>
                <Paragraph>
                    {c("s4.p1Pre")} <strong>{c("s4.p1Bold")}</strong>{" "}
                    {c("s4.p1Post")} <code>lemaks_lang</code>.
                </Paragraph>
                <Paragraph>{c("s4.p2")}</Paragraph>
                <Paragraph>
                    {c("s4.p3Pre")} <strong>{c("s4.p3Bold")}</strong>{" "}
                    {c("s4.p3Post")}
                </Paragraph>
                <Paragraph>{c("s4.p4")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s5.title")}</SectionTitle>
                <Paragraph>{c("s5.p1")}</Paragraph>
                <Paragraph>{c("s5.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s6.title")}</SectionTitle>
                <Paragraph>{c("s6.p1")}</Paragraph>
                <Paragraph>
                    {c("s6.p2Pre")} <strong>{c("s6.p2Bold")}</strong>{" "}
                    {c("s6.p2Post")}
                </Paragraph>
                <Paragraph>{c("s6.p3")}</Paragraph>
                <Paragraph>
                    {c("s6.p4Pre")}{" "}
                    <a href="/privacy-policy">{c("s6.p4Link")}</a>
                    {c("s6.p4Post")}
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{c("s7.title")}</SectionTitle>
                <Paragraph>{c("s7.p1")}</Paragraph>
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

    code {
        font-family: "Space Mono", monospace;
        font-size: 0.9em;
        padding: 0.1em 0.4em;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.08);
        color: ${$color("tertiary")};
    }
`;

const List = styled.ul`
    font-size: 1.5rem;
    line-height: 1.7;
    color: ${$color("white-dark")};
    margin: 0 0 ${$uw(0.6)};
    padding-left: ${$uw(1.4)};
    ${$breakPoint(500)} {
        font-size: 1.6rem;
        margin: 0 0 ${$uw(1)};
        padding-left: ${$uw(2)};
    }

    li {
        margin-bottom: ${$uw(0.3)};
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
