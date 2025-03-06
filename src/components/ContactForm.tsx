"use client"

import { TextInput, TextAreaInput, CTA, Checkbox } from '@components';
import { $uw, $breakPoint } from '@theme'
import { FormProvider, useForm } from 'react-hook-form'
import { RiMailSendLine } from 'react-icons/ri';
import styled from 'styled-components'

type props ={
    width: string
}

const ContactForm :React.FC<props>=({
    width= "100%"
}) =>{

    const methods = useForm({
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;
    return (
        <FormProvider {...methods}>
            <Form $width={width} onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <TextInput id="contactName" ntTextLabel="Nome e cognome" name="nome" />
                <TextInput id="contactEmail" ntTextLabel="E-Mail" name="email" />
                <TextAreaInput ntTextLabel='Descrivi la tua idea' name="pippo" />
                <Checkbox id="contactPrivacy" name="privacy" ntTextLabel='Ho letto la normativa per la privacy' />
                <CTA type='submit' text='INVIA' iconAfter={<RiMailSendLine />  } />
            </Form>
        </FormProvider>)

}

export {ContactForm};


const Form = styled.form<{$width:string}>`
    width: ${({$width})=> $width};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    #contactName, #contactEmail {
        width: calc(50% - ${$uw(1)});
        ${$breakPoint(820)}{
            width:100%;
        }

    }
    #contactPrivacy{
        width: 100%;
    }

    ${$breakPoint(820)}{
        width:100%;
        flex-direction: column;           
    }   
`