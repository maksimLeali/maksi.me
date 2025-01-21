"use client"

import { $uw, $cssTRBL, $color } from '@theme'
import { ContactForm } from '@components'

import styled from 'styled-components'

export default function Contcts() {


    return <Container>
        <Section>
            <h1 className='title'>Hai un idea?</h1>
            <h3>Parliamone!</h3>
            <p>
                Realizzare la tua idea è più semplice di quanto pensi: oggi hai l'opportunità di trasformarla in realtà attraverso un 
                <strong>sito web</strong>. Che sia un <strong>e-commerce</strong> per vendere i tuoi prodotti, una <strong>vetrina</strong> 
                per mostrare i tuoi servizi, un <strong>sito di presentazione</strong> per raccontare la tua storia, o 
                un'<strong>applicazione web</strong> innovativa, il web è la porta d'accesso per raggiungere il tuo pubblico e far crescere il tuo progetto. 
                Con il giusto <strong>strumento</strong> e una visione chiara, puoi dare vita a qualcosa di <strong>unico</strong> e <strong>memorabile</strong>. 
                Non lasciare che l'idea rimanga nella tua mente: inizia a costruire il tuo <strong>spazio online</strong> e scopri il 
                potenziale <strong>illimitato</strong> che solo il digitale può offrirti.
            </p>
        </Section>
        <ContactForm width={$uw(35)} />
    </Container>
}


const Container = styled.div`
    width: 100%;
    padding: ${$cssTRBL(1)};
`

const Section = styled.section`
    width: 100%;
    margin-bottom:${$uw(2)};
    > p > strong{
        color: ${$color('secondary light')};
    }
    
`
