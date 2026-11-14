"use client";

import { useRef, useState } from "react";
import type { Game } from "./games-data";

export default function GamePlayer({ game }: { game: Game }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);

  async function toggleFullscreen() {
    setFullscreenError(false);
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await sectionRef.current?.requestFullscreen();
      }
    } catch {
      setFullscreenError(true);
    }
  }

  return (
    <section className="player-panel" aria-labelledby="player-heading" ref={sectionRef}>
      <div className="player-toolbar">
        <div>
          <span className="eyebrow">Play in your browser</span>
          <h2 id="player-heading">{game.title}</h2>
        </div>
        <button className="button button-outline" type="button" onClick={toggleFullscreen}>
          Fullscreen <span aria-hidden="true">⛶</span>
        </button>
      </div>
      <div className="player-frame">
        {!loaded && !loadError && (
          <div className="player-status" role="status">
            <span className="loading-spinner" aria-hidden="true" />
            <span>Loading {game.title}…</span>
          </div>
        )}
        {loadError && (
          <div className="player-status player-error" role="alert">
            <p>The game could not be loaded in this frame.</p>
            <a href={game.assetPath} target="_blank" rel="noreferrer">Open the game directly</a>
          </div>
        )}
        <iframe
          className="game-iframe"
          src={game.assetPath}
          title={`${game.title} browser game`}
          allow="fullscreen; gamepad"
          onLoad={() => setLoaded(true)}
          onError={() => setLoadError(true)}
        />
      </div>
      {fullscreenError && (
        <p className="player-feedback" role="status">
          Fullscreen is unavailable in this browser. You can continue playing in the embedded game.
        </p>
      )}
      <p className="player-caption">
        The game loads inside this page. Use its controls below or in the game’s start screen.
      </p>
    </section>
  );
}
