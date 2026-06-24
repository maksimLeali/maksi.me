"use client";

import { $uw } from "@theme";
import styled from "styled-components";
import { MainSection } from "./components/MainSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { WebDevSection } from "./components/WebDevSection";
import { CinofilaSection } from "./components/CinofilaSection";
import { GameDevSection } from "./components/GameDevSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Main() {
    return (
        <Container>
            <MainSection />
            <ManifestoSection />
            <WebDevSection />
            <GameDevSection />
            <CinofilaSection />
            <ArticlesSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding-bottom: ${$uw(2)};
`;
