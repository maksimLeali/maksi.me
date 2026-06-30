"use client";

import { $uw } from "@theme";
import styled from "styled-components";
import { MainSection } from "./MainSection";
import { LocalSeoSection } from "./LocalSeoSection";
import { ManifestoSection } from "./ManifestoSection";
import { ArticlesSection } from "./ArticlesSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ServicesSection } from "./ServicesSection";

export const HomeContent = () => {
    return (
        <Container>
            <MainSection />
            <LocalSeoSection />
            <ManifestoSection />
            <ArticlesSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding-bottom: ${$uw(2)};
`;
