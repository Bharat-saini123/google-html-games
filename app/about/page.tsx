import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "About Game Arcade",
  description:
    "Learn about Game Arcade, a browser game collection with clear guides for racing, action, puzzle, memory, and arcade games.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Game Arcade",
    description: "What Game Arcade offers and how its game guides are organized.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <InfoPage page="about" />;
}
