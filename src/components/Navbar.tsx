"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Process", href: "/#process" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/#faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E7E7E4] shadow-xs py-3.5"
            : "bg-[#F7F7F5] border-b border-[#E7E7E4]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tonovox Technologies Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-800/20 shadow-xs flex-shrink-0 bg-black">
              <Image
                src="/logo.png"
                alt="Tonovox Technologies Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-neutral-950 font-sans leading-tight">
                TONOVOX
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-neutral-500 -mt-0.5">
                Technologies
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/70 border border-[#E7E7E4] px-4 py-1.5 rounded-full shadow-xs backdrop-blur-xs">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setConsultModalOpen(true)}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 shadow-sm group cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setConsultModalOpen(true)}
              className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/60 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-[#E7E7E4] shadow-xl p-6 transition-all animate-in slide-in-from-top-2 duration-200 z-50 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-neutral-800 hover:text-neutral-950 hover:bg-[#F7F7F5] px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E7E7E4] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultModalOpen(true);
                  }}
                  className="w-full py-3.5 px-4 bg-neutral-950 text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <a
                    href="mailto:tonovoxtechnologies@gmail.com"
                    className="text-xs text-neutral-500 hover:text-neutral-900 font-medium"
                  >
                    tonovoxtechnologies@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
};
