"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Clock, Menu, X, CalendarCheck2, Activity, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (preselectedPackage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-brand-navyDark text-slate-200 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase">
              Authorized Center
            </span>
            <span className="text-slate-200 text-xs">
              Dr Lal PathLabs Collection Center • <strong>Asneha Diagnostic</strong>, Jaganpura, Patna
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Mon - Sun: 7:00 AM - 8:00 PM</span>
            </div>
            <a
              href="tel:7654041612"
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>+91 7654041612</span>
            </a>
            <Link
              href="/admin"
              className="hidden sm:inline-block text-[11px] font-semibold text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 transition-colors"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-nav border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20 text-slate-950 font-black shrink-0 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-heading leading-tight">
                  Asneha <span className="text-sky-600">Diagnostic</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap leading-tight">
                  <span className="text-amber-600 font-bold">Authorized Center</span> • Dr Lal PathLabs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Responsive: visible on xl screens 1280px+) */}
            <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700 whitespace-nowrap">
              <Link href="#packages" className="hover:text-sky-600 transition-colors">
                Packages
              </Link>
              <Link href="#tests" className="hover:text-sky-600 transition-colors">
                All Tests
              </Link>
              <Link href="#gallery" className="hover:text-sky-600 transition-colors">
                Center Photos
              </Link>
              <Link href="#how-it-works" className="hover:text-sky-600 transition-colors">
                Home Collection
              </Link>
              <Link href="#consumer-rights" className="hover:text-sky-600 transition-colors">
                Patient Rights
              </Link>
              <Link href="#contact" className="hover:text-sky-600 transition-colors">
                Contact &amp; Location
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <a
                href="https://wa.me/917654041612?text=Hello%20Asneha%20Diagnostic,%20I%20want%20to%20inquire%20about%20blood%20test%20/%20home%20collection"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-sm whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-400/25 hover:shadow-lg hover:shadow-amber-400/35 active:translate-y-0 transition-all whitespace-nowrap cursor-pointer"
              >
                <CalendarCheck2 className="w-4 h-4 shrink-0" />
                <span>Book Free Pickup</span>
              </button>

              {/* Mobile / Tablet Menu Button (Visible below 1280px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
              <Link
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Swasth Fit Healthcare Packages
              </Link>
              <Link
                href="#tests"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Popular Diagnostic Tests
              </Link>
              <Link
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Jaganpura Center Photos
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                How Home Sample Collection Works
              </Link>
              <Link
                href="#consumer-rights"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Patient Consumer Rights
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Contact &amp; Location Guide
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sky-700 bg-sky-50 font-bold"
              >
                Reception Staff Portal →
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
              >
                Book Free Home Sample Pickup
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:7654041612"
                  className="py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Call: 7654041612
                </a>
                <a
                  href="https://wa.me/917654041612"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl text-center text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
