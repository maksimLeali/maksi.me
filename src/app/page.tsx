"use client"

import { $breakPoint, $color, $cssTRBL, $uw } from "@/theme"
import styled from "styled-components"
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { useEffect, useState } from "react";


export default function Main() {

  const [rotate, setRotate] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setRotate(true)
    }, 1000)
  }, [])

  return <Container>
    <MainSection className={`${rotate ? 'rotate' : ''}`}>
      {[...Array(15).keys()].map((i) => (

        <Row className={`${i%2==0 ? 'odd' : ''}`}>
          {[...Array(25).keys()].map(() => 
            <HexaContainer><Hexagone delay={Math.floor(Math.random() * 10) + 1} /></HexaContainer>
          )}
        </Row>
      ))
      }
    </MainSection>
    <Section>
      <Presentation>
        <div>

          <h1 className="title">Mi presento</h1>
          <p>Mi chiamo <b>Maksim Leali</b> e sono uno sviluppatore web da ormai <b>8 anni</b></p>
          <p>Sono specializzato nella realizzazione di <b>siti di presentazione</b>, curati nei dettagli per rappresentare al meglio brand e persone.</p>
          <p>Ho inoltre sviluppato progetti originali, come siti per <b>giochi tra amici</b>, pagine dedicate a <b>coppie</b>, e piattaforme per <b>piccole realtà locali</b>,
            sempre con un <b>approccio su misura</b> e <b>orientato alle esigenze del cliente.</b></p>
        </div>
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
            <p>Whatsapp: <a href="https://wa.me/+393461038526" target="_blank">3461038526 <IoLogoWhatsapp style={{ marginLeft: "5px" }} /></a></p>
            <p>Telegram: <a href="https://t.me/+393461038526" target="_blank">3461038526 <BsTelegram style={{ marginLeft: "5px" }} /></a></p>
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
  ${$breakPoint(590)}{
    flex-direction: column-reverse;
  }
  ${$breakPoint(590)}{
    margin-bottom: ${$uw(6)};
  }
`

const Presentation = styled.div`
  width: ${$uw(22)}; 
  text-align: justify;
  ${$breakPoint(1024)}{
    width: ${$uw(22)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(26)};
    padding-right:${$uw(1)};
  }
  ${$breakPoint(820)}{
    width: 100%;
    padding-right:0;
    display: flex;
    flex-direction: column;
  }
  ${$breakPoint(590)}{
    flex-direction: column-reverse;
    
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap:${$uw(2)};  
  ${$breakPoint(820)}{
    flex-direction: column;
    gap:${$uw(4)};  
  }
  ${$breakPoint(500)}{
    margin-top: ${$uw(4)};
    gap:${$uw(6)};  
  }
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

  ${$breakPoint(820)}{
    width: 100%;
  }

`


const ImageWrapper = styled.div`
  width: ${$uw(30)};
  height: calc(100dvh - ${$uw(5)});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  


  ${$breakPoint(820)}{
    width: ${$uw(26)};
    padding-left:${$uw(1)};
  }
  ${$breakPoint(590)}{
      width: 100%;
      height:unset;
      padding-left:0;
    }
  

    .ph {
    position: relative;
    z-index:2;
    width: ${$uw(15)};
    height: ${$uw(20)};
    background-color: ${$color('glass-dark')};
    ${$breakPoint(1024)}{
      width:${$uw(20)};
      height:${$uw(34)};
    }
    ${$breakPoint(820)}{
      width: ${$uw(25)};
    }   
    ${$breakPoint(590)}{
      width: ${$uw(22)};
    }   
    ${$breakPoint(500)}{
      width: ${$uw(40)};
      height: calc(60dvh - ${$uw(5)});
    }   
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
  
    ${$breakPoint(930)}{
     
     height: ${$uw(40)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(26)};
  }
  ${$breakPoint(590)}{
    width:100%;
    flex-direction: row-reverse;
  }
  ${$breakPoint(500)}{
    flex-direction: column;
    height: unset;
    overflow: hidden;
    
  }
  &::before, &::after {
      display:block;
      content: "";
      position: absolute;
      z-index:1;
      width: ${$uw(20)};
      aspect-ratio: 1;
      animation: changeradius 20s ease-in-out infinite;
      background-color: ${$color('tertiary')};
      ${$breakPoint(820)}{
        width:${$uw(24)};
        animation: changeradiusMid 20s ease-in-out infinite;
      }
      ${$breakPoint(590)}{
        margin-left: 50%;
      }
      ${$breakPoint(500)}{
        margin-left: 0;
        width:${$uw(46)};
        animation: changeradiusMin 20s ease-in-out infinite;
      }
      
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
 
  box-shadow: ${$uw(.2)} ${$uw(.2)} ${$color('secondary-dark')};
  
  ${$breakPoint(1024)}{
    width:${$uw(20)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(25)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(25)};
  }
  ${$breakPoint(500)}{
    width: 100%;
    box-shadow: ${$uw(.4)} ${$uw(.4)} ${$color('secondary-dark')};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  h3 {
    margin-bottom:${$uw(.5)};
    ${$breakPoint(500)}{
      margin-bottom:${$uw(2)};
      
    }
  }
  p {
    margin-bottom:${$uw(.2)};
    &:last-child{
      margin-bottom: 0;
    }
    ${$breakPoint(500)}{
      margin-bottom:${$uw(1)};

    }
  }

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
    box-shadow:  ${$uw(.2)} ${$uw(.2)} ${$color('secondary-shade')};
  ${$breakPoint(590)}{
    width: ${$uw(22)};
    position: relative;
    margin-left: auto;
    margin-right: ${$uw(1.5)};
    top: ${$uw(-4)}
  }
  ${$breakPoint(500)}{
    width:100%;;
    padding:${$uw(2)};
    z-index: 2;
    top: ${$uw(-1)};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow:  ${$uw(.4)} ${$uw(.4)} ${$color('secondary-shade')};
    margin-bottom: ${$uw(6)};
  }
  
`

const MainSection = styled.section`
  width: 110vw;
  left:0;
  position:fixed;
  top:-5dvh;
  z-index: 999;
  animation-fill-mode: forwards;
  &.rotate {
    animation: mainRotation 3s linear;
    animation-fill-mode: forwards; 
  }
`

const Row = styled.div`
  height: calc(100dvh/10);
  width: 110vw;
  display: flex;
  margin-bottom: calc((100dvh/10/4)*-1);
  &.odd{
    margin-left: calc(-100dvh/20)
  }
`

const HexaContainer = styled.div`
  height: 100%;
  aspect-ratio:1;
  display: flex;
  margin-left: -1vw;
  justify-content:center;
  align-items: center;
`

const Hexagone = styled.div<{delay: number}>`
  height: 101%;
  max-height: 101%;
  width:101%;
  max-width: 101%;
  transform-origin: center;
  background-color: ${$color('primary')};
  
  
  clip-path: polygon(
      50% 0%, 
      100% 25%, 
      100% 75%, 
      50% 100%, 
      0% 75%, 
      0% 25%
  );
  .rotate &{
    animation: hexaShrink .5s ease-out,
    hexaFullShrink  1s ease-in ${({delay})=> delay/10}s;
    animation-fill-mode: forwards; 
    
    
  }

`