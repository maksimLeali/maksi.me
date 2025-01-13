"use client"
import { $color, $cssTRBL, $uw } from "@theme";
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
				<LogoPlaceholder className="logo" />
				<Nav>
					<p className="nav-link">
						home
					</p>

				</Nav>
				<AuthContainer>
					<p>
						login
					</p>

				</AuthContainer>
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

const LogoPlaceholder = styled.div`
	width: 100px;
	height: 50px;
	transition: background-color 0.5s ease-in;
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