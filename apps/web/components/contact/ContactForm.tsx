"use client";

import { useState, type FormEvent } from "react";
import { portfolioApi, ApiClientError } from "@/lib/api/client";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      await portfolioApi.submitContact(formData);
      setSubmitStatus("success");
      setStatusMessage("Thank you! Your architectural inquiry has been logged. I will respond within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      if (error instanceof ApiClientError && error.data && typeof error.data === "object") {
        const dataObj = error.data as { message?: string; errors?: Record<string, string[]> };
        if (dataObj.message) {
          setStatusMessage(dataObj.message);
        } else if (dataObj.errors) {
          const firstError = Object.values(dataObj.errors)[0]?.[0];
          setStatusMessage(firstError || "Validation error occurred. Please check your inputs.");
        } else {
          setStatusMessage("Unable to send inquiry. Please try again or reach out directly via email.");
        }
      } else {
        setStatusMessage("Network error occurred. Please verify your connection or try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div
          role="status"
          className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono flex items-start space-x-3"
        >
          <span className="text-base leading-none">✓</span>
          <div>
            <div className="font-bold">INQUIRY_DISPATCHED_ACK</div>
            <p className="mt-1 text-xs text-emerald-300/80">{statusMessage}</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div
          role="alert"
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono flex items-start space-x-3"
        >
          <span className="text-base leading-none">✕</span>
          <div>
            <div className="font-bold">DISPATCH_FAILED_ERROR</div>
            <p className="mt-1 text-xs text-red-300/80">{statusMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-2">
            Your Name / Organization <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Elena Rostova / NovaTech"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm font-body focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-2">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="elena@novatech-ventures.io"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm font-body focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-2">
          Topic / Engagement Scope <span className="text-cyan-400">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Consulting on Next.js 16 Real-Time Telemetry & Architecture"
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm font-body focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-2">
          Message & Project Details <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your project, throughput requirements, team goals, and timeline..."
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm font-body focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50 resize-y"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="text-xs font-mono text-zinc-500">
          * End-to-end encrypted payload via Laravel 13 API.
        </p>

        <Button
          type="submit"
          variant="accent"
          size="md"
          isLoading={isSubmitting}
          rightIcon={<span>→</span>}
        >
          {isSubmitting ? "Dispatching..." : "Dispatch Inquiry"}
        </Button>
      </div>
    </form>
  );
}
