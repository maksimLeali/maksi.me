"use client";
import { $breakPoint, $color, $cssTRBL, $uw } from "@theme";
import { useOnClickOutside } from "@hooks";
import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

import { LanguageSelector } from "./LanguageSelector";

const NAV_LINKS = [
    { key: "web", href: "/web-dev" },
    { key: "game", href: "/game-dev" },
    { key: "cinofila", href: "/dog-training" },
    { key: "contact", href: "/#contact" },
] as const;

export const TopBar: React.FC = () => {
    const { t } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const pathname = usePathname();
    const [hash, setHash] = useState("");
    const isActive = (href: string) => {
        if (href.includes("#")) {
            const h = href.slice(href.indexOf("#"));
            return pathname === `/${lang}` && hash === h;
        }
        return pathname === `/${lang}${href}`;
    };
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [spinKey, setSpinKey] = useState(0);
    const drawerRef = useRef<HTMLDivElement>(null);

    const spinLogo = () => setSpinKey((k) => k + 1);

    useEffect(() => {
        const updateHash = () => setHash(window.location.hash);
        updateHash();
        window.addEventListener("hashchange", updateHash);
        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useOnClickOutside(drawerRef as React.RefObject<HTMLDivElement>, () => {
        if (menuOpen) setMenuOpen(false);
    });

    const closeMenu = () => setMenuOpen(false);

    return (
        <TopBarContainer className={`menu ${isScrolled ? "scrolled" : ""}`}>
            <Wrapper>
                <Brand
                    href={`/${lang}`}
                    onClick={() => {
                        closeMenu();
                        spinLogo();
                    }}
                >
                    <ImageWrapper key={spinKey} className={spinKey > 0 ? "spin" : ""}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo_dark.svg" alt="LeMaks" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="light" src="/logo.svg" alt="LeMaks" />
                    </ImageWrapper>
                    <span className="brand-name">LeMaks</span>
                </Brand>
                <NavLinks>
                    {NAV_LINKS.map((link) => {
                        const isHash = link.href.includes("#");
                        const href = isHash
                            ? `/${lang}${link.href.slice(link.href.indexOf("#"))}`
                            : `/${lang}${link.href}`;
                        const className = `nav-link${isActive(link.href) ? " active" : ""}`;
                        return isHash ? (
                            <a
                                key={link.href}
                                className={className}
                                href={href}
                                onClick={spinLogo}
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ) : (
                            <Link
                                key={link.href}
                                className={className}
                                href={href}
                                onClick={spinLogo}
                            >
                                {t(`nav.${link.key}`)}
                            </Link>
                        );
                    })}
                </NavLinks>
                <Tools>
                    <LanguageSelector />
                    <MenuButton
                        type="button"
                        aria-label={menuOpen ? t("menu.close") : t("menu.open")}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
                    </MenuButton>
                </Tools>
            </Wrapper>

            <Backdrop $open={menuOpen} aria-hidden="true" />
            <Drawer ref={drawerRef} $open={menuOpen} aria-hidden={!menuOpen}>
                <DrawerHeader>
                    <span className="title mono">{t("menu.title")}</span>
                    <button
                        type="button"
                        aria-label={t("menu.close")}
                        onClick={closeMenu}
                    >
                        <RiCloseLine />
                    </button>
                </DrawerHeader>
                <DrawerNav>
                    {NAV_LINKS.map((link) => {
                        const isHash = link.href.includes("#");
                        const href = isHash
                            ? `/${lang}${link.href.slice(link.href.indexOf("#"))}`
                            : `/${lang}${link.href}`;
                        const onClick = () => {
                            closeMenu();
                            spinLogo();
                        };
                        return isHash ? (
                            <a key={link.href} href={href} onClick={onClick}>
                                {t(`nav.${link.key}`)}
                            </a>
                        ) : (
                            <Link key={link.href} href={href} onClick={onClick}>
                                {t(`nav.${link.key}`)}
                            </Link>
                        );
                    })}
                </DrawerNav>
            </Drawer>
        </TopBarContainer>
    );
};

const TopBarContainer = styled.header`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: ${$color("dust")};
    justify-content: center;
    border-bottom: 1px solid ${$color("dust-dark")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transition:
        background-color 0.5s ease-in,
        color 0.5s ease-out;
    color: ${$color("black-dark")};
    &.scrolled {
        background-color: ${$color("glass-dark")};
        backdrop-filter: blur(8px);
        border-bottom: 1px solid ${$color("tertiary-dark-shade")};
        .logo {
            background-color: ${$color("white")};
        }
        * {
            color: ${$color("white")};
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: var(--max-width);
    height: ${$uw(3)};
    box-sizing: border-box;
    justify-content: space-between;
    padding: ${$cssTRBL(0, 1)};
    gap: ${$uw(1)};
    color: ${$color("black-dark")};
    ${$breakPoint(820)} {
        height: ${$uw(5)};
        padding: ${$cssTRBL(0, 1.5)};
    }
    ${$breakPoint(500)} {
        height: ${$uw(7)};
        padding: ${$cssTRBL(0, 2)};
        gap: ${$uw(1.5)};
    }

    .logo {
        background-color: ${$color("black")};
    }
`;

const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${$uw(0.6)};
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    ${$breakPoint(500)} {
        gap: ${$uw(1)};
    }

    .brand-name {
        font-family: "Space Mono", "Martian Mono", monospace;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 1.6rem;
        ${$breakPoint(500)} {
            font-size: 2rem;
            letter-spacing: 0.18em;
        }
    }
`;

const ImageWrapper = styled.div`
    width: ${$uw(2.5)};
    height: ${$uw(2.5)};
    position: relative;
    transition: background-color 0.5s ease-in;
    ${$breakPoint(820)} {
        width: ${$uw(3.5)};
        height: ${$uw(3.5)};
    }
    ${$breakPoint(500)} {
        display: none;
    }
    &.spin {
        animation: slowSpin 0.6s ease-in-out;
    }
    > img {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s ease-in-out;
    }
    .scrolled & > .light {
        opacity: 0;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: ${$uw(1.4)};
    margin-left: auto;

    .nav-link {
        position: relative;
        font-family: "Space Mono", "Martian Mono", monospace;
        font-size: 1.2rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        padding-bottom: 2px;
        white-space: nowrap;
    }

    .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: ${$color("tertiary")};
        transition: width 0.3s ease-in-out;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
        width: 100%;
    }

    ${$breakPoint(820)} {
        gap: ${$uw(1)};
        .nav-link {
            font-size: 1rem;
            letter-spacing: 0.06em;
        }
    }
    ${$breakPoint(500)} {
        display: none;
    }
`;

const Tools = styled.div`
    display: flex;
    align-items: center;
    gap: ${$uw(0.6)};
    margin-left: ${$uw(0.5)};
    ${$breakPoint(820)} {
        gap: ${$uw(0.8)};
    }
    ${$breakPoint(500)} {
        margin-left: auto;
        gap: ${$uw(1)};
    }
`;

const MenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    padding: ${$uw(0.5)};
    cursor: pointer;
    color: inherit;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    -webkit-tap-highlight-color: transparent;

    svg {
        width: ${$uw(4)};
        height: ${$uw(4)};
        display: block;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    ${$breakPoint(500)} {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`;

const Backdrop = styled.div<{ $open: boolean }>`
    display: none;
    ${$breakPoint(500)} {
        display: block;
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.55);
        opacity: ${({ $open }) => ($open ? 1 : 0)};
        pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
        transition: opacity 0.3s ease;
        z-index: 9;
    }
`;

const Drawer = styled.aside<{ $open: boolean }>`
    display: none;
    ${$breakPoint(500)} {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100dvh;
        width: min(80vw, ${$uw(40)});
        background-color: ${$color("black-dark")};
        border-left: 1px solid ${$color("tertiary-dark-shade")};
        padding: ${$cssTRBL(2, 2.5)};
        transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
        transition: transform 0.35s ease;
        z-index: 11;
        color: ${$color("white-light")};
        box-shadow: -${$uw(0.5)} 0 ${$uw(2)} rgba(0, 0, 0, 0.4);
    }
`;

const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${$uw(2)};
    border-bottom: 1px solid ${$color("gray-dark")};
    margin-bottom: ${$uw(2)};

    .title {
        font-size: 1.4rem;
        letter-spacing: 0.3em;
        color: ${$color("tertiary-dark")};
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${$color("white-light")};
        padding: ${$uw(0.5)};
        border-radius: 4px;
        -webkit-tap-highlight-color: transparent;
        svg {
            width: ${$uw(4)};
            height: ${$uw(4)};
            display: block;
        }
        &:hover {
            background-color: rgba(255, 255, 255, 0.06);
        }
    }
`;

const DrawerNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: ${$uw(1.5)};

    a {
        font-family: "Space Mono", "Martian Mono", monospace;
        font-size: ${$uw(2.6)};
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-decoration: none;
        color: ${$color("white-light")};
        padding: ${$uw(1)} 0;
        border-bottom: 1px solid ${$color("gray-dark")};
        transition: color 0.2s ease;
        -webkit-tap-highlight-color: transparent;

        &:hover,
        &:active {
            color: ${$color("tertiary")};
        }
    }
`;
