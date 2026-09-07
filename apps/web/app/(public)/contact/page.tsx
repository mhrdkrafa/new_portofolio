import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Heading, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import type { Profile, WebsiteSetting } from "@/types/api";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Contact & Technical Advisory Inquiries",
    description: "Initiate direct correspondence, architectural consultation, system audits, or collaboration on high-scale web engineering projects.",
    canonical: "/contact",
  }),
};

export default async function ContactPage() {
  let profile: Profile | null = null;
  let contactEmail = "contact@mahardika.dev";
  let githubUrl = "https://github.com/mhrdkrafa";
  let linkedinUrl = "https://linkedin.com/in/mahardikarafa";

  try {
    const profileRes = await portfolioApi.getProfile();
    profile = (profileRes as { data: Profile }).data ?? profileRes;
  } catch {
    profile = {
      id: 1,
      full_name: "Mahardika Rafa",
      headline: "Systems Architect & Creative Full-Stack Engineer",
      bio: "Crafting resilient distributed backends, deterministic motion choreographies, and state-of-the-art digital artifacts.",
      location: "Jakarta, Indonesia",
      availability_status: "available",
      years_experience: 8,
    };
  }

  try {
    const settingsRes = await portfolioApi.getSettings();
    const settings = (settingsRes as { data: WebsiteSetting[] }).data ?? settingsRes;
    const emailSetting = settings.find((s) => s.key === "contact_email");
    if (emailSetting && typeof emailSetting.value === "string") {
      contactEmail = emailSetting.value;
    }
    const ghSetting = settings.find((s) => s.key === "github_url");
    if (ghSetting && typeof ghSetting.value === "string") {
      githubUrl = ghSetting.value;
    }
    const liSetting = settings.find((s) => s.key === "linkedin_url");
    if (liSetting && typeof liSetting.value === "string") {
      linkedinUrl = liSetting.value;
    }
  } catch {
    // fallback defaults
  }

  const advisoryFaqs = [
    {
      q: "What types of engagements do you accept?",
      a: "I take on fractional architectural advisory, high-throughput backend re-platforming (Laravel/MySQL/Redis), creative frontend engineering (Next.js/GSAP/WebGL), and end-to-end mission-critical digital products.",
    },
    {
      q: "What is your typical turnaround time?",
      a: "Direct inquiries receive a response within 24 hours. Scoped architecture audits and technical reviews typically commence within 1 to 2 weeks of initial alignment.",
    },
    {
      q: "Do you work with international teams across timezones?",
      a: "Yes. Operating primarily in GMT+7 (Western Indonesia Time), I overlap seamlessly with Asia-Pacific, European morning, and US Pacific afternoon schedules for async-first workflows.",
    },
    {
      q: "Are codebases and intellectual property fully transferred?",
      a: "All proprietary code, architecture documentation, infrastructure configurations, and visual assets are 100% client-owned upon milestone completion.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Direct Inquiries & Technical Advisory</Eyebrow>
        <Display size="xl" className="mb-4">
          Architectural Consultation & Strategic Collaboration
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl">
          Whether you require a comprehensive backend audit, performance optimization for high-concurrency systems, or category-defining digital product engineering, let&apos;s evaluate your technical roadmap.
        </Text>
      </header>

      {/* Primary Contact Details Banner */}
      <div className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-lg">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Direct Correspondence
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all font-mono"
            >
              {contactEmail}
            </a>
            <p className="mt-2 text-xs text-zinc-400">
              Direct inquiries dispatched to primary secure inbox.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-lg">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Operating Timezone & Base
            </div>
            <div className="text-sm font-semibold text-white font-mono">
              {profile?.location ?? "Jakarta, Indonesia"} [GMT+7]
            </div>
            <p className="mt-2 text-xs text-zinc-400">
              Async-first communication with dedicated real-time overlap windows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-lg">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Engagement Availability
            </div>
            <div className="text-sm font-semibold text-emerald-400 flex items-center space-x-2 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Select Engagements</span>
            </div>
            <p className="mt-2 text-xs text-zinc-400">
              Currently accepting Q3/Q4 strategic architecture contracts.
            </p>
          </div>
        </div>
      </div>

      {/* Main Form & Scope Split */}
      <SectionWrapper
        title="Initiate Project Inquiry"
        subtitle="Submit your project details below or reach out directly for confidential technical evaluation."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 shadow-2xl backdrop-blur-md">
            <div className="mb-6 pb-6 border-b border-zinc-800/60">
              <h3 className="text-lg font-bold text-white font-mono">
                {"// "}ARCHITECTURAL_INQUIRY_FORM
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                All submissions are securely logged and routed to Mahardika Rafa directly.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Engagement Scope & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-4">
                Consultation Domains
              </h4>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-mono mt-0.5">01</span>
                  <div>
                    <strong className="text-white block font-sans">Distributed Systems & Databases</strong>
                    <span className="text-xs text-zinc-400">Query optimization, Redis caching layers, sharding, and resilience audits.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-mono mt-0.5">02</span>
                  <div>
                    <strong className="text-white block font-sans">Modern Headless Platforms</strong>
                    <span className="text-xs text-zinc-400">Next.js 16 App Router Server Components with Laravel 13 API backends.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-mono mt-0.5">03</span>
                  <div>
                    <strong className="text-white block font-sans">High-Fidelity Motion & 3D</strong>
                    <span className="text-xs text-zinc-400">Accessible GSAP timeline choreography, Three.js WebGL scenes, and 60 FPS interfaces.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Channels */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-4">
                Verified Direct Channels
              </h4>
              <div className="space-y-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 transition-colors group"
                >
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                    GitHub / mhrdkrafa
                  </span>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400">↗</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 transition-colors group"
                >
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                    LinkedIn / mahardikarafa
                  </span>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Advisory FAQ / Protocols */}
      <div className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto py-16 border-t border-zinc-800/60">
        <Eyebrow className="mb-2">Engagement Standards & Protocols</Eyebrow>
        <Heading level={2} className="mb-8">
          Frequently Clarified Consultation Details
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisoryFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors"
            >
              <h5 className="text-base font-semibold text-white mb-2 flex items-start gap-2">
                <span className="text-cyan-400 font-mono text-sm">Q{idx + 1}:</span>
                <span>{faq.q}</span>
              </h5>
              <p className="text-sm text-zinc-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
