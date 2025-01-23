import React from "react";
import { useFormContext } from "react-hook-form";
import { Wrapper, InputLabel, InputWrapper, StyledCheckbox, ErrorSpan } from "./components";

interface CheckboxInputProps {
    name: string;
    textLabel?: string;
    ntTextLabel?: string;
    required?: boolean;
    id?: string;
    registerOptions?: Record<string, any>;
}

export const Checkbox: React.FC<CheckboxInputProps> = ({
    name,
    textLabel,
    ntTextLabel,
    id,
    required = false,
    registerOptions,
}) => { 
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <Wrapper id={id} className={`checkbox-input ${errors[name] ? "error" : ""}`}>
            <InputWrapper>
                <StyledCheckbox
                    type="checkbox"
                    {...register(name, {
                        required: required && {
                            value: true,
                            message: "messages.errors.required",
                        },
                        ...registerOptions,
                    })}
                    id={name}
                />
                <InputLabel htmlFor={name}>
                    {textLabel ? textLabel : ntTextLabel}
                    {required && " *"}
                </InputLabel>
            </InputWrapper>
            {errors[name]?.message && (
                <ErrorSpan>{errors[name]?.message.toString()}</ErrorSpan>
            )}
        </Wrapper>
    );
};
