import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the terms for using Game Arcade and its browser-based games.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Game Arcade Terms and Conditions",
    description: "Basic terms for using the Game Arcade website and browser games.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return <InfoPage page="terms" />;
}
