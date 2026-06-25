"use client";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";

export default function PrivacyPolicy() {
    return (
        <Container>
            <Header>
                <Title>Informativa Privacy</Title>
                <LastUpdate>Ultimo aggiornamento: 25/06/2026</LastUpdate>
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
                <SectionTitle>2. Dati personali trattati</SectionTitle>

                <SubSectionTitle>
                    Dati forniti tramite il modulo di contatto
                </SubSectionTitle>
                <Paragraph>
                    Attraverso il modulo di contatto presente sul sito possono
                    essere trattati i seguenti dati:
                </Paragraph>
                <List>
                    <li>nome;</li>
                    <li>indirizzo e-mail;</li>
                    <li>
                        azienda o progetto, se inserito dall&apos;utente;
                    </li>
                    <li>
                        indicazioni sulla richiesta o sul servizio di interesse;
                    </li>
                    <li>contenuto del messaggio;</li>
                    <li>
                        eventuali ulteriori dati che l&apos;utente decide
                        spontaneamente di comunicare.
                    </li>
                </List>
                <Paragraph>
                    Si invita l&apos;utente a non inserire nel modulo dati
                    personali non necessari, categorie particolari di dati
                    personali o informazioni riservate.
                </Paragraph>

                <SubSectionTitle>
                    Dati di navigazione e statistiche
                </SubSectionTitle>
                <Paragraph>
                    Il sito utilizza Umami, un sistema di analisi statistica
                    self-hosted e gestito dal Titolare tramite
                    l&apos;infrastruttura analytics.lemaks.it.
                </Paragraph>
                <Paragraph>
                    Umami è utilizzato esclusivamente per comprendere in forma
                    statistica e aggregata come viene utilizzato il sito. Possono
                    essere trattati dati tecnici e di navigazione quali:
                </Paragraph>
                <List>
                    <li>
                        pagina visitata, titolo della pagina e dominio di
                        provenienza;
                    </li>
                    <li>
                        tipo di browser, sistema operativo, tipo di dispositivo,
                        lingua e risoluzione dello schermo;
                    </li>
                    <li>informazioni geografiche approssimative;</li>
                    <li>data e ora della visita.</li>
                </List>
                <Paragraph>
                    Il tracker è configurato per non raccogliere parametri di
                    ricerca e frammenti degli URL. L&apos;indirizzo IP può essere
                    utilizzato temporaneamente dal sistema per ricavare
                    informazioni statistiche geografiche, ma non viene
                    memorizzato da Umami.
                </Paragraph>
                <Paragraph>
                    Il sito non utilizza cookie di profilazione, cookie
                    pubblicitari, strumenti di remarketing o tecnologie destinate
                    a seguire l&apos;utente tra siti diversi.
                </Paragraph>

                <SubSectionTitle>Log tecnici</SubSectionTitle>
                <Paragraph>
                    Per ragioni di sicurezza, manutenzione e prevenzione di
                    abusi, il server può registrare dati tecnici quali indirizzo
                    IP, data e ora della richiesta, risorsa richiesta, codice di
                    risposta e informazioni del browser.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>3. Finalità del trattamento</SectionTitle>
                <Paragraph>
                    I dati personali sono trattati per:
                </Paragraph>
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
                        gestire richieste di informazioni, collaborazioni o
                        preventivi;
                    </li>
                    <li>
                        garantire sicurezza, manutenzione e corretto
                        funzionamento del sito;
                    </li>
                    <li>
                        produrre statistiche aggregate sull&apos;utilizzo del
                        sito e migliorarne contenuti, struttura e prestazioni;
                    </li>
                    <li>
                        tutelare i diritti del Titolare in caso di abusi,
                        violazioni o contestazioni.
                    </li>
                </List>
                <Paragraph>
                    I dati non sono utilizzati per newsletter, comunicazioni
                    commerciali, profilazione o marketing diretto senza uno
                    specifico consenso dell&apos;utente.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>4. Base giuridica del trattamento</SectionTitle>
                <Paragraph>Il trattamento dei dati avviene:</Paragraph>
                <List>
                    <li>
                        per l&apos;esecuzione di misure precontrattuali adottate
                        su richiesta dell&apos;interessato, quando l&apos;utente
                        richiede informazioni, un contatto o un preventivo;
                    </li>
                    <li>
                        per il legittimo interesse del Titolare a garantire la
                        sicurezza del sito, prevenire abusi e analizzare in modo
                        aggregato il suo utilizzo;
                    </li>
                    <li>
                        sulla base del consenso dell&apos;utente,
                        esclusivamente quando richiesto per finalità ulteriori
                        non necessarie, quali eventuali future comunicazioni
                        marketing.
                    </li>
                </List>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>5. Conferimento dei dati</SectionTitle>
                <Paragraph>
                    Il conferimento dei dati contrassegnati come obbligatori nel
                    modulo di contatto è necessario per inviare e gestire la
                    richiesta.
                </Paragraph>
                <Paragraph>
                    Il mancato conferimento può rendere impossibile rispondere
                    all&apos;utente.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>6. Modalità del trattamento</SectionTitle>
                <Paragraph>
                    I dati inviati tramite il modulo di contatto non vengono
                    registrati in un database del sito. Sono trasmessi tramite
                    posta elettronica alla casella di contatto del Titolare e
                    utilizzati esclusivamente per gestire la richiesta
                    dell&apos;utente.
                </Paragraph>
                <Paragraph>
                    Le statistiche di navigazione vengono memorizzate in un
                    database separato utilizzato esclusivamente dal sistema
                    Umami self-hosted.
                </Paragraph>
                <Paragraph>
                    Il trattamento avviene mediante strumenti informatici e
                    telematici, adottando misure tecniche e organizzative
                    adeguate per prevenire accessi non autorizzati, perdita,
                    alterazione o divulgazione dei dati.
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
                        Maksim Leali, in qualità di Titolare del trattamento;
                    </li>
                    <li>
                        DigitalOcean, LLC, quale fornitore di infrastruttura
                        cloud e hosting per il sito e per il sistema di analisi
                        statistica self-hosted;
                    </li>
                    <li>
                        fornitore del servizio di posta elettronica e/o invio
                        dei messaggi generati dal modulo di contatto;
                    </li>
                    <li>
                        eventuali soggetti autorizzati dal Titolare o fornitori
                        tecnici strettamente necessari alla gestione, sicurezza
                        e manutenzione del sito.
                    </li>
                </List>
                <Paragraph>
                    I dati non vengono ceduti, venduti o comunicati a soggetti
                    terzi per finalità pubblicitarie o di marketing.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    8. Trasferimenti al di fuori dello Spazio Economico Europeo
                </SectionTitle>
                <Paragraph>
                    Il sito e il sistema di analisi Umami sono ospitati su
                    infrastrutture DigitalOcean situate nello Spazio Economico
                    Europeo.
                </Paragraph>
                <Paragraph>
                    Qualora, per esigenze tecniche connesse all&apos;erogazione
                    dei servizi da parte dei fornitori indicati, si rendesse
                    necessario un trasferimento verso Paesi al di fuori dello
                    Spazio Economico Europeo, il trasferimento avverrà nel
                    rispetto delle garanzie previste dagli articoli 44 e
                    seguenti del Regolamento UE 2016/679.
                </Paragraph>
                <Paragraph>
                    Informazioni sulle garanzie applicate possono essere
                    richieste contattando il Titolare.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>9. Periodo di conservazione</SectionTitle>
                <Paragraph>
                    I messaggi ricevuti tramite il modulo di contatto sono
                    conservati per il tempo necessario a gestire la richiesta e,
                    in ogni caso, non oltre <strong>12 mesi</strong> dalla
                    ricezione, salvo necessità di ulteriore conservazione per
                    obblighi di legge o tutela di diritti del Titolare.
                </Paragraph>
                <Paragraph>
                    I dati statistici raccolti tramite Umami sono conservati per
                    un periodo massimo di <strong>12 mesi</strong> e
                    successivamente cancellati o anonimizzati.
                </Paragraph>
                <Paragraph>
                    I log tecnici del server sono conservati per il tempo
                    strettamente necessario alle finalità di sicurezza e
                    manutenzione e, di norma, non oltre{" "}
                    <strong>30 giorni</strong>, salvo necessità di ulteriore
                    conservazione in caso di incidenti di sicurezza o richieste
                    dell&apos;autorità competente.
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
                    <li>
                        richiedere la portabilità dei dati, quando applicabile;
                    </li>
                    <li>
                        revocare il consenso in qualsiasi momento, quando il
                        trattamento si basa sul consenso.
                    </li>
                </List>
                <Paragraph>
                    Per esercitare i propri diritti, l&apos;utente può
                    contattare il Titolare all&apos;indirizzo:{" "}
                    <a href="mailto:contact@lemaks.it">contact@lemaks.it</a>.
                </Paragraph>
                <Paragraph>
                    L&apos;utente ha inoltre il diritto di proporre reclamo al
                    Garante per la protezione dei dati personali.
                </Paragraph>
            </Section>

            <Divider />

            <Section>
                <SectionTitle>
                    11. Decisioni automatizzate e profilazione
                </SectionTitle>
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
