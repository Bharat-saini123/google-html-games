import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://google-html-games.vercel.app"),
  title: {
    default: "Game Arcade | Free Browser Games",
    template: "%s | Game Arcade",
  },
  description:
    "Browse and play free browser games, from racing and action to puzzles, memory, and arcade challenges.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Game Arcade",
    title: "Game Arcade | Free Browser Games",
    description:
      "Browse and play free browser games, from racing and action to puzzles, memory, and arcade challenges.",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477873571714584"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
