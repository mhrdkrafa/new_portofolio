import type { Metadata } from "next";

export const DEFAULT_SITE_TITLE = "Mahardika Rafa — Systems Architect & Creative Full-Stack Engineer";
export const DEFAULT_SITE_DESCRIPTION =
  "Personal portfolio and technical showcase of Mahardika Rafa. Architecting resilient distributed systems, sub-second headless web applications, and deterministic motion choreographies.";
export const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mahardika.dev";

export function constructMetadata({
  title = DEFAULT_SITE_TITLE,
  description = DEFAULT_SITE_DESCRIPTION,
  image = "/og-image.png",
  canonical,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title === DEFAULT_SITE_TITLE ? title : `${title} | Mahardika Rafa`;
  const fullImage = image.startsWith("http") ? image : `${DEFAULT_SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    title: {
      default: fullTitle,
      template: "%s | Mahardika Rafa",
    },
    description,
    metadataBase: new URL(DEFAULT_SITE_URL),
    alternates: {
      canonical: canonical || DEFAULT_SITE_URL,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || DEFAULT_SITE_URL,
      siteName: "Mahardika Rafa Portfolio",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: "@mhrdkrafa",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
