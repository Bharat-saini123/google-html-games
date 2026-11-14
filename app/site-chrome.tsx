import Link from "next/link";

const policyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Game Arcade home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span>Game Arcade</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#game-library">Games</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="header-cta" href="/#game-library">Find a game <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>Game Arcade</span>
          </Link>
          <p>A browser game collection with clear guides and controls.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-heading">Explore</span>
            <Link href="/#game-library">All games</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div>
            <span className="footer-heading">Information</span>
            {policyLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Game Arcade</span>
        <span>Made for a little play, right in your browser.</span>
      </div>
    </footer>
  );
}
