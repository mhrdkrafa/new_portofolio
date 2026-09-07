import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Profile, WebsiteSetting } from "@/types/api";

export default async function ContactPage() {
  let profile: Profile | null = null;
  let contactEmail = "contact@mahardika.dev";

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
  } catch {
    // fallback
  }

  return (
    <div className="min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <div className="flex justify-between items-center py-6 border-b border-white/10 mb-12">
        <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <span className="text-xs font-mono text-cyan-400">Initiate Contact</span>
      </div>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Architectural Inquiries & Collaborations
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          Interested in consulting, scaling high-throughput distributed systems, or collaborating on immersive digital experiences? Let’s connect.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800">
          <div className="text-xs font-mono text-zinc-500 mb-1">Direct Correspondence</div>
          <a href={`mailto:${contactEmail}`} className="text-sm font-medium text-cyan-400 hover:underline break-all">
            {contactEmail}
          </a>
        </div>
        <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800">
          <div className="text-xs font-mono text-zinc-500 mb-1">Current Base</div>
          <div className="text-sm font-medium text-white">{profile?.location ?? "Jakarta, Indonesia"}</div>
        </div>
        <div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800">
          <div className="text-xs font-mono text-zinc-500 mb-1">Availability Window</div>
          <div className="text-sm font-medium text-emerald-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Q3 / Q4 Projects</span>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight">Direct Consultation Inquiry</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-2">Name / Organization</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g. Elena Rostova"
                className="w-full px-4 py-2.5 rounded-md bg-zinc-800/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="elena@company.io"
                className="w-full px-4 py-2.5 rounded-md bg-zinc-800/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-2">Scope / Project Topic</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="e.g. Real-Time Telemetry Topology & Next.js Performance"
              className="w-full px-4 py-2.5 rounded-md bg-zinc-800/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-2">Project Details / Goals</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Provide a brief overview of your technical challenges, timeline, and architectural targets..."
              className="w-full px-4 py-2.5 rounded-md bg-zinc-800/80 border border-zinc-700/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="button"
            className="px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-colors"
          >
            Dispatch Inquiry →
          </button>
        </form>
      </div>
    </div>
  );
}
