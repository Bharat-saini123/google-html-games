import type { MetadataRoute } from "next";
import { games, siteUrl } from "./games-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];
  const gamePages = games.map((game) => `/play/${game.slug}`);

  return [...pages, ...gamePages].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/play/") ? 0.8 : 0.5,
  }));
}
