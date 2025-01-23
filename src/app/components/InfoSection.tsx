import styled from "styled-components"
import { InfoItem } from "./InfoItem"
import { $breakPoint, $cssTRBL, $uw } from "@theme"

export const InfoSection = () => {
    return (
        <Section >
            <h1 className="title">I miei cardini</h1>
            <InfoWrapper>
                <InfoItem
                    title="Flessibilità e Personalizzazione"
                    desc="Uno sviluppatore web freelance offre una maggiore flessibilità e personalizzazione rispetto
                a chi lavora per un'azienda. Può adattarsi meglio alle esigenze specifiche dei clienti,
                dedicando tempo e attenzione personalizzata a ogni progetto. Inoltre, ha la libertà
                di sperimentare soluzioni innovative, offrendo design su misura, funzionalità uniche e un
                approccio più diretto e collaborativo, senza vincoli imposti da politiche aziendali
                o modelli standardizzati"
                />
                <InfoItem
                    title="SEO"
                    desc="Il SEO (Search Engine Optimization) è l'insieme di tecniche e strategie utilizzate
              per ottimizzare una pagina web al fine di migliorarne il posizionamento nei risultati
              dei motori di ricerca, come Google. L'obiettivo principale del SEO è aumentare
              la visibilità organica (non a pagamento) di un sito web, attirando più traffico qualificato e
              pertinente"
                />
                <InfoItem
                    title="Responsive Design"
                    desc="Il responsive design è un approccio alla progettazione dei siti web che consente alle pagine di
              adattarsi automaticamente a diversi dispositivi e dimensioni dello schermo, come smartphone, tablet,
              laptop e desktop. Utilizza tecnologie come griglie fluide, media queries CSS e immagini scalabili
              per garantire un'esperienza utente ottimale indipendentemente dal dispositivo utilizzato"
                />
            </InfoWrapper>
        </Section>
    )
}


const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  align-items: center;

  flex-direction: column;
  gap:${$uw(1)};
  margin-bottom: ${$uw(2)};
  
  ${$breakPoint(590)}{
    margin-bottom: ${$uw(6)};
    
    h1{
        text-align: center;
        /* margin-bottom: ${$uw(2)}; */
    }
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

