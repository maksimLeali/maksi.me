import { ContactForm } from "@components"
import { $breakPoint, $cssTRBL, $uw } from "@theme"
import styled from "styled-components"


export const ContactSection = () => {

    return <Section id="contact">
        <h2>Aiutami a realizzare la tua idea</h2>
        <p>Che sia una semplice vetrina per i tuoi servizi, un'ecoomerce , un gioco da fare con amici o un'applicazione per tenere controllati i tuoi animali.
            Le <strong>tue esigenze</strong> saranno la <strong>mia priorità</strong>
        </p>

        <ContactForm width={$uw(33)} />

    </Section>
}


const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  align-items: center;
  flex-direction: column;
  gap:${$uw(1)};
  align-items: flex-start;
  
  > p {
    margin-bottom: ${$uw(1)};
    width:${$uw(33)};
    text-align: justify;
    ${$breakPoint(820)}{
      width:100%;
    }
  }


  ${$breakPoint(590)}{
    margin-bottom: ${$uw(6)};
    
  }   
`