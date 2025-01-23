import styled from "styled-components";
import { $breakPoint, $color, $uw } from "@theme";

type wrapperProps = {
	$maincolor: string;
	$focuscolor: string;
	$errorcolor: string;
	$disabledcolor: string;
	$textcolor: string;
	$bgcolor?: string;
};

export const Wrapper = styled.div<wrapperProps>`
	width: 100%;
	position: relative;
	height: ${$uw(2.5)};
	margin-bottom: ${$uw(1.5)};
	> .label,
	.icon-wrapper > * {
		color: ${({ $maincolor }) => $color($maincolor)};
	}
	> .input-wrapper {
		background-color: ${({ $maincolor }) => $color($maincolor)};
		> input {
			color: ${({ $textcolor }) => $color($textcolor)};
			background-color: ${({ $bgcolor }) =>
				$bgcolor
					? `${$color($bgcolor)}`
					: `${$color("background-color")}`};
			&:-webkit-autofill,
			.dark &:-webkit-autofill,
			&:-webkit-autofill:hover,
			.dark &:-webkit-autofill:hover,
			&:-webkit-autofill:focus,
			.dark &:-webkit-autofill:focus,
			&:-webkit-autofill:active .dark &:-webkit-autofill:active {
				-webkit-box-shadow: 0 0 0 30px ${({$bgcolor})=>$color($bgcolor ?? "white")} inset !important;
				color: ${({ $textcolor }) => $color($textcolor)};
				-webkit-text-fill-color: ${({ $textcolor }) =>
					$color($textcolor)};
			}
		}
	}
	.error-span {
		color: ${({ $errorcolor }) => $color($errorcolor)};
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
			color: ${({ $focuscolor }) => $color($focuscolor)};
		}
		.focus-box {
			background-color: ${({ $focuscolor }) => $color($focuscolor)};
		}
	}
	&.disabled {
		> .label,
		.icon-wrapper > * {
			color: ${({ $disabledcolor }) => $color($disabledcolor)};
		}
		.focus-box {
			background-color: ${({ $disabledcolor }) => $color($disabledcolor)};
		}
	}
	&.error {
		> .label {
			color: ${({ $errorcolor }) => $color($errorcolor)};
		}
		.focus-box {
			background-color: ${({ $errorcolor }) => $color($errorcolor)};
		}
	}
	${$breakPoint(940)}{
		height: ${$uw(3)};
	}
	${$breakPoint(780)}{
		height: ${$uw(4)};
		margin-bottom: ${$uw(4)};
	}
	${$breakPoint(560)}{
		margin-bottom: ${$uw(5)};

	}
	${$breakPoint(480)}{
		height:${$uw(6)};
		margin-bottom: ${$uw(8)};
	}
`;

export const InputLabel = styled.label`
	z-index: 2;
	position: absolute;
	left: ${$uw(0.5)};
	top: 2px;
	font-size: 1.8rem;
	transition: top 0.5s ease-in, left 0.5s ease-in, color 0.5s ease-in,
		font-size 0.5s ease-in;
	&.focused,
	&.compiled {
		font-size: 1.4rem;
		top: ${$uw(-1.3)};
		left: 0px;
	}
	${$breakPoint(780)}{
		font-size: 2.2rem;
		left: ${$uw(1)};
		&.focused,
		&.compiled {
			font-size: 1.8rem;
			top: ${$uw(-2.5)};
		}
	}
	${$breakPoint(560)}{
		left: ${$uw(2)};
		&.focused,
		&.compiled {
			font-size: 1.8rem;
			top: ${$uw(-3.5)};
		}
	}
	
`;

export const InputWrapper = styled.div`
	position: relative;
	padding: 0 0 2px 2px;
	border-radius: 2px;
	border-top-right-radius: 0;
	height: ${$uw(1.5)};
	display:flex;
	overflow: hidden;
	z-index: 1;
	${$breakPoint(940)}{
		height: ${$uw(2)};
	}
	${$breakPoint(780)}{
		height: ${$uw(3.5)};
	}

	${$breakPoint(480)}{
		height:${$uw(6)};
	}
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
	${$breakPoint(780)}{
		padding-left: ${$uw(1)};
		padding-bottom: ${$uw(0.8)};
		font-size: 2rem;
	}
	${$breakPoint(560)}{
		padding-left: ${$uw(2)};
	}
`;

export const ErrorSpan = styled.span`
	font-size: 1.3rem;
`;
