"use client";

import { $breakPoint, $color, $cssTRBL, $uw } from "@theme"
import styled from "styled-components";
import HexagonCollisionSketch from "./Sketch";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { FaAngleDoubleDown } from "react-icons/fa";

export const MainSection = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        "#title h1",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, delay: 2 }
      )
      .fromTo(
        "#cutter",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "<" // Start this animation at the same time as the previous one ends
      );
  }, []);


  return (
    <Section id="mainSection">
      <HexagonCollisionSketch />
      <Title id="title" className={`${mounted ? "mounted" : ""} mainTitle`}>
        <h1>LeMaks</h1>
        <Cutter id="cutter">
          <Upper className="upper "></Upper>
          <Lower className="lower "></Lower>
          <Inside className="inside mainTitle">Realizzo l'essenziale</Inside>
        </Cutter>
      </Title>
      <ScrollDown href="#presentation">
        <p>Scopri di più</p>
        <FaAngleDoubleDown />
      </ScrollDown>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${$cssTRBL(1)};
  height: calc(100dvh - ${$uw(3)}) ;
  width: 100%;
  align-items: center;

  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    font-size: ${$uw(4)};
    opacity:0;
    margin-left: ${$uw(12)};
    font-weight: 200;
    ${$breakPoint(820)}{
      font-size: ${$uw(6)};
      margin-left: ${$uw(21)};
    }
  }

  ${$breakPoint(820)}{
    gap: ${$uw(4)};
  }
`;

const Cutter = styled.div`
  width: 100%;
  height: ${$uw(10)};
  overflow: hidden;
  position: relative;
  margin-left: ${$uw(1)};
  padding-left: ${$uw(1)};
  opacity: 0;
  /* background-color: #00f; */
  ${$breakPoint(820)}{
    /* height: ${$uw(5)}; */

  }
  
`;

const Upper = styled.h3`
  position: absolute;
  width: 100%;
  height: 50%;
  /* height: ${$uw(5)}; */
  z-index: 1;
  top:0;
  overflow: hidden;
  /* background-color: #f00; */
  /* background-color: ${$color("black-dark")}; */
  .mounted & {
    animation: titleUp 2s ease-in-out 5s;
    animation-fill-mode: forwards;
  }
  
  &::before {
    position: absolute;
    width: 100%;
    height: 50%;
    /* height: ${$uw(2.5)}; */
    font-size: ${$uw(3)};
    top: 50%;
    /* top: ${$uw(2.5)}; */
    content: "Taglio il superfluo";
    /* background-color: #faa; */
  }
`;

const Lower = styled.h3`
  position: absolute;
  width: 100%;
  height: 50%;
  /* height: ${$uw(5)}; */
  z-index: 1;
  top: calc(50% - 1px);
  overflow: hidden;
  /* background-color: ${$color("black-dark")}; */
  /* background-color: #0f0; */
  .mounted & {
    animation: titleDown 2s ease-in-out 5s;
    animation-fill-mode: forwards;
  }
  &::before {
    position: absolute;
    width: 100%;
    font-size: ${$uw(3)};
    height: 50%;
    /* height: ${$uw(2.5)}; */
    top: -50%;    
    content: "Taglio il superfluo";
    /* background-color: #afa; */
  }
`;

const Inside = styled.div`
  position: absolute;
  opacity: 0;
  font-size: ${$uw(2.5)};
  .mounted & {
    animation: appear 3s ease-in-out 5s;
    animation-fill-mode: forwards;
  }
  width: 100%;
  /* text-align: center; */
  top: calc(50% - ${$uw(2)});
  z-index: 0;
  color: ${$color("white")};
`;


const ScrollDown = styled.a`
  width: ${$uw(5)};
  position: absolute;
  opacity: 0;
  right:${$uw(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${$uw(.5)};
  bottom: ${$uw(2)}; 
  cursor: pointer;
  color: ${$color('white')};
  animation: appear 1s ease-in 8s;
  animation-fill-mode: forwards;
  > svg {
    width :${$uw(1)};
    height :${$uw(1)};
  } 
  > * {
    position: relative;    
    animation: upandDown 2s ease-in-out infinite;
  }

`