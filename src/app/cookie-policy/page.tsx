"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";

export default function CookiePolicy() {
    return (
        <Container>
            <Header>
                <Title>Cookie Policy</Title>
                <LastUpdate>Ultimo aggiornamento: 25/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>1. Cosa sono i cookie</SectionTitle>
                <Paragraph>
                    I cookie sono piccoli file di testo che i siti web possono
                    salvare sul dispositivo dell&apos;utente per consentire
                    alcune funzionalità, memorizzare preferenze o analizzare la
                    navigazione.
                </Paragraph>
                <Paragraph>
                    Alcune tecnologie di analisi possono raccogliere informazioni
                    anche senza utilizzare cookie.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>2. Cookie utilizzati dal sito</SectionTitle>
                <Paragraph>
                    Il sito lemaks.it non utilizza cookie di profilazione, cookie
                    pubblicitari, cookie di remarketing o cookie destinati a
                    monitorare gli utenti su siti web diversi.
                </Paragraph>
                <Paragraph>
                    Il sito non utilizza cookie analytics di terze parti, quali
                    Google Analytics, Meta Pixel, Microsoft Clarity, Hotjar o
                    strumenti equivalenti.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>3. Analisi statistica self-hosted</SectionTitle>
                <Paragraph>
                    Il sito utilizza Umami, un sistema di analisi statistica
                    self-hosted raggiungibile tramite analytics.lemaks.it.
                </Paragraph>
                <Paragraph>
                    Umami non utilizza cookie e non memorizza l&apos;indirizzo
                    IP. Il servizio viene utilizzato esclusivamente per produrre
                    statistiche aggregate sul traffico del sito, quali pagine
                    visitate, provenienza della visita, browser, dispositivo,
                    lingua e area geografica approssimativa.
                </Paragraph>
                <Paragraph>Il tracker è configurato per:</Paragraph>
                <List>
                    <li>
                        limitare il funzionamento ai domini lemaks.it e
                        www.lemaks.it;
                    </li>
                    <li>
                        non raccogliere parametri di ricerca o frammenti degli
                        URL;
                    </li>
                    <li>
                        rispettare l&apos;impostazione &ldquo;Do Not
                        Track&rdquo; del browser;
                    </li>
                    <li>
                        non inviare dati contenuti nei moduli di contatto;
                    </li>
                    <li>
                        non utilizzare identificativi personali, profilazione,
                        pubblicità comportamentale o monitoraggio tra siti.
                    </li>
                </List>
                <Paragraph>
                    Non sono attivi strumenti di session replay, heatmap, pixel
                    di conversione, identificativi persistenti o funzionalità
                    equivalenti.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>4. Consenso e banner cookie</SectionTitle>
                <Paragraph>
                    Poiché il sito non utilizza cookie o strumenti di
                    tracciamento per finalità di profilazione o marketing, non
                    viene richiesto il consenso preventivo tramite banner cookie.
                </Paragraph>
                <Paragraph>
                    L&apos;utente può comunque impedire l&apos;invio delle
                    statistiche attivando l&apos;impostazione &ldquo;Do Not
                    Track&rdquo; nel proprio browser.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    5. Dati trattati e periodo di conservazione
                </SectionTitle>
                <Paragraph>
                    Le informazioni raccolte tramite Umami sono utilizzate
                    esclusivamente per analizzare e migliorare il sito.
                </Paragraph>
                <Paragraph>
                    I dati statistici sono conservati per un periodo massimo di{" "}
                    <strong>12 mesi</strong> e successivamente cancellati o
                    anonimizzati.
                </Paragraph>
                <Paragraph>
                    Per ulteriori informazioni sul trattamento dei dati personali
                    e sui diritti dell&apos;utente, è possibile consultare
                    l&apos;{" "}
                    <a href="/privacy-policy">Informativa Privacy</a>.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>6. Modifiche alla Cookie Policy</SectionTitle>
                <Paragraph>
                    La presente Cookie Policy può essere aggiornata nel tempo.
                    Eventuali modifiche saranno pubblicate su questa pagina con
                    indicazione della data di ultimo aggiornamento.
                </Paragraph>
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
