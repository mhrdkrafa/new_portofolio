import type { Metadata, Viewport } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0C" },
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-canvas text-text-primary selection:bg-accent-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
