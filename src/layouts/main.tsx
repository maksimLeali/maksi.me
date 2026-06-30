"use client";
import { ReactNode, useState } from "react";
import { Footer, TopBar } from "./components";
import styled from "styled-components";
import { DebugGrid } from "@lemaks/grid_system";
import { $breakPoint, $uw } from "@theme";
import { useHotkeys } from "react-hotkeys-hook";
import { I18nProvider } from "@i18n";

type Props = {
    children: ReactNode;
    lang: string;
};

export const MainLayout: React.FC<Props> = ({ children, lang }) => {
    const [visible, setVisible] = useState(false);

    useHotkeys("mod+alt+g", () => setVisible(!visible));
    return (
        <I18nProvider lang={lang}>
            <Container>
                <TopBar />
                <MainWrapper id="mainWrapper">
                    <MainBody>{children}</MainBody>
                    <DebugGrid visible={visible} setVisible={setVisible} />
                </MainWrapper>
                <Footer />
            </Container>
        </I18nProvider>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
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
    ${$breakPoint(820)} {
        padding-top: ${$uw(5)};
    }
    ${$breakPoint(500)} {
        padding-top: ${$uw(7)};
    }
`;
