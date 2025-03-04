import { $breakPoint, $color, $cssTRBL, $uw } from "@lemaks/grid_system"
import { BsTelegram } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { RiCornerDownRightLine } from "react-icons/ri";
import styled from "styled-components"

export const PresentationSection = ()=>{
    return (
        <Section id="presentation">
        <Presentation>
          <div>

            <h1 className="title">Chi sono?</h1>
            <p>Mi chiamo Maksim Leali, sviluppatore web da 8 anni. Realizzo siti essenziali, funzionali e su misura per brand e persone</p>
          </div>
          <CTA href="#contact">
            FAMMI UNA PROPOSTA
            <RiCornerDownRightLine />
          </CTA>
        </Presentation>

        <ImageWrapper>
          <ImageContainer>
            <div className="ph" />
            <ContactBox>
              <h3>Come contattarmi</h3>
              <p>Telefono personale: <a target="_blank" href="tel:+393461038526" >+39 3461038526</a></p>
              <p>E-Mail: <a href="mailto:contact@makso.ne">contacts@makso.me</a></p>
              <p>Whatsapp: <a href="https://wa.me/+393461038526" target="_blank">3461038526 <IoLogoWhatsapp style={{ marginLeft: "5px" }} /></a></p>
              <p>Telegram: <a href="https://t.me/+393461038526" target="_blank">3461038526 <BsTelegram style={{ marginLeft: "5px" }} /></a></p>
            </ContactBox>
          </ImageContainer>
        </ImageWrapper>
      </Section>
    )
}


const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  padding-top: ${$uw(3)};
  align-items: center;
  
  
${$breakPoint(590)}{
    flex-direction: column-reverse;
    margin-bottom: ${$uw(6)};
}  

h1 {
      ${$breakPoint(590)}{
        text-align: center;
        margin-bottom: ${$uw(2)};
      }

  }
  
`

const Presentation = styled.div`
  width: ${$uw(22)}; 
  text-align: justify;
  ${$breakPoint(1024)}{
    width: ${$uw(22)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(26)};
    padding-right:${$uw(1)};
  }
  ${$breakPoint(820)}{
    width: 100%;
    padding-right:0;
    display: flex;
    flex-direction: column;
  }
  ${$breakPoint(590)}{
    flex-direction: column-reverse;
    
  }
`


const ImageWrapper = styled.div`
  width: ${$uw(30)};
  height: calc(100dvh - ${$uw(5)});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${$breakPoint(820)}{
    width: ${$uw(26)};
    padding-left:${$uw(1)};
  }
  ${$breakPoint(590)}{
      width: 100%;
      height:unset;
      padding-left:0;
    }
    .ph {
    position: relative;
    z-index:2;
    width: ${$uw(15)};
    height: ${$uw(20)};
    background-color: ${$color('glass-dark')};
    ${$breakPoint(1024)}{
      width:${$uw(20)};
      height:${$uw(34)};
    }
    ${$breakPoint(820)}{
      width: ${$uw(25)};
    }   
    ${$breakPoint(590)}{
      width: ${$uw(22)};
    }   
    ${$breakPoint(500)}{
      width: ${$uw(40)};
      height: calc(60dvh - ${$uw(5)});
    }   
  }
`

const ImageContainer = styled.div`
  width: ${$uw(30)};
  height: ${$uw(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  
    ${$breakPoint(930)}{
     
     height: ${$uw(40)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(26)};
  }
  ${$breakPoint(590)}{
    width:100%;
    flex-direction: row-reverse;
  }
  ${$breakPoint(500)}{
    flex-direction: column;
    height: unset;
    overflow: hidden;
    
  }
  &::before, &::after {
      display:block;
      content: "";
      position: absolute;
      z-index:1;
      width: ${$uw(20)};
      aspect-ratio: 1;
      animation: changeradius 20s ease-in-out infinite;
      background-color: ${$color('tertiary')};
      ${$breakPoint(820)}{
        width:${$uw(24)};
        animation: changeradiusMid 20s ease-in-out infinite;
      }
      ${$breakPoint(590)}{
        margin-left: 50%;
      }
      ${$breakPoint(500)}{
        margin-left: 0;
        width:${$uw(46)};
        animation: changeradiusMin 20s ease-in-out infinite;
      }
      
    }
    &::before {
      animation-delay: 1s;
      background-color: ${$color('tertiary-shade')};
      transform: rotate(90deg);
    }

  
`

const ContactBox = styled.div`
  width:${$uw(15)};
  position: relative;
  z-index: 2;
  padding: ${$cssTRBL(1)};
  background-color: ${$color('secondary')};
  border-radius: 4px;
  display: flex;
  flex-direction: column;    
  box-shadow: ${$uw(.2)} ${$uw(.2)} ${$color('secondary-dark')};
  
  ${$breakPoint(1024)}{
    width:${$uw(20)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(25)};
  }
  ${$breakPoint(820)}{
    width: ${$uw(25)};
  }
  ${$breakPoint(500)}{
    width: 100%;
    box-shadow: ${$uw(.4)} ${$uw(.4)} ${$color('secondary-dark')};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  h3 {
    margin-bottom:${$uw(.5)};
    ${$breakPoint(500)}{
      margin-bottom:${$uw(2)};
      
    }
  }
  p {
    margin-bottom:${$uw(.2)};
    &:last-child{
      margin-bottom: 0;
    }
    ${$breakPoint(500)}{
      margin-bottom:${$uw(1)};

    }
  }

`

const CTA = styled.a`
    
    padding: ${$cssTRBL(.5, 1)};
    color: ${$color('white')};
    background-color: ${$color('secondary-light')};
    border-radius: 4px;
    border: none;
    display: flex;
    align-items : center;
    text-decoration: none;
    width: fit-content;
    gap: ${$uw(1)};
    margin-top: ${$uw(1)};
    position: relative;
    cursor: pointer;
    box-shadow:  ${$uw(.2)} ${$uw(.2)} ${$color('secondary-shade')};
  ${$breakPoint(590)}{
    width: ${$uw(22)};
    position: relative;
    margin-left: auto;
    margin-right: ${$uw(1.5)};
    top: ${$uw(-4)}
  }
  ${$breakPoint(500)}{
    width:100%;;
    padding:${$uw(2)};
    z-index: 2;
    top: ${$uw(-1)};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow:  ${$uw(.4)} ${$uw(.4)} ${$color('secondary-shade')};
    margin-bottom: ${$uw(6)};
  }
  
`