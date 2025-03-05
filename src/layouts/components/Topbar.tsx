"use client"
import { $color, $cssTRBL, $uw } from "@lemaks/grid_system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const TopBar: React.FC = () => {


	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<TopBarContainer className={`menu ${isScrolled ? "scrolled" : ""}`}>
			<Wrapper>
				<Nav>
					<ImageWrapper>
						<img src="/logo_dark.svg" alt="logo" />
						<img className="light" src="/logo.svg" alt="logo" />
					</ImageWrapper>
				</Nav>
				<Nav>
					<p className="nav-link">
						HOME
					</p>
				</Nav>
				<Nav>
					<p className="nav-link">
						POST
					</p>
				</Nav>
				<Nav>
					<p className="nav-link">
						ABOUT ME
					</p>
				</Nav>
				<Nav>
					<p className="nav-link">
						CONTATTI
					</p>
				</Nav>
			</Wrapper>
		</TopBarContainer>
	);
};

const TopBarContainer = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	background-color: ${$color("white-dark")};
	justify-content: center;
	border-bottom: 1px solid #ccc;
	position: fixed;
	top: 0;
	z-index: 10;
	transition: background-color 0.5s ease-in, color 0.5s ease-out;
	color: ${$color("white")};
	&.scrolled {
		background-color: ${$color("glass-dark")};
		backdrop-filter: blur(8px);
		.logo {
			background-color: ${$color("white")};
		}
		*{
			color: ${$color("white")};
		}
		
	}
	
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: var(--max-width);
	height: 100%;
	box-sizing: border-box;
	justify-content: flex-start;
	padding: ${$cssTRBL(0,1)};
	height: ${$uw(3)};
	gap:${$uw(1)};
	color: ${$color("black")};
		
	
	.logo {
		background-color: ${$color("black")};
	}
	
	
`

const ImageWrapper = styled.div`
	width: ${$uw(2.5)};
	height: ${$uw(2.5)};
	position: relative;
	transition: background-color 0.5s ease-in;	
	> img {
		position: absolute;
		transition: opacity .5s ease-in-out;
	}
	.scrolled &>.light{
		opacity: 0;
	}
`;

const Nav = styled.nav`
	display: flex;
	align-items: flex-start;
	gap: 20px;
`;


const AuthContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${$uw(1)};
	justify-self: flex-end;
	margin-left: auto;
`;