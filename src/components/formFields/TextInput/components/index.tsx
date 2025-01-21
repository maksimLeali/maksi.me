import styled from "styled-components";
import { $color, $uw } from "@theme";

type wrapperProps = {
	color: string;
	focusColor: string;
	errorColor: string;
	disabledColor: string;
	textColor: string;
	bgColor?: string;
};

export const Wrapper = styled.div<wrapperProps>`
	width: 100%;
	position: relative;
	height: ${$uw(2.5)};
	margin-bottom: ${$uw(1.5)};
	> .label,
	.icon-wrapper > * {
		color: ${({ color }) => $color(color)};
	}
	> .input-wrapper {
		background-color: ${({ color }) => $color(color)};
		> input {
			color: ${({ textColor }) => $color(textColor)};
			background-color: ${({ bgColor }) =>
				bgColor
					? `${$color(bgColor)}`
					: `${$color("background-color")}`};
			&:-webkit-autofill,
			.dark &:-webkit-autofill,
			&:-webkit-autofill:hover,
			.dark &:-webkit-autofill:hover,
			&:-webkit-autofill:focus,
			.dark &:-webkit-autofill:focus,
			&:-webkit-autofill:active .dark &:-webkit-autofill:active {
				-webkit-box-shadow: 0 0 0 30px ${({bgColor})=>$color(bgColor ?? "white")} inset !important;
				color: ${({ textColor }) => $color(textColor)};
				-webkit-text-fill-color: ${({ textColor }) =>
					$color(textColor)};
			}
		}
	}
	.error-span {
		color: ${({ errorColor }) => $color(errorColor)};
	}
	&.submitting,
	&.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
	&.compiled,
	&.focused {
		> .label,
		.icon-wrapper > * {
			color: ${({ focusColor }) => $color(focusColor)};
		}
		.focus-box {
			background-color: ${({ focusColor }) => $color(focusColor)};
		}
	}
	&.disabled {
		> .label,
		.icon-wrapper > * {
			color: ${({ disabledColor }) => $color(disabledColor)};
		}
		.focus-box {
			background-color: ${({ disabledColor }) => $color(disabledColor)};
		}
	}
	&.error {
		> .label {
			color: ${({ errorColor }) => $color(errorColor)};
		}
		.focus-box {
			background-color: ${({ errorColor }) => $color(errorColor)};
		}
	}
`;

export const InputLabel = styled.label`
	z-index: 2;
	position: absolute;
	left: ${$uw(0.5)};
	top: 2px;
	font-size: 1%.8rem;
	transition: top 0.5s ease-in, left 0.5s ease-in, color 0.5s ease-in,
		font-size 0.5s ease-in;
	&.focused,
	&.compiled {
		font-size: 1.4rem;
		top: ${$uw(-1.5)};
		left: 0px;
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	padding: 0 0 2px 2px;
	border-radius: 2px;
	border-top-right-radius: 0;
	height: ${$uw(1.5)};

	overflow: hidden;
	z-index: 1;
`;

export const IconWrapper = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	right: 0;
	> * {
		font-size: 2.4rem;
	}
`;

export const FocusBox = styled.span`
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
		width: calc(100% + 1px);
		max-height: 100%;
		transition: background-color 1s cubic-bezier(0.02, 1.17, 0, 0.97) 0s,
			width 0.5s ease-out, max-height 0.5s ease-out;
	}
	&.compiled {
		width: calc(100% + 1px);
		max-height: 100%;
	}
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	position: relative;
	z-index: 2;
	background-image: none;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	font-size: 1.5rem;
	box-shadow: none;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	padding-left: ${$uw(0.5)};
	padding-bottom: ${$uw(0.4)};
`;

export const ErrorSpan = styled.span`
	font-size: 1.3rem;
`;
