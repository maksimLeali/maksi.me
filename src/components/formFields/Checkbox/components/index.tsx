import styled from "styled-components";
import { $breakPoint, $color, $uw } from "@lemaks/grid_system";
import { FOCUSCOLOR } from "../../colors";

export const StyledCheckbox = styled.input`
    margin-right: ${$uw(0.5)};
    cursor: pointer;
    background-color:${$color('white')};
    color:${$color('danger')};
    appearance: none; /* Removes default styles */
    border: 1px solid ${$color('black-light')};
    border-radius: 2px;
    width: ${$uw(.5)};
    height: ${$uw(.5)};
    &:checked {
        background-color:${$color(FOCUSCOLOR)};
    }
    ${$breakPoint(780)}{
        width: ${$uw(2)};
        height: ${$uw(2)};
    } 
   
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    height: ${$uw(1.5)};
    margin-bottom:${$uw(1)};
    flex-direction: column;
    margin-bottom: ${$uw(1)};
    &.error {
        .error-span {
            color: ${$color("danger-light")};
        }
    }
    ${$breakPoint(780)}{
        height: ${$uw(3)};
        margin-bottom:${$uw(2)};
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
   
`;

export const InputLabel = styled.label`
    cursor: pointer;
    margin-left: ${$uw(0.5)};
    -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */ 
`;

export const ErrorSpan = styled.span`
    font-size: 1.3rem;
    color: ${$color("danger-light")};
   
`;
