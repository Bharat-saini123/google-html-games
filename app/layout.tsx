import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "Play free browser games in one place, from car and bike racing to action, puzzles, memory challenges, and arcade favorites.";

export const metadata: Metadata = {
  title: "Game Arcade | Free Online Racing, Puzzle & Arcade Games",
  description: siteDescription,
  keywords: [
    "free online games",
    "car games",
    "bike games",
    "shooting games",
    "puzzle games",
    "memory games",
    "arcade games",
    "browser games",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Game Arcade | Free Online Games",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477873571714584"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
