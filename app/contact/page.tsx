import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "Contact Game Arcade",
  description:
    "Contact information for Game Arcade. No public email address or contact form is currently available.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Game Arcade",
    description: "Current contact options and how to report a game loading issue.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <InfoPage page="contact" />;
}
