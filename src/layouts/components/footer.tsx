import React from "react";
import styled from "styled-components";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";

const LINKS = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maksim-leali-50a940168/",
    },
    { label: "GitHub", href: "https://github.com/maksimLeali" },
    { label: "Instagram", href: "https://www.instagram.com/lemaks_dev/" },
    { label: "Email", href: "mailto:contact@lemaks.it" },
];

export const Footer: React.FC = () => {
    return (
        <FooterContainer className="menu">
            <Logo src="/logo.svg" alt="" aria-hidden="true" />
            <Inner>
                <Brand>
                    <span className="name mono">LeMaks</span>
                    <span className="disc">
                        Web Development · Educazione Cinofila · Game Development
                    </span>
                    <span className="claim mono">
                        Realizzo esperienze essenziali.
                    </span>
                </Brand>
                <Links>
                    {LINKS.map((l) => (
                        <FooterLink
                            key={l.label}
                            href={l.href}
                            target={
                                l.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                        >
                            {l.label}
                        </FooterLink>
                    ))}
                </Links>
            </Inner>
            <Copy>
                © 2026 LeMaks
                <span aria-hidden="true"> · </span>
                <PrivacyLink href="/privacy-policy">Privacy Policy</PrivacyLink>
            </Copy>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    position: relative;
    background-color: ${$color("black-dark")};
    color: ${$color("white-dark")};
    width: 100%;
    padding: ${$cssTRBL(2, 1)};
    overflow: hidden;
    border-top: 1px solid ${$color("primary-dark")};
    ${$breakPoint(820)} {
        padding: ${$cssTRBL(2.5, 1.5)};
    }
    ${$breakPoint(500)} {
        padding: ${$cssTRBL(3, 2)};
    }
`;

const Logo = styled.img`
    position: absolute;
    right: ${$uw(-4)};
    bottom: ${$uw(-6)};
    width: ${$uw(24)};
    opacity: 0.05;
    pointer-events: none;
    filter: grayscale(1);
`;

const Inner = styled.div`
    position: relative;
    z-index: 1;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: ${$uw(2)};
    ${$breakPoint(590)} {
        flex-direction: column;
        gap: ${$uw(3)};
    }
`;

const Brand = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.4)};
    ${$breakPoint(500)} {
        gap: ${$uw(0.8)};
    }
    .name {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${$color("white-light")};
        ${$breakPoint(500)} {
            font-size: 2.2rem;
        }
    }
    .disc {
        font-size: 1.4rem;
        color: ${$color("gray")};
        ${$breakPoint(500)} {
            font-size: 1.5rem;
        }
    }
    .claim {
        font-size: 1.3rem;
        letter-spacing: 0.15em;
        color: ${$color("tertiary-dark")};
        margin-top: ${$uw(0.4)};
        ${$breakPoint(500)} {
            font-size: 1.4rem;
            margin-top: ${$uw(0.8)};
        }
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${$uw(0.4)};
    align-items: flex-end;
    ${$breakPoint(590)} {
        align-items: flex-start;
        gap: ${$uw(1)};
    }
`;

const FooterLink = styled.a`
    color: ${$color("white-dark")};
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.2s ease;
    ${$breakPoint(500)} {
        font-size: 1.6rem;
    }
    &:hover {
        color: ${$color("tertiary")};
    }
`;

const Copy = styled.p`
    position: relative;
    z-index: 1;
    max-width: var(--max-width);
    margin: ${$uw(1.5)} auto 0;
    font-size: 1.3rem;
    color: ${$color("gray-dark")};
    ${$breakPoint(500)} {
        margin-top: ${$uw(2.5)};
        font-size: 1.4rem;
    }
`;

const PrivacyLink = styled.a`
    color: ${$color("gray-dark")};
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s ease;
    &:hover {
        color: ${$color("white-dark")};
    }
`;
