import React from "react";
import styled from "styled-components";
import { $color, $uw } from "@theme"


export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterText className="menu">
				q3r qwasp oasdp oasurw afakaf jewag rrao agakj odjdao ajoa doagf os gaf
				<FooterLink href="#">system.footer.privacy</FooterLink> |
				<FooterLink href="#">system.footer.tos</FooterLink>
			</FooterText>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	background-color: ${$color("black")};
	color: #fff;
	text-align: center;
	padding: ${$uw(1)};
	height: ${$uw(3)};
	width: 100%;
`;

const FooterText = styled.p`
	margin: 0;
	font-size: 1.4rem;
`;

const FooterLink = styled.a`
	color: ${$color("tertiary")};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;