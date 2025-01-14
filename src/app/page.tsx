"use client"

import { $color, $cssTRBL, $uw } from "@/theme"
import styled from "styled-components"
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";


export default function Main() {
  return <Container>
    <Section>
      <Presentation>

        <h1 className="title">Mi presento</h1>
        <p>Mi chiamo <b>Maksim Leali</b> e sono uno sviluppatore web da ormai <b>8 anni</b></p>
        <p>Sono specializzato nella realizzazione di <b>siti di presentazione</b>, curati nei dettagli per rappresentare al meglio brand e persone.</p>
        <p>Ho inoltre sviluppato progetti originali, come siti per <b>giochi tra amici</b>, pagine dedicate a <b>coppie</b>, e piattaforme per <b>piccole realtà locali</b>,
          sempre con un <b>approccio su misura</b> e <b>orientato alle esigenze del cliente.</b></p>
        <CTA type="button">
          FAMMI UNA PROPOSTA
          <RiMailSendLine />
        </CTA>
      </Presentation>

      <ImageWrapper>
        <ImageContainer>
          <div className="ph" />
        <ContactBox>
          <h3>Come contattarmi</h3>
          <p>Telefono personale: <a target="_blank" href="tel:+393461038526" >+39 3461038526</a></p>
          <p>E-Mail: <a href="mailto:contact@makso.ne">contacts@makso.me</a></p>
          <p>Whatsapp: <a href="https://wa.me/+393461038526" target="_blank">3461038526 <IoLogoWhatsapp style={{marginLeft: "5px"}}/></a></p>
          <p>Telegram: <a href="https://t.me/+393461038526" target="_blank">3461038526 <BsTelegram style={{marginLeft: "5px"}}/></a></p>
        </ContactBox>
        </ImageContainer>
      </ImageWrapper>
    </Section>
    <Section className="vertical">
      <h1 className="title">Cardini dello sviluppo di un sito</h1>
      <InfoWrapper>
        <Info>
          <h3>Flessibilità e Personalizzazione</h3>
          <p>Uno sviluppatore web freelance offre una maggiore flessibilità e personalizzazione rispetto
            a chi lavora per un'azienda. Può adattarsi meglio alle esigenze specifiche dei clienti,
            dedicando tempo e attenzione personalizzata a ogni progetto. Inoltre, ha la libertà
            di sperimentare soluzioni innovative, offrendo design su misura, funzionalità uniche e un
            approccio più diretto e collaborativo, senza vincoli imposti da politiche aziendali
            o modelli standardizzati.  </p>
        </Info>
        <Info>
          <h3>SEO</h3>
          <p>Il SEO (Search Engine Optimization) è l'insieme di tecniche e strategie utilizzate
            per ottimizzare una pagina web al fine di migliorarne il posizionamento nei risultati
            dei motori di ricerca, come Google. L'obiettivo principale del SEO è aumentare
            la visibilità organica (non a pagamento) di un sito web, attirando più traffico qualificato e
            pertinente. </p>
        </Info>
        <Info>
          <h3>Responsive Design</h3>
          <p>Il responsive design è un approccio alla progettazione dei siti web che consente alle pagine di
            adattarsi automaticamente a diversi dispositivi e dimensioni dello schermo, come smartphone, tablet,
            laptop e desktop. Utilizza tecnologie come griglie fluide, media queries CSS e immagini scalabili
            per garantire un'esperienza utente ottimale indipendentemente dal dispositivo utilizzato.  </p>
        </Info>

      </InfoWrapper>
    </Section>
  </Container >
}



const Container = styled.div`
  width: 100%;
  padding-bottom:${$uw(2)};
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  align-items: center;
  &.vertical{
    flex-direction: column;
    gap:${$uw(1)};
  }
`

const Presentation = styled.div`
  width: ${$uw(18)}; 
  text-align: justify;
  
`

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap:${$uw(2)};  
`

const Info = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: ${$color('primary')};
  padding: ${$uw(1)};
  position: relative;
  &::after{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: ${$uw(.2)};
    left: ${$uw(.2)};
    content: "";
    border-radius:4px;
    background-color: ${$color('primary-dark')};
  }
`


const ImageWrapper = styled.div`
  width: ${$uw(30)};
  height: calc(100dvh - ${$uw(5)});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .ph {
    position: relative;
    z-index:2;
    width: ${$uw(15)};
    height: ${$uw(20)};
    background-color: ${$color('glass-dark')};
  }
`


const ImageContainer = styled.div`
  width: ${$uw(30)};
  height: ${$uw(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
    &::before, &::after {
      display:block;
      content: "";
      position: absolute;
      z-index:1;
      width: ${$uw(20)};
      aspect-ratio: 1;
      animation: changeradius 20s ease-in-out infinite;
      background-color: ${$color('tertiary')};
    }
    &::before {
      animation-delay: 1s;
      background-color: ${$color('tertiary-shade')};
      transform: rotate(90deg);
    }
`

const ContactBox = styled.div`
  width:${$uw(15)};
  position: relative;
  z-index: 2;
  padding: ${$cssTRBL(1)};
  background-color: ${$color('secondary')};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom:${$uw(.5)};
  }
  p {
    margin-bottom:${$uw(.2)};
  }
  box-shadow: ${$uw(.2)} ${$uw(.2)} ${$color('secondary-dark')};;
`

const CTA = styled.button`
    
    padding: ${$cssTRBL(.5, 1)};
    background-color: ${$color('secondary-light')};
    border-radius: 4px;
    border: none;
    display: flex;
    align-items : center;
    
    gap: ${$uw(1)};
    margin-top: ${$uw(1)};
    position: relative;
    cursor: pointer;
    &::after{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      top: ${$uw(.2)};
      left: ${$uw(.2)};
      content: "";
      border-radius:4px;
      background-color: ${$color('secondary-shade')};
  }
`