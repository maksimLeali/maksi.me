"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t } = useTranslation();
    const p = (k: string) => t(`legal.privacy.${k}`);
    return (
        <Container>
            <Header>
                <Title>{p("title")}</Title>
                <LastUpdate>{t("legal.lastUpdate")}: 25/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>{p("s1.title")}</SectionTitle>
                <Paragraph>
                    {p("s1.p1")}{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s2.title")}</SectionTitle>

                <SubSectionTitle>{p("s2.sub1")}</SubSectionTitle>
                <Paragraph>{p("s2.p1")}</Paragraph>
                <List>
                    <li>{p("s2.l1")}</li>
                    <li>{p("s2.l2")}</li>
                    <li>{p("s2.l3")}</li>
                    <li>{p("s2.l4")}</li>
                    <li>{p("s2.l5")}</li>
                    <li>{p("s2.l6")}</li>
                </List>
                <Paragraph>{p("s2.p2")}</Paragraph>

                <SubSectionTitle>{p("s2.sub2")}</SubSectionTitle>
                <Paragraph>{p("s2.p3")}</Paragraph>
                <Paragraph>{p("s2.p4")}</Paragraph>
                <List>
                    <li>{p("s2.l7")}</li>
                    <li>{p("s2.l8")}</li>
                    <li>{p("s2.l9")}</li>
                    <li>{p("s2.l10")}</li>
                </List>
                <Paragraph>{p("s2.p5")}</Paragraph>
                <Paragraph>{p("s2.p6")}</Paragraph>

                <SubSectionTitle>{p("s2.sub3")}</SubSectionTitle>
                <Paragraph>{p("s2.p7")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s3.title")}</SectionTitle>
                <Paragraph>{p("s3.p1")}</Paragraph>
                <List>
                    <li>{p("s3.l1")}</li>
                    <li>{p("s3.l2")}</li>
                    <li>{p("s3.l3")}</li>
                    <li>{p("s3.l4")}</li>
                    <li>{p("s3.l5")}</li>
                    <li>{p("s3.l6")}</li>
                </List>
                <Paragraph>{p("s3.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s4.title")}</SectionTitle>
                <Paragraph>{p("s4.p1")}</Paragraph>
                <List>
                    <li>{p("s4.l1")}</li>
                    <li>{p("s4.l2")}</li>
                    <li>{p("s4.l3")}</li>
                </List>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s5.title")}</SectionTitle>
                <Paragraph>{p("s5.p1")}</Paragraph>
                <Paragraph>{p("s5.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s6.title")}</SectionTitle>
                <Paragraph>{p("s6.p1")}</Paragraph>
                <Paragraph>{p("s6.p2")}</Paragraph>
                <Paragraph>{p("s6.p3")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s7.title")}</SectionTitle>
                <Paragraph>{p("s7.p1")}</Paragraph>
                <List>
                    <li>{p("s7.l1")}</li>
                    <li>{p("s7.l2")}</li>
                    <li>{p("s7.l3")}</li>
                    <li>{p("s7.l4")}</li>
                </List>
                <Paragraph>{p("s7.p2")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s8.title")}</SectionTitle>
                <Paragraph>{p("s8.p1")}</Paragraph>
                <Paragraph>{p("s8.p2")}</Paragraph>
                <Paragraph>{p("s8.p3")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s9.title")}</SectionTitle>
                <Paragraph>
                    {p("s9.p1Pre")} <strong>{p("s9.p1Bold")}</strong>{" "}
                    {p("s9.p1Post")}
                </Paragraph>
                <Paragraph>
                    {p("s9.p2Pre")} <strong>{p("s9.p2Bold")}</strong>{" "}
                    {p("s9.p2Post")}
                </Paragraph>
                <Paragraph>
                    {p("s9.p3Pre")} <strong>{p("s9.p3Bold")}</strong>{" "}
                    {p("s9.p3Post")}
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s10.title")}</SectionTitle>
                <Paragraph>{p("s10.p1")}</Paragraph>
                <List>
                    <li>{p("s10.l1")}</li>
                    <li>{p("s10.l2")}</li>
                    <li>{p("s10.l3")}</li>
                    <li>{p("s10.l4")}</li>
                    <li>{p("s10.l5")}</li>
                    <li>{p("s10.l6")}</li>
                </List>
                <Paragraph>
                    {p("s10.p2")}{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
                <Paragraph>{p("s10.p3")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s11.title")}</SectionTitle>
                <Paragraph>{p("s11.p1")}</Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>{p("s12.title")}</SectionTitle>
                <Paragraph>{p("s12.p1")}</Paragraph>
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

const SubSectionTitle = styled.h3`
    font-family: "Martian Mono", monospace;
    font-size: ${$uw(1.3)};
    font-weight: 300;
    line-height: 1.3;
    margin: ${$uw(1.2)} 0 ${$uw(0.6)};
    color: ${$color("tertiary-dark")};
    ${$breakPoint(820)} {
        font-size: ${$uw(1.8)};
    }
    ${$breakPoint(500)} {
        font-size: ${$uw(2.6)};
        margin: ${$uw(1.8)} 0 ${$uw(1)};
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
