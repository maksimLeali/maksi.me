import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
    console.log("[contact] POST ricevuto");
    try {
        const body = await request.json();
        console.log("[contact] body:", body);
        const { nome, cognome, email, azienda, messaggio, website } = body;

        // Honeypot: se "website" è compilato è quasi certamente un bot
        if (website) {
            console.log("[contact] honeypot attivato, richiesta ignorata");
            return NextResponse.json({ ok: true });
        }

        if (!nome || !email || !messaggio) {
            console.log("[contact] validazione fallita — campi mancanti:", { nome, email, messaggio });
            return NextResponse.json(
                { error: "Compila tutti i campi obbligatori." },
                { status: 400 }
            );
        }

        // Validazione email di base
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("[contact] email non valida:", email);
            return NextResponse.json(
                { error: "Indirizzo email non valido." },
                { status: 400 }
            );
        }

        console.log("[contact] configurazione SMTP:", {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            to: process.env.CONTACT_TO,
        });

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 465),
            secure: process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        console.log("[contact] verifica connessione SMTP...");
        await transporter.verify();
        console.log("[contact] connessione SMTP OK");

        const textBody = [
            nome ? `Nome: ${nome}` : null,
            cognome ? `Cognome: ${cognome}` : null,
            `Email: ${email}`,
            azienda ? `Azienda / Progetto: ${azienda}` : null,
            `\nMessaggio:\n${messaggio}`,
        ]
            .filter(Boolean)
            .join("\n");

        console.log("[contact] invio mail a:", process.env.CONTACT_TO);
        const info = await transporter.sendMail({
            from: `"Modulo contatti makso.me" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO,
            replyTo: email,
            subject: `Nuovo contatto da ${nome}`,
            text: textBody,
        });
        console.log("[contact] mail inviata, messageId:", info.messageId);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[contact] errore:", err);
        return NextResponse.json(
            { error: "Invio non riuscito. Riprova più tardi." },
            { status: 500 }
        );
    }
}
