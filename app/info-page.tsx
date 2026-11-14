import Link from "next/link";
import ContactForm from "./contact-form";

type InfoSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type InfoPageKey = "about" | "contact" | "privacy" | "terms" | "disclaimer";

const pages: Record<
  InfoPageKey,
  { eyebrow: string; title: string; intro: string; sections: InfoSection[] }
> = {
  about: {
    eyebrow: "A little about this site",
    title: "About Game Arcade",
    intro:
      "Game Arcade is a browser-based collection for people who want a quick game and a clear place to start.",
    sections: [
      {
        heading: "What you’ll find here",
        paragraphs: [
          "The library brings together car and bike races, arcade action, a cricket challenge, and relaxed puzzle and memory games. Each title has a dedicated guide with its objective, controls, practical tips, features, and answers to common questions.",
          "Games open in the browser, without a separate download from this site. Some games load 3D libraries or game assets from third-party hosting services, so loading time can vary with your device and connection.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We aim to make the collection easy to browse, describe each game plainly, and keep the game itself separate from the information around it. Categories are editorial groupings, not rankings based on tracked play counts.",
          "Game Arcade does not claim ownership of third-party libraries or game assets used by the games. See the Disclaimer for more information about external content and availability.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: [
          "Use the Contact page to send a message or find the published email, phone, and WhatsApp links.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Contact Game Arcade",
    intro:
      "Send a message about a game, the website, or feedback. Your message will be sent by email, or you can contact us by phone or WhatsApp.",
    sections: [
      {
        heading: "How messages are handled",
        paragraphs: [
          "The name, email address, subject, and message you provide are sent to the site owner through Gmail SMTP so they can reply. The website does not save form submissions in its own database; messages remain in the email inbox.",
          "If email delivery is not configured or the service is unavailable, the form will show an error. You can then use the direct email or phone links.",
        ],
      },
      {
        heading: "Optional support",
        paragraphs: [
          "₹49, ₹99, ₹199, and custom amounts are optional suggestions for voluntary support. Games will remain free, and contributions do not unlock paid features.",
        ],
      },
      {
        heading: "Game loading issue?",
        paragraphs: [
          "You can try reloading the game page or opening the game directly from its player page. Some games depend on third-party scripts or 3D assets, so a connection issue with those services can prevent part of a game from loading.",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Your information",
    title: "Privacy Policy",
    intro:
      "This page describes the information handled by the current Game Arcade website and its browser games. It does not replace the privacy notices of third-party services used to deliver game content.",
    sections: [
      {
        heading: "Information collected by this website",
        paragraphs: [
          "The site does not provide user accounts, comments, or paid game access. If you use the contact form, your name, email address, subject, and message are sent to the site owner’s inbox through Gmail SMTP so they can respond. The website does not save form submissions in its own database; messages remain in the email inbox and may be retained there according to its settings.",
          "If you choose the WhatsApp link, WhatsApp receives information according to its own privacy policy. A direct phone call or email opens the relevant app on your device.",
          "The hosting provider may process standard request information to deliver and protect the website. We do not operate a site-specific analytics dashboard or advertising placement at this time.",
        ],
      },
      {
        heading: "Voluntary support",
        paragraphs: [
          "The contact page may offer optional voluntary support suggestions. The site does not provide paid game access or store payment credentials. If you choose to pay using a QR code, your payment app and payment provider process the transaction under their own privacy policies. Confirm the recipient and amount in your payment app before sending.",
        ],
      },
      {
        heading: "Browser storage",
        paragraphs: [
          "Some individual games save a best score or a small game preference in your browser’s local storage. This lets that game remember the value on the same browser and device. It is not an account and is not synchronized by this site.",
          "You can clear site data through your browser settings. Clearing it may remove saved game scores or preferences.",
        ],
      },
      {
        heading: "Third-party game assets",
        paragraphs: [
          "Certain games load libraries or 3D models from external providers, including public JavaScript CDNs and an asset host. When your browser requests those files, the provider may receive standard technical information such as your IP address and browser request details, subject to that provider’s own privacy terms.",
          "The games may not load fully if those providers are unavailable or blocked. Review the relevant provider’s privacy notice if you want to understand how it handles requests.",
        ],
      },
      {
        heading: "Advertising and cookies",
        paragraphs: [
          "Pages on this website load Google AdSense’s JavaScript library with the site’s configured publisher ID. This project does not define an in-page ad unit; whether Google displays ads can depend on the publisher’s AdSense settings and review status. Loading the library may involve Google processing technical information or using cookies under its own policies. If the site’s advertising setup changes, this policy and any required consent experience should be reviewed.",
        ],
      },
      {
        heading: "Children and policy changes",
        paragraphs: [
          "This site does not request a visitor’s age or intentionally collect children’s personal information. Parents and guardians should supervise children’s browser use and review the practices of any third-party service a game contacts.",
          "If the site’s data practices change, this policy will be revised to describe the change. Contact the site owner using the contact page for privacy questions.",
        ],
      },
      {
        heading: "Last updated",
        paragraphs: ["November 14, 2026."],
      },
    ],
  },
  terms: {
    eyebrow: "Using this website",
    title: "Terms and Conditions",
    intro:
      "These terms describe the basic conditions for using Game Arcade and its browser game pages. If you do not agree with them, please stop using the site.",
    sections: [
      {
        heading: "The service",
        paragraphs: [
          "Game Arcade provides a browsable catalog and links to games that run in your browser. The service is provided without a promise that every page, game, feature, or third-party asset will be available at all times or on every device.",
          "Some games use external libraries or assets and may be affected by those providers, browser settings, or network conditions.",
        ],
      },
      {
        heading: "Acceptable use",
        bullets: [
          "Use the site lawfully and do not interfere with its operation or other visitors’ access.",
          "Do not attempt to disrupt, damage, or gain unauthorized access to the site, its hosting, or third-party services.",
          "Respect the rights and terms that apply to third-party game content, libraries, and assets.",
        ],
      },
      {
        heading: "Content and availability",
        paragraphs: [
          "Game descriptions and guides are provided to explain gameplay and controls. Controls may vary by device or change if a game is updated. The site and game content are offered as available, without a guarantee of uninterrupted service or suitability for a particular purpose.",
          "Third-party content remains subject to its respective owner’s terms. Linking to or loading an external asset does not mean that Game Arcade owns or endorses that provider.",
        ],
      },
      {
        heading: "Voluntary support",
        paragraphs: [
          "Any support options on the contact page are voluntary. Games remain free, and a contribution does not buy access, features, or a promised benefit. Check the recipient and amount in your payment app before confirming a transfer.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "These terms may be updated when the site or its practices change. Continued use after an update means you are using the site under the revised terms.",
          "See the Contact page for the available ways to reach the site owner.",
        ],
      },
      {
        heading: "Last updated",
        paragraphs: ["November 14, 2026."],
      },
    ],
  },
  disclaimer: {
    eyebrow: "Important information",
    title: "Disclaimer",
    intro:
      "Game Arcade is an independent browser game catalog. Please keep the following limitations in mind when using the site.",
    sections: [
      {
        heading: "Entertainment and accuracy",
        paragraphs: [
          "Games and guides are provided for general entertainment and information. We make an effort to describe objectives and controls clearly, but game behavior can vary by device, browser, or version. The site is provided as available and without a guarantee that every game will work in every environment.",
        ],
      },
      {
        heading: "Third-party content",
        paragraphs: [
          "Some games load JavaScript libraries or 3D assets from third-party providers. Those providers control their own services and content. Game Arcade does not guarantee their availability, and their presence does not imply sponsorship or endorsement.",
          "Game names, marks, and third-party components belong to their respective owners. Their appearance here is for identification and gameplay access; it does not imply affiliation with those owners.",
        ],
      },
      {
        heading: "No professional advice or guaranteed outcomes",
        paragraphs: [
          "Nothing on this site is professional, financial, or technical advice. Game scores and outcomes are for entertainment and are not guaranteed.",
        ],
      },
      {
        heading: "Advertising",
        paragraphs: [
          "Pages on this website load the Google AdSense library, but this project does not define an in-page ad unit. Ads may depend on the publisher’s settings and Google’s review. Any advertisements added to the site should be kept separate from game controls. No AdSense review or approval is guaranteed.",
        ],
      },
      {
        heading: "Last updated",
        paragraphs: ["November 14, 2026."],
      },
    ],
  },
};

export function InfoPage({
  page,
  hasPaymentQr = false,
}: {
  page: InfoPageKey;
  hasPaymentQr?: boolean;
}) {
  const content = pages[page];

  return (
    <main className="content-page info-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{content.title}</span>
      </nav>
      <header className="info-heading">
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p className="detail-lead">{content.intro}</p>
      </header>
      <article className="info-article">
        {content.sections.map((section) => (
          <section className="info-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {page === "privacy" && section.heading === "Advertising and cookies" && (
              <p>
                Read{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Google’s Privacy Policy
                </a>{" "}
                for information about Google’s data practices.
              </p>
            )}
            {section.bullets && (
              <ul className="guide-list">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </section>
        ))}
      </article>
      {page === "contact" && <ContactForm hasPaymentQr={hasPaymentQr} />}
    </main>
  );
}
