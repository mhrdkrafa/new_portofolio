import type { Metadata, Viewport } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
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
      <body className="antialiased">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
