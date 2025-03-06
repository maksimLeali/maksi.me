import { $breakPoint, $color, $uw } from "@theme"
import styled from "styled-components";

type props = {
    title: string;
    desc: string;
}

export const InfoItem:React.FC<props>= ({title, desc})=>{
    return (
        <Info>
            <h3>{title}</h3>
            <p>{desc}</p>
        </Info>
    )
} 


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