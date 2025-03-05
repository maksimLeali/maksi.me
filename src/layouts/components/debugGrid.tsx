import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable as GSAPDraggable } from "gsap/dist/Draggable";
import { useState } from "react";
import styled from "styled-components";
import { useHotkeys } from "react-hotkeys-hook";
import { $breakPoint, $color, $cssTRBL, $uw } from "@lemaks/grid_system";


gsap.registerPlugin(GSAPDraggable);

export const DebugGrid: React.FC = () => {
	const [gridHeight, setGridHeigth] = useState(3);

	const [visible, setVisible] = useState(false);
	useGSAP(() => {
		GSAPDraggable.create("#debugGrid", { bounds: "#mainWrapper" });
	}, []);
	useHotkeys("mod+alt+g", () =>
		setVisible(!visible) 
	);

	const editGridHeight = (num: number) => {
		if (gridHeight + num < 3) return;
		setGridHeigth(gridHeight + num);
	};

	return (
		<Container id="debugGrid" $gridheight={gridHeight} $visible={visible}>
			<Action
				onClick={(e) => {
					e.preventDefault();
					editGridHeight(-1);
				}}
				onTouchEnd={(e) => {
					e.preventDefault();
					editGridHeight(-1);
				}}
				className="remove"
			>
				-
			</Action>
			<Action
				onClick={(e) => {
					e.preventDefault();
					editGridHeight(1);
				}}
				onTouchEnd={(e) => {
					e.preventDefault();
					editGridHeight(1);
				}}
				className="add"
			>
				+
			</Action>
		</Container>
	);
};

const Container = styled.div<{ $gridheight: number; $visible: boolean }>`
	width: var(--max-grid-size);
	height: ${({ $gridheight }) => $uw($gridheight)};
	position: fixed;
	top: 0;
	box-sizing: border-box;
	z-index: ${({ $visible }) => ($visible ? 999 : `-1!important`)};
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: ${$cssTRBL(1)};

	border-bottom: 1px solid var(--grid-color);
	border-right: 2px solid var(--grid-color);
	background-size: calc(var(--max-grid-size) / var(--grid-columns-number))
		calc(var(--max-grid-size) / var(--grid-columns-number));
	background-image: linear-gradient(
			to right,
			var(--grid-color) 1px,
			transparent 1px
		),
		linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
`;

const Action = styled.button`
	width: ${$uw(1)};
	height: ${$uw(1)};
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: unset;
	font-weight: 800;
	font-size: 2.5rem;
	border-width: 2px;
	border-style: solid;

	${$breakPoint(380)} {
		font-size: 1.6rem;
		border-width: 1px;
	}
	&.remove {
		border-color: ${$color("danger")};
		color: ${$color("danger")};
	}
	&.add {
		border-color: ${$color("success")};
		color: ${$color("success")};
	}
`;
