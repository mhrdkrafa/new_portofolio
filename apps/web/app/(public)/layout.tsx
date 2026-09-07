import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { portfolioApi } from "@/lib/api/client";
import type { Profile } from "@/types/api";

interface PublicLayoutProps {
  children: ReactNode;
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  let profile: Profile | null = null;

  try {
    const profileRes = await portfolioApi.getProfile();
    profile = (profileRes as { data: Profile }).data ?? profileRes;
  } catch {
    profile = null;
  }

  const isAvailable = profile?.availability_status === "available";
  const statusText = isAvailable
    ? "Available for Consulting"
    : "Engineering Showcase";

  return (
    <>
      <Header statusText={statusText} isAvailable={isAvailable} />
      <main className="flex-1 flex flex-col">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
