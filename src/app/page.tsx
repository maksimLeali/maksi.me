"use client";

import { $uw } from "@theme"
import styled from "styled-components";
import { MainSection } from './components/MainSection'
import { ContactSection } from "./components/ContactSection";
import { PresentationSection } from "./components/PresentetionSection";
import { InfoSection } from "./components/InfoSection";

export default function Main() {

  
  return (
    <Container>
      
      <MainSection />
      <PresentationSection />
      <InfoSection />
      <ContactSection />
    </Container >
  )}

  


const Container = styled.div`
  width: 100%;
  padding-bottom:${$uw(2)};
`




