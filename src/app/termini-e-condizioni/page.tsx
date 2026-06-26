"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";

export default function TerminiECondizioni() {
    return (
        <Container>
            <Header>
                <Title>Termini e condizioni di utilizzo</Title>
                <LastUpdate>Ultimo aggiornamento: 25/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>1. Titolare del sito</SectionTitle>
                <Paragraph>
                    Il sito lemaks.it è gestito da Maksim Leali, contattabile
                    all&apos;indirizzo e-mail:{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>2. Finalità del sito</SectionTitle>
                <Paragraph>
                    Il sito ha finalità informative e presenta attività,
                    progetti e servizi relativi allo sviluppo web, allo sviluppo
                    di videogiochi e ai contenuti sull&apos;educazione cinofila.
                </Paragraph>
                <Paragraph>
                    Le informazioni pubblicate hanno carattere generale e non
                    costituiscono preventivo, proposta contrattuale vincolante,
                    consulenza professionale, promessa di risultato o garanzia
                    di disponibilità dei servizi descritti.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    3. Richieste di contatto e preventivi
                </SectionTitle>
                <Paragraph>
                    L&apos;invio di una richiesta tramite il modulo di contatto
                    o via e-mail non comporta la conclusione di alcun contratto.
                </Paragraph>
                <Paragraph>
                    Eventuali servizi, tempi di realizzazione, corrispettivi,
                    modalità di pagamento, revisioni, consegne, assistenza e
                    diritti di utilizzo saranno disciplinati separatamente
                    mediante preventivo, accordo scritto o altro documento
                    contrattuale concordato tra le parti.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>4. Proprietà intellettuale</SectionTitle>
                <Paragraph>
                    Salvo diversa indicazione, i contenuti presenti sul sito,
                    inclusi testi, struttura, grafica, elementi visivi,
                    immagini, codice, loghi e materiali originali, sono di
                    proprietà del Titolare o utilizzati con autorizzazione.
                </Paragraph>
                <Paragraph>
                    Non è consentito copiare, riprodurre, modificare,
                    distribuire, pubblicare o utilizzare tali contenuti per
                    finalità commerciali senza preventiva autorizzazione scritta
                    del Titolare, fatti salvi gli utilizzi consentiti dalla
                    legge.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    5. Collegamenti a siti e servizi esterni
                </SectionTitle>
                <Paragraph>
                    Il sito può contenere collegamenti a siti, piattaforme o
                    servizi di terzi.
                </Paragraph>
                <Paragraph>
                    Il Titolare non controlla tali risorse e non è responsabile
                    dei relativi contenuti, disponibilità, sicurezza, privacy
                    policy, cookie policy o condizioni di utilizzo.
                    L&apos;utente è invitato a consultare le informative e le
                    condizioni applicabili ai servizi esterni prima di
                    utilizzarli.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    6. Disponibilità e limitazione di responsabilità
                </SectionTitle>
                <Paragraph>
                    Il Titolare si impegna a mantenere le informazioni del sito
                    ragionevolmente accurate e aggiornate, ma non garantisce
                    l&apos;assenza di errori, omissioni, interruzioni,
                    malfunzionamenti o indisponibilità temporanee.
                </Paragraph>
                <Paragraph>
                    Nei limiti consentiti dalla legge, il Titolare non risponde
                    di danni diretti o indiretti derivanti dall&apos;uso o
                    dall&apos;impossibilità di utilizzare il sito, i suoi
                    contenuti o servizi esterni collegati.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>7. Privacy e cookie</SectionTitle>
                <Paragraph>
                    Il trattamento dei dati personali è descritto nell&apos;
                    <a href="/privacy-policy">Informativa Privacy</a>{" "}
                    disponibile sul sito.
                </Paragraph>
                <Paragraph>
                    Le informazioni relative ai cookie e agli strumenti di
                    analisi statistica sono disponibili nella Cookie Policy.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>8. Modifiche ai termini</SectionTitle>
                <Paragraph>
                    Il Titolare può aggiornare i presenti termini in qualsiasi
                    momento. Le modifiche saranno efficaci dalla data di
                    pubblicazione della versione aggiornata sul sito.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>9. Legge applicabile</SectionTitle>
                <Paragraph>
                    I presenti termini sono disciplinati dalla legge italiana.
                </Paragraph>
                <Paragraph>
                    Restano fermi gli eventuali diritti inderogabili
                    riconosciuti dalla normativa applicabile agli utenti
                    consumatori.
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

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${$color("gray")};
    margin: ${$uw(1.5)} 0;
    opacity: 0.3;
    ${$breakPoint(500)} {
        margin: ${$uw(2.5)} 0;
    }
`;
