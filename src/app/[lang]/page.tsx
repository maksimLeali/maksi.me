"use client";

import { $uw } from "@theme";
import styled from "styled-components";
import { MainSection } from "../components/MainSection";
import { ManifestoSection } from "../components/ManifestoSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ServicesSection } from "../components/ServicesSection";

export default function Main() {
    return (
        <Container>
            <MainSection />
            <ManifestoSection />
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
