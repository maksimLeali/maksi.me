"use client"
import { ReactNode } from "react";
import { Footer, TopBar } from "./components";
import styled from "styled-components";
// import { DebugGrid } from "./components/debugGrid";
import { DebugGrid } from "@lemaks/grid_system";
import { $uw } from "@lemaks/grid_system";

type Props = {
	children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<Container>
			<TopBar />
			<MainWrapper id="mainWrapper">
				<MainBody>{children}</MainBody>
				<DebugGrid />
			</MainWrapper>
			<Footer />
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainWrapper = styled.div`
	max-width: var(--max-width);
	width: 100%;
	display: flex;
`;

const MainBody = styled.div`
	width: 100%;
	padding-top: ${$uw(3)};
`;
