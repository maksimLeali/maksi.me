"use client"

import { TextInput, TextAreaInput } from '@/components';
import { $uw, $cssTRBL } from '@/theme'
import { FormProvider, useForm } from 'react-hook-form'
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
    }
`