import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the Game Arcade disclaimer about third-party assets, game availability, and site content.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Game Arcade Disclaimer",
    description: "Information about third-party content and the availability of games on Game Arcade.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return <InfoPage page="disclaimer" />;
}
