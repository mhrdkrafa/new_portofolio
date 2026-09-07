import { portfolioApi } from "@/lib/api/client";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/contact/ContactForm";
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
    <div className="w-full">
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Direct Collaboration & Inquiries</Eyebrow>
        <Display size="xl" className="mb-4">
          Architectural Consultation & Advisory
        </Display>
        <Text size="lg" variant="secondary" className="max-w-2xl">
          Interested in consulting, scaling high-throughput distributed architectures, or collaborating on category-defining digital artifacts? Let’s connect.
        </Text>
      </header>

      <div className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-xs font-mono text-zinc-500 mb-2">Direct Correspondence</div>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm font-medium text-cyan-400 hover:underline break-all font-mono"
            >
              {contactEmail}
            </a>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-xs font-mono text-zinc-500 mb-2">Primary Timezone</div>
            <div className="text-sm font-medium text-white font-mono">
              {profile?.location ?? "Jakarta, Indonesia"} [GMT+7]
            </div>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-xs font-mono text-zinc-500 mb-2">Consulting Availability</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center space-x-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q3 / Q4</span>
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Send an Architectural Inquiry"
        subtitle="Provide a brief summary of your technical requirements, architecture bottlenecks, or design vision."
      >
        <div className="max-w-3xl p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl">
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
}
