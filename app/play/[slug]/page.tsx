import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../game-player";
import { games, getGame, siteUrl } from "../../games-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};

  const description = `${game.description} Learn the objective, controls, and tips, then play ${game.title} in your browser.`;
  const url = `${siteUrl}/play/${game.slug}`;

  return {
    title: `${game.title} - Play Online and Game Guide`,
    description,
    alternates: { canonical: `/play/${game.slug}` },
    openGraph: {
      type: "website",
      title: `${game.title} - Play Online`,
      description,
      url,
    },
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const relatedGames = games
    .filter((candidate) =>
      candidate.slug !== game.slug &&
      candidate.categories.some((category) => game.categories.includes(category)),
    )
    .slice(0, 3);

  return (
    <main className="content-page game-detail">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{game.title}</span>
      </nav>
      <header className="game-detail-heading">
        <div>
          <div className="detail-categories">
            {game.categories.map((category) => <span className="game-category" key={category}>{category}</span>)}
          </div>
          <h1>{game.title}</h1>
          <p className="detail-lead">{game.description}</p>
        </div>
        <span className="detail-icon" role="img" aria-label={`${game.title} icon`}>{game.icon}</span>
      </header>

      <GamePlayer game={game} />

      <article className="game-guide">
        <section className="guide-section" aria-labelledby="about-game-heading">
          <span className="eyebrow">Game guide</span>
          <h2 id="about-game-heading">About {game.title}</h2>
          <p>{game.description} This guide explains the main objective, how its controls work, and a few practical ways to approach a run.</p>
        </section>

        <section className="guide-section guide-highlight" aria-labelledby="objective-heading">
          <div className="guide-symbol" aria-hidden="true">◎</div>
          <div>
            <h2 id="objective-heading">Game objective</h2>
            <p>{game.objective}</p>
          </div>
        </section>

        <section className="guide-section" aria-labelledby="how-to-play-heading">
          <span className="eyebrow">Getting started</span>
          <h2 id="how-to-play-heading">How to play</h2>
          <p>{game.howToPlay}</p>
        </section>

        <section className="guide-section" aria-labelledby="controls-heading">
          <span className="eyebrow">Keyboard, mouse &amp; touch</span>
          <h2 id="controls-heading">Controls</h2>
          <ul className="guide-list">
            {game.controls.map((control) => <li key={control}>{control}</li>)}
            {!game.controls.some((control) => /\b(mouse|click)\b/i.test(control)) && (
              <li>Mouse: no mouse-based gameplay input is listed for this game; use the keyboard or touch controls above.</li>
            )}
          </ul>
        </section>

        <section className="guide-section" aria-labelledby="tips-heading">
          <span className="eyebrow">A few ideas to try</span>
          <h2 id="tips-heading">Tips and strategies</h2>
          <ul className="guide-list">
            {game.tips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </section>

        <section className="guide-section" aria-labelledby="features-heading">
          <span className="eyebrow">What to expect</span>
          <h2 id="features-heading">Game features</h2>
          <ul className="feature-list">
            {game.features.map((feature) => <li key={feature}><span aria-hidden="true">✦</span>{feature}</li>)}
          </ul>
        </section>

        <section className="guide-section faq-section" aria-labelledby="faq-heading">
          <span className="eyebrow">Helpful answers</span>
          <h2 id="faq-heading">Frequently asked questions</h2>
          {game.faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </article>

      <section className="related-section" aria-labelledby="related-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Keep exploring</span>
            <h2 id="related-heading">Related games</h2>
          </div>
          <Link className="text-link" href="/">View all games <span aria-hidden="true">→</span></Link>
        </div>
        <div className="related-grid">
          {relatedGames.map((related) => (
            <Link className="related-card" href={`/play/${related.slug}`} key={related.slug}>
              <span aria-hidden="true">{related.icon}</span>
              <span><strong>{related.title}</strong><small>{related.description}</small></span>
              <span className="related-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
