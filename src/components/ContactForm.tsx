"use client";

import { TextInput, TextAreaInput, CTA, Checkbox } from "@components";
import { $uw, $breakPoint, $color } from "@theme";
import { FormProvider, useForm } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
import styled from "styled-components";

type props = {
    width: string;
};

const ContactForm: React.FC<props> = ({ width = "100%" }) => {
    const methods = useForm({
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;
    return (
        <FormProvider {...methods}>
            <Form
                $width={width}
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
            >
                <TextInput
                    id="contactName"
                    ntTextLabel="Nome"
                    name="nome"
                    focusColor="tertiary"
                />
                <TextInput
                    id="contactEmail"
                    ntTextLabel="Email"
                    name="email"
                    inputMode="email"
                    focusColor="tertiary"
                />
                <TextInput
                    id="contactProject"
                    ntTextLabel="Azienda o progetto"
                    name="progetto"
                    focusColor="tertiary"
                />
                <TextInput
                    id="contactNeed"
                    ntTextLabel="Di cosa hai bisogno?"
                    name="bisogno"
                    focusColor="tertiary"
                />
                <TextAreaInput ntTextLabel="Messaggio" name="messaggio" />
                <Checkbox
                    id="contactPrivacy"
                    name="privacy"
                    ntTextLabel="Ho letto la normativa per la privacy"
                />
                <CTA
                    className="send-cta"
                    type="submit"
                    color="secondary-light"
                    text="INVIA IL MESSAGGIO"
                    iconAfter={<RiMailSendLine />}
                />
            </Form>
        </FormProvider>
    );
};

export { ContactForm };

const Form = styled.form<{ $width: string }>`
    width: ${({ $width }) => $width};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    #contactName,
    #contactEmail {
        width: calc(50% - ${$uw(1)});
        ${$breakPoint(820)} {
            width: 100%;
        }
    }
    #contactProject,
    #contactNeed {
        width: 100%;
    }
    #contactPrivacy {
        width: 100%;
    }

    .send-cta {
        transition:
            background-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
    }
    .send-cta:hover {
        background-color: ${$color("tertiary")};
        color: ${$color("black-dark")};
        transform: translateY(-2px);
    }
    .send-cta svg {
        transition: transform 0.2s ease;
    }
    .send-cta:hover svg {
        transform: translateX(4px);
    }

    ${$breakPoint(820)} {
        width: 100%;
        flex-direction: column;
    }
`;
