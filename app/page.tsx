"use client";

import { useMemo, useState } from "react";

const games = [
  {
    title: "Road Rage Arena",
    description: "Battle rival cars and survive the arena.",
    icon: "🚗💥",
    href: "/games/ROAD_RAAGE/index.html",
    categories: ["car games", "shooting games"],
  },
  {
    title: "Turbo Circuit",
    description: "Race through three laps and chase first place.",
    icon: "🏁",
    href: "/games/car_race/index.html",
    categories: ["car games"],
  },
  {
    title: "Animal Memory Match",
    description: "Flip the cards and match all the animals.",
    icon: "🐾",
    href: "/games/kinda%20memory/index.html",
    categories: ["puzzle & memory"],
  },
  {
    title: "Fun Puzzle",
    description: "Choose a picture and complete a fun puzzle.",
    icon: "🧩",
    href: "/games/puzzle/index.html",
    categories: ["puzzle & memory"],
  },
  {
    title: "Sky Dash 3D",
    description: "Dodge obstacles and collect coins in the sky.",
    icon: "☁️",
    href: "/games/sky-dash/index.html",
    categories: ["arcade games"],
  },
  {
    title: "Turbo Bike GP",
    description: "Speed around the track and race to the finish.",
    icon: "🏍️",
    href: "/games/turbo_bike/index.html",
    categories: ["bike games"],
  },
  {
    title: "Turbo Cricket",
    description: "Aim your shots and chase the target score.",
    icon: "🏏",
    href: "/games/turbo_cricket/index.html",
    categories: ["arcade games"],
  },
  {
    title: "Turbo Bike Combat",
    description: "Race the pack and take on rival riders.",
    icon: "🏍️🔫",
    href: "/games/turbo_combacg_bike_race/index.html",
    categories: ["bike games", "shooting games"],
  },
  {
    title: "Turbo Combat Race",
    description: "Compete in a high-speed combat race.",
    icon: "🚘🔫",
    href: "/games/turbo_combact_race/index.html",
    categories: ["car games", "shooting games"],
  },
  {
    title: "Turbo Strike",
    description: "Survive enemy waves in an action arena.",
    icon: "🎯",
    href: "/games/turbo_strike/index.html",
    categories: ["shooting games", "arcade games"],
  },
] as const;

const filters = [
  "all games",
  "car games",
  "bike games",
  "shooting games",
  "puzzle & memory",
  "arcade games",
] as const;

type Filter = (typeof filters)[number];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Game Arcade",
      description:
        "Free browser games including racing, action, puzzle, memory, and arcade games.",
    },
    {
      "@type": "WebPage",
      name: "Game Arcade | Free Online Games",
      description:
        "Browse and play free car, bike, shooting, puzzle, memory, and arcade games.",
    },
    {
      "@type": "ItemList",
      name: "Free online games",
      numberOfItems: games.length,
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.title,
      })),
    },
  ],
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("all games");

  const visibleGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return games.filter((game) => {
      const matchesFilter =
        activeFilter === "all games" ||
        game.categories.includes(activeFilter as (typeof game.categories)[number]);
      const searchableText = `${game.title} ${game.description} ${game.categories.join(" ")}`.toLowerCase();
      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  return (
    <main className="shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="intro">
        <span className="eyebrow">Pick a game and play</span>
        <h1>Game Arcade</h1>
        <p>
          Race, explore, solve puzzles, and test your memory. Choose a game
          below to start playing.
        </p>
      </header>

      <section className="catalog" aria-label="Game catalog">
        <div className="controls">
          <label className="search-label" htmlFor="game-search">
            Search games
          </label>
          <input
            id="game-search"
            className="search"
            type="search"
            placeholder="Search by game or category…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="filters" aria-label="Filter games by category">
            {filters.map((filter) => (
              <button
                className={`filter${activeFilter === filter ? " active" : ""}`}
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <section className="games" aria-label="Available games" aria-live="polite">
          {visibleGames.map((game) => (
            <a className="game" href={game.href} key={game.title}>
              <span className="icon" aria-hidden="true">
                {game.icon}
              </span>
              <h2>{game.title}</h2>
              <span className="description">{game.description}</span>
              <span className="play">Play game →</span>
            </a>
          ))}
          {visibleGames.length === 0 && (
            <p className="empty" role="status">
              No games match your search. Try another title or category.
            </p>
          )}
        </section>
      </section>

      <footer>Choose a game to begin. Have fun!</footer>
    </main>
  );
}
