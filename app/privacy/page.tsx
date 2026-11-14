import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Game Arcade handles browser storage, third-party game assets, advertising, and visitor information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Game Arcade Privacy Policy",
    description: "Information about browser storage, game assets, and privacy on Game Arcade.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return <InfoPage page="privacy" />;
}
