"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import IT from "country-flag-icons/react/3x2/IT";
import GB from "country-flag-icons/react/3x2/GB";
import FR from "country-flag-icons/react/3x2/FR";
import ES from "country-flag-icons/react/3x2/ES";

import { $breakPoint, $color, $uw } from "@theme";
import { useOnClickOutside } from "@hooks";
import { SUPPORTED_LANGUAGES, SupportedLanguage } from "@i18n";

type LanguageOption = {
    code: SupportedLanguage;
    label: string;
    Flag: React.ComponentType<{ title?: string; className?: string }>;
};

const LANGUAGES: LanguageOption[] = [
    { code: "it", label: "IT-it", Flag: IT },
    { code: "en", label: "EN-en", Flag: GB },
    { code: "fr", label: "FR-fr", Flag: FR },
    { code: "es", label: "ES-es", Flag: ES },
];

const resolveLanguage = (raw?: string): LanguageOption => {
    const base = (raw?.split("-")[0] ?? "it") as SupportedLanguage;
    return (
        LANGUAGES.find((l) => l.code === base) ??
        LANGUAGES.find((l) => l.code === "it")!
    );
};

export const LanguageSelector: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(wrapperRef as React.RefObject<HTMLDivElement>, () => {
        if (open) setOpen(false);
    });

    // Ri-render alla cambio lingua (i18next.language è esterno a React)
    const [, force] = useState(0);
    useEffect(() => {
        const handler = () => force((n) => n + 1);
        i18n.on("languageChanged", handler);
        return () => {
            i18n.off("languageChanged", handler);
        };
    }, [i18n]);

    const current = resolveLanguage(i18n.language);

    const handleSelect = (code: SupportedLanguage) => {
        if (code !== current.code) {
            void i18n.changeLanguage(code);
        }
        setOpen(false);
    };

    return (
        <Wrapper ref={wrapperRef}>
            <Trigger
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t("language.selector")}
                onClick={() => setOpen((v) => !v)}
            >
                <FlagBox>
                    <current.Flag title={current.label} />
                </FlagBox>
                <Code>{current.label}</Code>
                <Chevron $open={open}>
                    <RiArrowDownSLine />
                </Chevron>
            </Trigger>
            <Menu role="listbox" $open={open}>
                {LANGUAGES.filter((opt) =>
                    (SUPPORTED_LANGUAGES as readonly string[]).includes(
                        opt.code,
                    ),
                ).map((opt) => (
                    <Option
                        key={opt.code}
                        type="button"
                        role="option"
                        aria-selected={opt.code === current.code}
                        $active={opt.code === current.code}
                        onClick={() => handleSelect(opt.code)}
                    >
                        <FlagBox>
                            <opt.Flag title={opt.label} />
                        </FlagBox>
                        <Code>{opt.label}</Code>
                    </Option>
                ))}
            </Menu>
        </Wrapper>
    );
};

export default LanguageSelector;

const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

const buttonReset = css`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
`;

const Trigger = styled.button`
    ${buttonReset};
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.5)};
    padding: ${$uw(0.4)} ${$uw(0.8)};
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background-color: rgba(0, 0, 0, 0.06);
        border-color: rgba(0, 0, 0, 0.25);
    }

    .scrolled & {
        border-color: rgba(255, 255, 255, 0.25);
    }

    .scrolled &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.45);
    }
`;

const FlagBox = styled.span`
    display: inline-flex;
    width: ${$uw(1.6)};
    aspect-ratio: 3 / 2;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
    ${$breakPoint(820)} {
        width: ${$uw(2)};
    }
    ${$breakPoint(500)} {
        width: ${$uw(2.6)};
    }

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Code = styled.span`
    font-family: "Space Mono", "Martian Mono", monospace;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: none;
    line-height: 1;
    ${$breakPoint(820)} {
        font-size: 1rem;
    }
    ${$breakPoint(500)} {
        font-size: 1.3rem;
    }
`;

const Chevron = styled.span<{ $open: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);

    svg {
        width: ${$uw(1.4)};
        height: ${$uw(1.4)};
    }
`;

const Menu = styled.div<{ $open: boolean }>`
    position: absolute;
    top: calc(100% + ${$uw(0.4)});
    right: 0;
    min-width: 100%;
    background-color: ${$color("white")};
    border: 1px solid ${$color("dust-dark")};
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    padding: ${$uw(0.3)};
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    gap: 2px;
    z-index: 20;

    ${$breakPoint(500)} {
        padding: ${$uw(0.5)};
        gap: 4px;
    }

    /* Variante scura quando il topbar è in stato scrolled */
    .scrolled & {
        background-color: ${$color("black-dark")};
        border-color: ${$color("tertiary-dark-shade")};
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    }
`;

const Option = styled.button<{ $active: boolean }>`
    ${buttonReset};
    display: inline-flex;
    align-items: center;
    gap: ${$uw(0.5)};
    padding: ${$uw(0.5)} ${$uw(0.8)};
    border-radius: 4px;
    /* Doppia specificità per battere la regola .scrolled * { color: white } del topbar */
    && {
        color: ${$color("black-dark")};
    }
    background-color: ${({ $active }) =>
        $active ? "rgba(0, 0, 0, 0.08)" : "transparent"};
    transition: background-color 0.15s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    /* Variante scura: testo chiaro e hover più visibile */
    .scrolled && {
        color: ${$color("white")};
        background-color: ${({ $active }) =>
            $active ? "rgba(255, 255, 255, 0.12)" : "transparent"};
    }
    .scrolled &:hover {
        background-color: rgba(255, 255, 255, 0.16);
    }
`;
