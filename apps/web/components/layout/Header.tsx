"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

interface HeaderProps {
  statusText?: string;
  isAvailable?: boolean;
}

export function Header({
  statusText = "Available for Consulting",
  isAvailable = true,
}: HeaderProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Services", href: "/services" },
    { label: "Articles", href: "/articles" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-canvas/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="group flex items-center space-x-3 text-white focus:outline-none"
              aria-label="Mahardika Rafa — Return to Homepage"
            >
              <span className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                MR
              </span>
              <span className="font-bold tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors hidden sm:inline">
                Mahardika Rafa
              </span>
            </Link>

            {/* Availability Status Badge */}
            <div className="hidden lg:flex items-center space-x-2 pl-4 border-l border-white/10">
              <span
                className={`w-2 h-2 rounded-full ${
                  isAvailable ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                {statusText}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-cyan-400 font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-xs font-mono font-medium text-white transition-all duration-200"
            >
              Initiate Contact →
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-md bg-white/5 border border-white/10 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNavigation isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
