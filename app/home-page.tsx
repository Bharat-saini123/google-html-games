"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, games, siteUrl } from "./games-data";

const featuredGames = games.filter((game) => game.featured);
const popularGames = games.filter((game) => game.popular);
const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Game Arcade",
      url: siteUrl,
      description:
        "A browser gaming portal for racing, action, puzzle, memory, and arcade games.",
    },
    {
      "@type": "ItemList",
      name: "Free browser games",
      numberOfItems: games.length,
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.title,
        url: `${siteUrl}/play/${game.slug}`,
      })),
    },
  ],
};

function GameCard({
  game,
  label,
}: {
  game: (typeof games)[number];
  label?: string;
}) {
  return (
    <Link className="game-card" href={`/play/${game.slug}`}>
      <span className={`game-art art-${game.categories[0].toLowerCase().replace(/[^a-z]+/g, "-")}`} role="img" aria-label={`${game.title} game artwork`}>
        <span aria-hidden="true">{game.icon}</span>
        <span className="art-category">{game.categories[0]}</span>
      </span>
      <span className="game-card-copy">
        <span className="game-card-topline">
          <span className="game-category">{game.categories[0]}</span>
          {label && <span className="game-label">{label}</span>}
        </span>
        <span className="game-card-title">{game.title}</span>
        <span className="game-card-description">{game.description}</span>
        <span className="game-card-link">Game guide &amp; play <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All games");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGames = useMemo(
    () =>
      games.filter((game) => {
        const categoryMatches =
          activeCategory === "All games" || game.categories.includes(activeCategory);
        const searchMatches = `${game.title} ${game.description} ${game.categories.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);
        return categoryMatches && searchMatches;
      }),
    [activeCategory, normalizedQuery],
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">A little play goes a long way</span>
          <h1>Find your next favorite <span>browser game.</span></h1>
          <p>
            Race through city streets, take on an arcade challenge, or slow down
            with a puzzle. Browse the collection, get the controls, and jump
            straight into the game.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#game-library">Explore all games <span aria-hidden="true">↓</span></a>
            <span className="hero-note">15 games · Play in your browser</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
          <span className="hero-icon hero-icon-car">🏎️</span>
          <span className="hero-icon hero-icon-puzzle">🧩</span>
          <span className="hero-icon hero-icon-arcade">🎮</span>
          <span className="hero-star">✦</span>
          <span className="hero-caption">Choose a game.<br />Make it your own.</span>
        </div>
      </section>

      <section className="intro-band" aria-labelledby="welcome-heading">
        <div>
          <span className="eyebrow">Welcome to Game Arcade</span>
          <h2 id="welcome-heading">A straightforward place to play</h2>
        </div>
        <p>
          This independent collection brings together racing, action, memory,
          and puzzle games in one easy-to-browse library. Each game has its own
          page with the objective, controls, and practical tips, so you can
          decide what to play before you start.
        </p>
      </section>

      <section className="collection-section" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Handpicked starting points</span>
            <h2 id="featured-heading">Featured games</h2>
          </div>
          <a className="text-link" href="#game-library">See the full collection <span aria-hidden="true">→</span></a>
        </div>
        <div className="featured-grid">
          {featuredGames.map((game) => <GameCard game={game} key={game.slug} label="Featured" />)}
        </div>
      </section>

      <section className="collection-section popular-section" aria-labelledby="popular-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A few easy picks</span>
            <h2 id="popular-heading">Popular games</h2>
          </div>
          <p className="section-note">A curated mix of quick races, action, and puzzles.</p>
        </div>
        <div className="popular-grid">
          {popularGames.map((game) => <GameCard game={game} key={game.slug} />)}
        </div>
      </section>

      <section className="library-section" id="game-library" aria-labelledby="library-heading">
        <div className="section-heading library-heading">
          <div>
            <span className="eyebrow">Browse the collection</span>
            <h2 id="library-heading">Games for every kind of break</h2>
          </div>
          <span className="game-count">{visibleGames.length} {visibleGames.length === 1 ? "game" : "games"}</span>
        </div>
        <div className="library-controls">
          <label className="search-field">
            <span className="visually-hidden">Search games by title or category</span>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search games or categories"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button type="button" className="clear-search" onClick={() => setQuery("")} aria-label="Clear search">×</button>
            )}
          </label>
          <div className="category-filters" aria-label="Filter games by category">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`category-filter${activeCategory === category ? " active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {visibleGames.length ? (
          <div className="game-grid" aria-live="polite">
            {visibleGames.map((game) => <GameCard game={game} key={game.slug} />)}
          </div>
        ) : (
          <p className="empty-state" role="status">
            No games match that search. Try another title or choose a different category.
          </p>
        )}
      </section>

      <section className="closing-panel">
        <span className="closing-mark" aria-hidden="true">✦</span>
        <div>
          <span className="eyebrow">More than a play button</span>
          <h2>Know the game before you jump in.</h2>
          <p>Every game page includes its own guide, controls, objective, and answers to common questions.</p>
        </div>
        <a className="button button-secondary" href="#game-library">Browse the games <span aria-hidden="true">→</span></a>
      </section>
    </main>
  );
}
