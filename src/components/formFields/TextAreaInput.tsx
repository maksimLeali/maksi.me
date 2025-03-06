"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import {
    RegisterOptions,
    useFormContext,
} from "react-hook-form";

import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";

import {
	FOCUSCOLOR,
	DISABLEDCOLOR,
	TEXTCOLOR,
	COLOR,
	ERRORCOLOR,
	BGCOLOR
} from './colors';
import { useOnClickOutside } from "@hooks";

import { $uw, $color, $breakPoint } from "@theme"

type props = {
    name: string;
    required?: boolean;
    textLabel?: string;
    ntTextLabel?: string;
    color?: string;
    focusColor?: string;
    disabledColor?: string;
    textColor?: string;
    errorText?: string;
    pattern?: RegExp;
    registerOptions?: RegisterOptions;
    errorColor?: string;
    bgColor?: string
};

export const TextAreaInput: React.FC<props> = ({
    ntTextLabel,
    textLabel,
    color = COLOR,
    required = false,
    textColor = TEXTCOLOR,
    focusColor = FOCUSCOLOR,    
    bgColor=BGCOLOR,
    name,
}: props) => {
    
    const [focused, setFocused] = useState(false);
    const [compiled, setCompiled] = useState(false);
    const [error, setError] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const editableRef = useRef<HTMLDivElement>(null);
    
    const {
        setValue,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useFormContext();

    const onContentBlur = useCallback(
        (evt: any) => {
            const sanitizeConf = {
                allowedTags: ["b", "i", "a", "p", 'br', 'div'],
                allowedAttributes: { a: ["href"] },
            };
            const text = sanitizeHtml(
                evt.currentTarget.innerHTML,
                sanitizeConf
            );
            setValue(name, text??'');
            // setEditableText(text)
            if(text.length == 0) {
              setCompiled(false);
              return
            }
            if (!compiled) {
                setCompiled(true);
            }
        },[]
    );

    const setFocus = () => {
        if(editableRef.current){
            (editableRef.current as any).el.current.focus()
        }
    };

    useEffect(() => {
        setError(errors[name] != undefined);
    }, [errors[name]]);

    // @ts-ignore
    useOnClickOutside(ref, () => {
        setFocused(false);
        const hide = ref.current?.children[0];
        if (!hide) return;
        hide.classList.remove("hide");
    });
    

    return (
        <Wrapper className={`${isSubmitting ? "submitting" : ""}`}>
            <InputLabel
                $mainColor={color}
                $focuscolor={focusColor}
                htmlFor={name}
                onClick={()=> {console.log('******'); setFocus()}}
                className={`${focused ? "focused" : ""} ${
                    compiled ? "compiled" : ""
                } ${error ? "error" : ""}`}
            >
                {textLabel ? textLabel : ntTextLabel}
                {required && !compiled && " *"}
            </InputLabel>
            <InputWrapper ref={ref} $mainColor={color}>
                <Editable
                    id={name}
                    ref={(editableRef)as any}
                    textcolor={textColor}
                    bgcolor={bgColor}
                    onChange={onContentBlur}
                    onFocus={() => setFocused(true)}
                    onBlur={onContentBlur}
                     
                    html={getValues(name )?? ''}
                    
                />
                <FocusBox
                    $mainColor={color}
                    $focuscolor={focusColor}
                    className={`foxusBox ${focused ? "focused" : ""} ${
                        compiled ? "compiled" : ""
                    } ${error ? "error" : ""}`}
                />
            </InputWrapper>
            {errors[name]?.message ? (
                // @ts-ignore
                <ErrorSpan>{errors[name]?.message }</ErrorSpan>
            ) : (
                ""
            )}
        </Wrapper>
    );
};

type wrapperProps = {
    $mainColor: string;
};

type focusCircleProps = {
    $mainColor: string;
    $focuscolor: string;
};
type labelProps = {
    $mainColor: string;
    $focuscolor: string;
};

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: ${$uw(2)};
    &.submitting {
        opacity: 0.5;
        pointer-events: none;
    }
`;


const InputLabel = styled.label<labelProps>`
    z-index: 2;
    position: absolute;
    left: ${$uw(.5)};
    top: 2px;
    font-size: 2rem;
    color: ${({ $mainColor }) => $color($mainColor)};
    transition: top 0.5s ease-in, left 0.5s ease-in, color 0.5s ease-in,
    font-size 0.5s ease-in;
    &.focused ,
    &.compiled {
        font-size: 1.8rem;
        top: ${$uw(-1.5)};
        left: 0px;
        color:${({ $focuscolor }) => $color($focuscolor)};
    }
    &.error {
        color: var(--ion-color-danger);
    }
`;


const InputWrapper = styled.div<wrapperProps>`
    background-color: ${({ $mainColor }) => $color($mainColor)};
    position: relative;
    padding: 0 0 2px 2px;
    border-radius: 2px;
    border-top-right-radius: 0;
    min-height: ${$uw(2)};
    margin-bottom: 12px;
    overflow: hidden;
    z-index: 1;
    > .icon-wrapper {
        position: absolute;
        z-index: 2;
        top: -4px;
        right: 0;
    }
`;

const FocusBox = styled.span<focusCircleProps>`
    background-color: ${$color("medium")};
    position: absolute;
    display: block;
    z-index: 1;
    bottom: 0;
    width: 0;
    left: -1px;
    max-height: 0;
    height: 100%;

    transition: background-color 1s cubic-bezier(1, 0.07, 1, 0.12) 0s,
        width 0.5s ease-out, max-height 0.5s ease-out;
    &.focused {
        background-color:${({ $focuscolor }) => $color($focuscolor)};
        width: 100%;
        max-height: 100%;
        transition: background-color 1s cubic-bezier(0.02, 1.17, 0, 0.97) 0s,
            width 0.5s ease-out, max-height 0.5s ease-out;
    }
    &.compiled {
        background-color:${({ $focuscolor }) => $color($focuscolor)};
        width: 100%;
        max-height: 100%;
    }
    &.error {
        background-color: var(--ion-color-danger);
    }
`;

const Editable = styled(ContentEditable)<{ textcolor: string, bgcolor?: string }>`
    height: 100%;
    width: 100%;
    min-height: ${$uw(6)};
    font-size: 1.6rem;
    padding-left: 20px;
    padding-bottom: 10px;
    box-sizing:border-box;
    border: none !important;
    color: ${({ textcolor }) => $color(textcolor)};
    position: relative;
    z-index: 2;
    line-height: 2rem;
    padding-top: 8px;
    outline: 0px solid transparent;
    background-color: ${({ bgcolor }) =>
        bgcolor
            ? $color(bgcolor)
            : "var(--ion-background-color)"};
    
    &:-webkit-autofill,
    .dark &:-webkit-autofill,
    &:-webkit-autofill:hover,
    .dark &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    .dark &:-webkit-autofill:focus,
    &:-webkit-autofill:active .dark &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        color: ${({ textcolor }) => $color(textcolor)};
        -webkit-text-fill-color: var(
            --ion-color-${({ textcolor }) => textcolor}
        );
    }
    &:empty:before {
    content: attr(placeholder);
    color: ${({ textcolor }) => $color(textcolor)};
    ${$breakPoint(780)}{
        min-height: ${$uw(12)};
    }
  }

  // Add the onKeyDown event handler
  &:empty {
    min-height: ${$uw(6)}; // This ensures there's always a visible line for the cursor
    ${$breakPoint(780)}{
        min-height: ${$uw(12)};
    }
  }

  &:not(:empty) {
    min-height: ${$uw(6)}; // This ensures there's always a visible line for the cursor
    ${$breakPoint(780)}{
        min-height: ${$uw(12)};
    }
  }

  &[contentEditable="true"] {
    white-space: pre-wrap; // This preserves whitespace and line breaks
  }
`;
const StyledInput = styled.textarea<{ textColor: string }>`
    outline: none;
    border: none!important;
    position: relative;
    z-index: 2;
    background-image: none;
    color: ${({ textColor }) => $color(textColor)};
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    font-size: 1.6rem;
    box-shadow: none;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-bottom: 10px;
    @media (prefers-color-scheme: dark) {
        background-color: var(--ion-background-color);
    }
    &:-webkit-autofill,
    .dark &:-webkit-autofill,
    &:-webkit-autofill:hover,
    .dark &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    .dark &:-webkit-autofill:focus,
    &:-webkit-autofill:active .dark &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        color: ${({ textColor }) => $color(textColor)};
        -webkit-text-fill-color: var(
            --ion-color-${({ textColor }) => textColor}
        );
    }
`;

const ErrorSpan = styled.span`
    color: var(--ion-color-danger);
    font-size: 1.6rem;
`;
