"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";

export default function PrivacyPolicy() {
    return (
        <Container>
            <Header>
                <Title>Informativa Privacy</Title>
                <LastUpdate>Ultimo aggiornamento: 24/06/2026</LastUpdate>
            </Header>

            <Section>
                <SectionTitle>1. Titolare del trattamento</SectionTitle>
                <Paragraph>
                    Il titolare del trattamento dei dati personali è Maksim
                    Leali, contattabile all&apos;indirizzo e-mail:{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>2. Dati personali raccolti</SectionTitle>
                <Paragraph>
                    Attraverso il modulo di contatto presente sul sito possono
                    essere raccolti i seguenti dati:
                </Paragraph>
                <List>
                    <li>nome;</li>
                    <li>cognome;</li>
                    <li>indirizzo e-mail;</li>
                    <li>azienda o progetto </li>
                    <li>contenuto del messaggio inviato dall&apos;utente;</li>
                    <li>
                        eventuali ulteriori dati che l&apos;utente decide
                        spontaneamente di inserire nella richiesta.
                    </li>
                </List>
                <Paragraph>
                    Il sito non utilizza cookie di profilazione, strumenti di
                    analisi statistica o altri strumenti di tracciamento non
                    tecnici. Possono essere trattati esclusivamente dati tecnici
                    di navigazione necessari alla sicurezza e al corretto
                    funzionamento del sito.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>3. Finalità del trattamento</SectionTitle>
                <Paragraph>I dati personali vengono trattati per:</Paragraph>
                <List>
                    <li>
                        rispondere alle richieste inviate tramite il modulo di
                        contatto;
                    </li>
                    <li>
                        ricontattare l&apos;utente in relazione alla richiesta
                        ricevuta;
                    </li>
                    <li>
                        gestire eventuali richieste di informazioni,
                        collaborazioni o preventivi;
                    </li>
                    <li>
                        tutelare i diritti del titolare e garantire la sicurezza
                        tecnica del sito.
                    </li>
                </List>
                <Paragraph>
                    I dati non saranno utilizzati per inviare comunicazioni
                    promozionali o newsletter senza uno specifico consenso
                    dell&apos;utente.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>4. Base giuridica del trattamento</SectionTitle>
                <Paragraph>Il trattamento dei dati è effettuato:</Paragraph>
                <List>
                    <li>
                        per rispondere a una richiesta dell&apos;utente e,
                        quando applicabile, per adottare misure precontrattuali
                        richieste dall&apos;interessato;
                    </li>
                    <li>
                        per il legittimo interesse del titolare a gestire le
                        richieste ricevute e proteggere il sito da abusi o
                        utilizzi impropri;
                    </li>
                    <li>
                        sulla base del consenso dell&apos;utente, esclusivamente
                        quando richiesto per finalità ulteriori, come
                        l&apos;invio di newsletter o comunicazioni marketing.
                    </li>
                </List>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>5. Conferimento dei dati</SectionTitle>
                <Paragraph>
                    Il conferimento di nome, cognome, indirizzo e-mail e
                    messaggio è necessario per poter inviare e gestire la
                    richiesta di contatto.
                </Paragraph>
                <Paragraph>
                    Il mancato conferimento di tali dati potrebbe rendere
                    impossibile rispondere alla richiesta.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>6. Modalità del trattamento</SectionTitle>
                <Paragraph>
                    I dati inviati tramite il modulo di contatto non sono
                    registrati in un database del sito. Essi vengono trasmessi
                    tramite posta elettronica alla casella di contatto del
                    Titolare e trattati esclusivamente per rispondere alla
                    richiesta dell&apos;utente, fornire informazioni o avviare
                    eventuali rapporti precontrattuali.
                </Paragraph>
                <Paragraph>
                    Il trattamento avviene con strumenti informatici e
                    telematici, adottando misure organizzative e tecniche
                    adeguate per proteggere i dati da accessi non autorizzati,
                    perdita, alterazione o divulgazione.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>7. Destinatari dei dati</SectionTitle>
                <Paragraph>
                    I dati personali possono essere trattati dai seguenti
                    soggetti:
                </Paragraph>
                <List>
                    <li>
                        <strong>Maksim Leali</strong> (titolare del trattamento)
                        — gestione diretta delle richieste di contatto;
                    </li>
                    <li>
                        <strong>DigitalOcean, LLC</strong> — provider di hosting
                        sul quale è ospitato il sito web.
                    </li>
                </List>
                <Paragraph>
                    Tali soggetti trattano i dati, quando necessario, in qualità
                    di responsabili del trattamento o soggetti autorizzati.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    8. Trasferimento dei dati al di fuori dello Spazio Economico
                    Europeo
                </SectionTitle>
                <Paragraph>
                    I dati personali raccolti tramite il sito sono ospitati su
                    infrastrutture DigitalOcean situate nello Spazio Economico
                    Europeo. DigitalOcean agisce quale fornitore di hosting.
                    Eventuali accessi o trasferimenti verso Paesi terzi connessi
                    all&apos;erogazione del servizio da parte del fornitore
                    avvengono nel rispetto delle garanzie previste dagli artt.
                    44 e seguenti del GDPR.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>9. Periodo di conservazione</SectionTitle>
                <Paragraph>
                    I messaggi ricevuti tramite il modulo di contatto sono
                    conservati nella casella email del Titolare per il tempo
                    necessario alla gestione della richiesta e, in ogni caso,
                    non oltre <strong>12 mesi</strong> dalla ricezione, salvo
                    eventuale necessità di ulteriore conservazione per obblighi
                    di legge o per la tutela di diritti del Titolare.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>10. Diritti dell&apos;interessato</SectionTitle>
                <Paragraph>
                    L&apos;utente può esercitare i diritti previsti dagli
                    articoli 15-22 del Regolamento UE 2016/679, tra cui:
                </Paragraph>
                <List>
                    <li>
                        ottenere conferma dell&apos;esistenza dei propri dati
                        personali;
                    </li>
                    <li>
                        richiedere accesso, rettifica o cancellazione dei dati;
                    </li>
                    <li>chiedere la limitazione del trattamento;</li>
                    <li>opporsi al trattamento, nei casi previsti;</li>
                    <li>richiedere la portabilità dei dati;</li>
                    <li>
                        revocare il consenso in qualsiasi momento, quando il
                        trattamento si basa sul consenso.
                    </li>
                </List>
                <Paragraph>
                    Per esercitare questi diritti, l&apos;utente può contattare
                    il titolare all&apos;indirizzo:{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
                <Paragraph>
                    L&apos;utente ha inoltre il diritto di proporre reclamo al
                    Garante per la protezione dei dati personali.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>11. Decisioni automatizzate</SectionTitle>
                <Paragraph>
                    I dati personali non sono utilizzati per processi
                    decisionali automatizzati né per attività di profilazione.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    12. Modifiche alla presente informativa
                </SectionTitle>
                <Paragraph>
                    La presente informativa può essere aggiornata nel tempo.
                    Eventuali modifiche saranno pubblicate su questa pagina, con
                    indicazione della data dell&apos;ultimo aggiornamento.
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
