import type { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Free Browser Games for Racing, Puzzles & More",
  description:
    "Browse and play 15 free browser games, from car and bike racing to action, memory, puzzle, and arcade challenges. Find controls and tips for every game.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Free Browser Games for Racing, Puzzles & More",
    description:
      "Find your next browser game in a collection of racing, action, puzzle, memory, and arcade favorites.",
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
