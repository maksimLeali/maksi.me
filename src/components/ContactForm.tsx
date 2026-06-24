"use client";

import { TextInput, TextAreaInput, CTA, Checkbox } from "@components";
import { $uw, $breakPoint, $color } from "@theme";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
import styled from "styled-components";

type props = {
    width: string;
};

const ContactForm: React.FC<props> = ({ width = "100%" }) => {
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
        "idle",
    );
    const [errorMsg, setErrorMsg] = useState("");

    const methods = useForm({ mode: "onSubmit" });
    const { handleSubmit, reset, register } = methods;

    const onSubmit = async (data: Record<string, string>) => {
        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: data.nome,
                    email: data.email,
                    progetto: data.progetto,
                    bisogno: data.bisogno,
                    messaggio: data.messaggio,
                    website: data.website, // honeypot
                }),
            });
            const json = await res.json();
            if (!res.ok) {
                setErrorMsg(json.error ?? "Errore sconosciuto.");
                setStatus("error");
            } else {
                setStatus("ok");
                reset();
            }
        } catch {
            setErrorMsg("Invio non riuscito. Controlla la connessione.");
            setStatus("error");
        }
    };

    if (status === "ok") {
        return (
            <SuccessMessage>
                ✓ Messaggio inviato. Ti risponderò al più presto.
            </SuccessMessage>
        );
    }

    return (
        <FormProvider {...methods}>
            <Form $width={width} onSubmit={handleSubmit(onSubmit)}>
                {/* Honeypot anti-spam: nascosto agli utenti reali */}
                <input
                    type="text"
                    {...register("website")}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />
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
                {status === "error" && <ErrorMessage>{errorMsg}</ErrorMessage>}
                <CTA
                    className="send-cta"
                    type="submit"
                    color="secondary-light"
                    text={
                        status === "sending"
                            ? "INVIO IN CORSO…"
                            : "INVIA IL MESSAGGIO"
                    }
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

const SuccessMessage = styled.p`
    font-family: "Space Mono", monospace;
    font-size: 1.6rem;
    color: ${$color("tertiary")};
    padding: ${$uw(1)} 0;
`;

const ErrorMessage = styled.p`
    width: 100%;
    font-size: 1.4rem;
    color: ${$color("secondary-light")};
    margin-bottom: ${$uw(0.5)};
`;
