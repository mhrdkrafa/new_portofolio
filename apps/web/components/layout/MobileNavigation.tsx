"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Selected Projects", href: "/projects" },
    { label: "Experience & Credentials", href: "/experience" },
    { label: "Consulting Services", href: "/services" },
    { label: "Technical Articles", href: "/articles" },
    { label: "Initiate Contact", href: "/contact" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-canvas/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
            MR
          </span>
          <span className="font-bold text-sm text-white">Mahardika Rafa</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-md bg-white/5 border border-white/10 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="my-auto py-8 space-y-4">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="flex items-center space-x-4">
              <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
              <Link
                href={link.href}
                className={`text-2xl sm:text-3xl font-bold font-display tracking-tight transition-colors ${
                  isActive ? "text-cyan-400" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Footer Meta & Coordinates */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
          <span>JAKARTA, ID [GMT+7]</span>
          <span className="text-emerald-400 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE</span>
          </span>
        </div>
        <Link
          href="/contact"
          className="block w-full py-3 rounded-lg bg-cyan-400 text-black text-center font-semibold text-sm hover:bg-cyan-300 transition-colors"
        >
          Initiate Consultation →
        </Link>
      </div>
    </div>
  );
}
