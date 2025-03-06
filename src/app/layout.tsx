import StyledComponentsRegistry from "../layouts/StyledComponentsRegistry";
import './globals.css';
import { MainLayout } from "@layouts";

export const metadata = {
  title: "My App",
  description: "A Next.js app with styled-components and SSR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry >
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>

          <MainLayout>
            {children}
          </MainLayout>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
