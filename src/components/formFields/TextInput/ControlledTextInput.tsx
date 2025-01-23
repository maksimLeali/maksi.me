"use client"
import React, { useMemo, useState, useRef, useEffect } from "react";
import { uniqueId } from "lodash";
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
import { CommonProps, ControlledProps } from "./components/types";

export const ControlledTextInput: React.FC<ControlledProps & CommonProps> = ({
	value,
	onChange,
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
	disabled = false,
	name = uniqueId("text-"),
	error,
}) => {

	const [focused, setFocused] = useState(false);
	const [compiled, setCompiled] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const [showPsw, setShowPsw] = useState(false);

	useEffect(() => {
		if (value && value.length > 0) {
			setCompiled(true);
			return;
		}
		setCompiled(false);
	}, [value]);

	const setFocus = () => {
		if (!ref.current) return;
		(ref.current.children[0] as HTMLElement).focus();
	};

	const classes = useMemo(() => {
		return `${disabled && "disabled"} ${focused && "focused"} ${compiled && "compiled"
			} ${error && "error"}`;
	}, [error, disabled, focused, compiled]);

	// @ts-ignore
	useOnClickOutside(ref, () => {
		setFocused(false);
		const hide = ref.current?.children[0];
		if (!hide) return;
		hide.classList.remove("hide");
	});

	return (
		<Wrapper
			className={`text-input ${classes}`}
			$focuscolor={focusColor}
			$disabledcolor={disabledColor}
			$errorcolor={errorColor}
			$maincolor={color}
			$textcolor={textColor}
			$bgcolor={bgColor}
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
					value={value ?? undefined}
					onChange={(e) => {
						onChange(e.target.value);
					}}
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
			{error && <ErrorSpan className="error-span">{error}</ErrorSpan>}
		</Wrapper>
	);
};
