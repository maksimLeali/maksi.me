"use client";

import { ContactForm } from "@components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import Link from "next/link";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

export const ContactSection = () => {
    return (
        <Section id="contact">
            <Header>
                <span className="tech-label cyan">CONTATTI</span>
                <h2>Parliamo del tuo sito o della tua automazione</h2>
                <p>
                    Hai un evento, un&apos;attività o un processo che vuoi
                    rendere più semplice da gestire? Scrivimi: ti rispondo entro
                    24 ore per capire insieme se posso aiutarti.
                </p>
            </Header>

            <Body>
                <FormWrapper>
                    <ContactForm width="100%" />
                    <PrivacyNote>
                        I dati inseriti saranno utilizzati esclusivamente per
                        rispondere alla tua richiesta di contatto e non saranno
                        utilizzati per finalità di marketing senza il tuo
                        consenso.
                        <br />
                        Per maggiori informazioni, consulta l&apos;
                        <Link href="/privacy-policy">Informativa Privacy</Link>.
                    </PrivacyNote>
                </FormWrapper>

                <Aside>
                    <h3>Dove trovarmi</h3>
                    <a href="mailto:contact@lemaks.it">
                        <RiMailLine /> contact@lemaks.it
                    </a>
                    <a
                        href="https://wa.me/+39NUMEROQUI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp"
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maksim-leali-50a940168/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/maksimLeali"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href="https://www.instagram.com/lemaks_dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram /> Instagram
                    </a>
                </Aside>
            </Body>
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
    ${$breakPoint(590)} {
        margin-bottom: ${$uw(6)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
        gap: ${$uw(4)};
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
        text-align: justify;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
        }
    }
`;

const Body = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${$uw(3)};
    ${$breakPoint(820)} {
        flex-direction: column;
        gap: ${$uw(4)};
    }
`;

const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: ${$uw(33)};
    ${$breakPoint(820)} {
        max-width: 100%;
    }
`;

const PrivacyNote = styled.p`
    font-size: 1.3rem;
    line-height: 1.6;
    color: ${$color("gray")};
    margin-top: ${$uw(1)};
    ${$breakPoint(500)} {
        font-size: 1.4rem;
        margin-top: ${$uw(1.5)};
    }

    a {
        color: ${$color("tertiary")};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Aside = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.8)};
    min-width: ${$uw(14)};
    ${$breakPoint(500)} {
        gap: ${$uw(1.4)};
    }

    h3 {
        font-family: "Martian Mono", monospace;
        font-weight: 300;
        margin-bottom: ${$uw(0.4)};
        ${$breakPoint(500)} {
            font-size: ${$uw(2.6)};
            margin-bottom: ${$uw(0.8)};
        }
    }
    a {
        display: flex;
        align-items: center;
        gap: ${$uw(0.6)};
        color: ${$color("white-dark")};
        text-decoration: none;
        transition: color 0.2s ease;
        ${$breakPoint(500)} {
            font-size: 1.6rem;
            gap: ${$uw(1)};
        }
    }
    a:hover {
        color: ${$color("tertiary")};
    }
    a.whatsapp {
        color: #25d366;
    }
    a.whatsapp:hover {
        color: #1ebe5d;
    }
    a svg {
        width: ${$uw(1)};
        height: ${$uw(1)};
        ${$breakPoint(500)} {
            width: ${$uw(2)};
            height: ${$uw(2)};
        }
    }
`;
