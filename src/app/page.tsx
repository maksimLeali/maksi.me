"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@lemaks/grid_system";
import styled from "styled-components";
import { RiMailSendLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
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





const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  align-items: center;
  &.vertical{
    flex-direction: column;
    gap:${$uw(1)};
    &.start {
      align-items: flex-start;
    }
  }
  ${$breakPoint(590)}{
    flex-direction: column-reverse;
  }
  ${$breakPoint(590)}{
    margin-bottom: ${$uw(6)};
  }  
  
`


const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap:${$uw(2)};  
  ${$breakPoint(820)}{
    flex-direction: column;
    gap:${$uw(4)};  
  }
  ${$breakPoint(500)}{
    margin-top: ${$uw(4)};
    gap:${$uw(6)};  
  }
`

const Info = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: ${$color('primary')};
  padding: ${$uw(1)};
  position: relative;
  &::after{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: ${$uw(.2)};
    left: ${$uw(.2)};
    content: "";
    border-radius:4px;
    background-color: ${$color('primary-dark')};
  }

  ${$breakPoint(820)}{
    width: 100%;
  }

`


