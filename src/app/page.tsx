"use client"

import { $color, $cssTRBL, $uw } from "@/theme"
import styled from "styled-components"

export default function Main() {
  return <Container>
    <Presentation>
      <InfoWrapper>
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
        <Info>
          <h3>Flessibilità e Personalizzazione</h3>
          <p>Uno sviluppatore web freelance offre una maggiore flessibilità e personalizzazione rispetto
             a chi lavora per un'azienda. Può adattarsi meglio alle esigenze specifiche dei clienti, 
             dedicando tempo e attenzione personalizzata a ogni progetto. Inoltre, ha la libertà 
             di sperimentare soluzioni innovative, offrendo design su misura, funzionalità uniche e un 
             approccio più diretto e collaborativo, senza vincoli imposti da politiche aziendali 
             o modelli standardizzati.  </p>
        </Info>
      </InfoWrapper>
      <ImageWrapper>
        <ImageContainer></ImageContainer>
        <CTA type="button">
          CONTATTAMI
        </CTA>
      </ImageWrapper>
    </Presentation>
  </Container >
}



const Container = styled.div`
  width: 100%;
`

const Presentation = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  align-items: center;
`


const InfoWrapper = styled.div`
  width: ${$uw(18)}; 
  display: flex;
  flex-direction: column;
  gap:${$uw(2)};
`

const Info = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  background-color: ${$color('primary')};
  padding: ${$uw(1)};
`

const ImageWrapper = styled.div`
  width: ${$uw(30)};
  height: ${$uw(30)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const ImageContainer = styled.div`
  width: ${$uw(30)};
  height: ${$uw(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    &::before {
      display:block;
      content: "";
      position: absolute;
      width: ${$uw(20)};
      aspect-ratio: 1;
      animation: changeradius 20s ease-in-out infinite;
      background-color: ${$color('tertiary')};
    }
`

const CTA = styled.button`
    width: ${$uw(10)};
    padding: ${$cssTRBL(1,0)};
    background-color: ${$color('secondary')};
    border-radius: 4px;
    border: none;
    
`