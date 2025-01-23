"use client"
import React, { useMemo, useState, useRef, useEffect } from "react";

import { useFormContext } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useOnClickOutside } from "@hooks";
import {
	FocusBox,
	InputWrapper,
	Wrapper,
	InputLabel,
	StyledInput,
	ErrorSpan,
	IconWrapper,
} from "./components";
import {
	FOCUSCOLOR,
	DISABLEDCOLOR,
	TEXTCOLOR,
	COLOR,
	ERRORCOLOR,
	BGCOLOR
} from '../colors';
import { CommonProps, HookFormProps } from "./components/types";

export const HookFormInput: React.FC<HookFormProps & CommonProps> = ({
	textLabel,
	ntTextLabel,
	required = false,
	type = "text",
	inputMode = "text",
	focusColor = FOCUSCOLOR,
	disabledColor = DISABLEDCOLOR,
	textColor = TEXTCOLOR,
	color = COLOR,
	errorColor = ERRORCOLOR,
	bgColor = BGCOLOR,
	icon,
	id,
	name,
	disabled = false,
	registerOptions,
}) => {
	const [focused, setFocused] = useState(false);
	const [compiled, setCompiled] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const [showPsw, setShowPsw] = useState(false);
	const {
		register,
		getValues,
		formState: { errors },
	} = useFormContext();

	useEffect(() => {
		if (!getValues(name)) {
			setCompiled(false);
			return;
		}
		setCompiled(true);
	}, [getValues(name)]);

	const setFocus = () => {
		if (!ref.current) return;

		(ref.current.children[0] as HTMLElement).focus();
	};

	const classes = useMemo(() => {
		return `${disabled && "disabled"} ${focused && "focused"} ${compiled && "compiled"
			} ${errors[name] && "error"}`;
	}, [errors[name], disabled, focused, compiled]);

	// @ts-ignore
	useOnClickOutside(ref, () => {
		setFocused(false);
		const hide = ref.current?.children[0];
		if (!hide) return;
		hide.classList.remove("hide");
	});

	return (
		<Wrapper
			className={`text-input menu ${classes}`}
			$focuscolor={focusColor}
			$disabledcolor={disabledColor}
			$errorcolor={errorColor}
			$maincolor={color}
			$textcolor={textColor}
			$bgcolor={bgColor}
			id={id}
		>
			<InputLabel
				htmlFor={name}
				onClick={() => setFocus()}
				className={`label ${classes}`}
			>
				{textLabel ? textLabel : ntTextLabel}
				{required && !compiled && " *"}
			</InputLabel>
			<InputWrapper className="input-wrapper" ref={ref}>
				<StyledInput
					id={name}
					className={classes}
					onFocus={() => setFocused(true)}
					inputMode={inputMode}
					type={
						type == "password"
							? showPsw
								? "text"
								: "password"
							: type
					}
					{...register(name, {
						required: {
							value: required,
							message: "messages.errors.required",
						},
						...registerOptions,
					})}
				/>
				{type == "password" && (
					<IconWrapper
						className="icon-wrapper"
						onClick={() => setShowPsw(!showPsw)}
					>
						{showPsw ? <FaRegEye /> : <FaRegEyeSlash />}
					</IconWrapper>
				)}
				{icon != undefined && icon != null && (
					<IconWrapper className="icon-wrapper">{icon}</IconWrapper>
				)}
				<FocusBox className={`focus-box ${classes}`} />
			</InputWrapper>
			{errors[name]?.message && (
				<ErrorSpan className="error-span">
					{/* @ts-ignore  */}
					{errors[name]?.message}
				</ErrorSpan>
			)}
		</Wrapper>
	);
};
