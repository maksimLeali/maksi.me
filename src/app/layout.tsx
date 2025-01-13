import StyledComponentsRegistry from "../layouts/StyledComponentsRegistry";
import './globals.css'
import { MainLayout } from "@layouts";

export const metadata = {
  title: "My App",
  description: "A Next.js app with styled-components and SSR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <MainLayout>

          {children}
          </MainLayout>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
