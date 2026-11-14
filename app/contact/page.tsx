import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { InfoPage } from "../info-page";

export const metadata: Metadata = {
  title: "Contact Game Arcade",
  description:
    "Contact Game Arcade by form, email, phone, or WhatsApp. Optional voluntary support amounts are listed; payment QR will appear when provided.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Game Arcade",
    description: "Send a message to Game Arcade or find direct email, phone, and WhatsApp contact options.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const hasPaymentQr = existsSync(join(process.cwd(), "public", "games", "images", "QR.jpeg"));
  return <InfoPage page="contact" hasPaymentQr={hasPaymentQr} />;
}
