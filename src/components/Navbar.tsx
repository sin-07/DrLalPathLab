"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  CalendarCheck2, 
  Activity, 
  MessageSquare,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Building2,
  FileCheck2,
  Stethoscope,
  Droplets,
  ArrowRight,
  ExternalLink,
  Search,
  CheckCircle2,
  Camera,
  MapPin,
  Lock,
  Thermometer,
  FlaskConical,
  Pill,
  HeartPulse
} from "lucide-react";
import { SWASTH_FIT_PACKAGES } from "@/lib/data/packagesData";

interface NavbarProps {
  onOpenBooking: (preselectedPackage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mobile accordion state (closed by default so no dropdown opens automatically)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const toggleMobileAccordion = (accordionName: string) => {
    setMobileAccordion(mobileAccordion === accordionName ? null : accordionName);
  };

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Announcement Bar - Sleek & Mobile Optimized */}
      <div className="bg-brand-navyDark text-slate-200 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase shrink-0">
              Authorized Center
            </span>
            <span className="text-slate-200 truncate">
              Dr Lal PathLabs • <strong>Asneha Diagnostic</strong>, Jaganpura, Patna
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px] sm:text-xs">
            <a
              href="tel:7654041612"
              className="flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 animate-pulse" />
              <span>7654041612</span>
            </a>
            <Link
              href="/admin"
              className="hidden sm:inline-block text-[10px] font-semibold text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 transition-colors"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-nav border-b border-slate-200/80 shadow-sm transition-all relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20 text-slate-950 font-black shrink-0 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-2xl font-black tracking-tight text-slate-950 font-heading leading-tight truncate">
                  Asneha <span className="text-sky-600">Diagnostic</span>
                </span>
                <span className="text-[9px] sm:text-xs font-semibold text-slate-500 truncate leading-tight">
                  <span className="text-amber-600 font-bold">Authorized Center</span> • Dr Lal PathLabs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Ultimate Animated Dropdowns (Visible on xl screens 1280px+) */}
            <div className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-slate-700">
              
              {/* 1. HEALTHCARE PACKAGES DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter("packages")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown("packages")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeDropdown === "packages"
                      ? "text-sky-700 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Swasth Fit™ Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "packages" ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`} />
                </button>

                {/* Ultimate Mega-Dropdown Menu */}
                {activeDropdown === "packages" && (
                  <div className="absolute top-full left-0 mt-1.5 w-[560px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-5 animate-ultimate-dropdown z-50">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-amber-600 uppercase">
                          Official Tariff Chart
                        </span>
                        <h4 className="text-base font-black text-slate-950">
                          Swasth Fit™ Preventive Health Packages
                        </h4>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Free Home Pickup
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {SWASTH_FIT_PACKAGES.map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenBooking(pkg.name);
                          }}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                            pkg.isPopular
                              ? "bg-gradient-to-br from-amber-50 to-amber-100/60 border-amber-300 hover:border-amber-400 shadow-sm"
                              : "bg-slate-50/70 border-slate-200 hover:bg-white hover:border-sky-300 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-950 group-hover:text-sky-700 transition-colors">
                              {pkg.name}
                            </span>
                            {pkg.isPopular && (
                              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                            {pkg.tagline}
                          </p>
                          <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-slate-200/50">
                            <span className="text-xs font-black text-sky-700 font-heading">
                              ₹{pkg.price.toLocaleString()}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-950 flex items-center gap-0.5">
                              <span>Book</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        href="#packages"
                        onClick={() => setActiveDropdown(null)}
                        className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1"
                      >
                        <span>View In-Depth Comparison Table</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenBooking();
                        }}
                        className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-sm"
                      >
                        Custom Request
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. DIAGNOSTIC TESTS DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter("tests")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown("tests")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeDropdown === "tests"
                      ? "text-sky-700 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Diagnostic Tests</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "tests" ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`} />
                </button>

                {/* Ultimate Dropdown: Pathology Categories */}
                {activeDropdown === "tests" && (
                  <div className="absolute top-full left-0 mt-1.5 w-96 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-5 animate-ultimate-dropdown z-50">
                    <div className="pb-2 mb-2 border-b border-slate-100">
                      <span className="text-[10px] font-black tracking-widest text-sky-600 uppercase">
                        Over 5,000+ Tests
                      </span>
                      <h4 className="text-sm font-black text-slate-950">
                        Popular Pathology Categories
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                      {[
                        { title: "Fever & Infection", code: "CBC, Dengue, Typhoid", Icon: Thermometer, color: "text-amber-500" },
                        { title: "Diabetes Care", code: "HbA1c, Fasting Sugar", Icon: Droplets, color: "text-rose-500" },
                        { title: "Thyroid Profile", code: "TSH, Free T3 / T4", Icon: Activity, color: "text-indigo-500" },
                        { title: "Heart & Lipids", code: "Cholesterol, Triglycerides", Icon: HeartPulse, color: "text-red-500" },
                        { title: "Liver & Kidney", code: "LFT, KFT, Creatinine", Icon: FlaskConical, color: "text-cyan-500" },
                        { title: "Vitamins Panel", code: "Vitamin D3, B12", Icon: Pill, color: "text-emerald-500" },
                      ].map((cat, i) => (
                        <Link
                          key={i}
                          href="#tests"
                          onClick={() => setActiveDropdown(null)}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 hover:border-sky-200 border border-transparent transition-all group"
                        >
                          <div className="flex items-center gap-1.5">
                            <cat.Icon className={`w-3.5 h-3.5 ${cat.color} shrink-0`} />
                            <span className="font-bold text-slate-900 group-hover:text-sky-700">
                              {cat.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {cat.code}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <Link
                        href="#tests"
                        onClick={() => setActiveDropdown(null)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Search className="w-3.5 h-3.5 text-sky-600" />
                        <span>Search Complete Test Catalog</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. CLINIC & PATIENT CARE DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter("clinic")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleDropdown("clinic")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeDropdown === "clinic"
                      ? "text-sky-700 bg-sky-50 shadow-sm"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Our Center</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "clinic" ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`} />
                </button>

                {/* Ultimate Dropdown: Clinic Info */}
                {activeDropdown === "clinic" && (
                  <div className="absolute top-full left-0 mt-1.5 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-4 animate-ultimate-dropdown z-50">
                    <div className="space-y-1">
                      <Link
                        href="#gallery"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-semibold text-slate-800 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-950 group-hover:text-sky-700">Jaganpura Center Photos</div>
                          <div className="text-[10px] text-slate-400">Authentic clinic facility tour</div>
                        </div>
                      </Link>

                      <Link
                        href="#how-it-works"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-semibold text-slate-800 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                          <Droplets className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-950 group-hover:text-sky-700">How Home Pickup Works</div>
                          <div className="text-[10px] text-slate-400">4-step hygienic sample protocol</div>
                        </div>
                      </Link>

                      <Link
                        href="#consumer-rights"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-semibold text-slate-800 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-950 group-hover:text-sky-700">Patient Consumer Rights</div>
                          <div className="text-[10px] text-slate-400">Verified name, bills & SMS alerts</div>
                        </div>
                      </Link>

                      <Link
                        href="#faq"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center gap-3 text-xs font-semibold text-slate-800 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                          <FileCheck2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-950 group-hover:text-sky-700">Patient Guidelines & FAQ</div>
                          <div className="text-[10px] text-slate-400">Fasting rules & test turnaround</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <Link 
                href="#contact" 
                className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-all"
              >
                Contact &amp; Location
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* WhatsApp Quick Icon on Desktop */}
              <a
                href="https://wa.me/917654041612?text=Hello%20Asneha%20Diagnostic,%20I%20want%20to%20inquire%20about%20blood%20test%20/%20home%20collection"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-sm whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Tablet & Desktop "Book Free Pickup" Button */}
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-400/25 hover:shadow-lg active:translate-y-0 transition-all whitespace-nowrap cursor-pointer"
              >
                <CalendarCheck2 className="w-4 h-4 shrink-0" />
                <span>Book Pickup</span>
              </button>

              {/* Mobile Quick Direct Phone Icon */}
              <a
                href="tel:7654041612"
                className="sm:hidden w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                aria-label="Call Clinic"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Mobile & Tablet Hamburger Toggle */}
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  setMobileAccordion(null);
                }}
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Ultimate Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-ultimate-dropdown">
            
            {/* Mobile Accordion 1: Swasth Fit Packages */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => toggleMobileAccordion("packages")}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-black text-slate-900 bg-white"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Swasth Fit™ Healthcare Packages</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                  mobileAccordion === "packages" ? "rotate-180 text-amber-600" : ""
                }`} />
              </button>

              {mobileAccordion === "packages" && (
                <div className="p-2 space-y-1.5 animate-ultimate-dropdown bg-slate-50 border-t border-slate-100">
                  {SWASTH_FIT_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenBooking(pkg.name);
                      }}
                      className="px-3 py-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs cursor-pointer active:bg-amber-50"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{pkg.name}</div>
                        <div className="text-[10px] text-slate-500">{pkg.badge}</div>
                      </div>
                      <span className="font-black text-amber-600">₹{pkg.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <Link
                    href="#packages"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center py-2 text-xs font-bold text-sky-700"
                  >
                    View Official Tariff Matrix →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion 2: Diagnostic Tests */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => toggleMobileAccordion("tests")}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-black text-slate-900 bg-white"
              >
                <span className="flex items-center gap-2">
                  <Droplets className="w-3.5 h-3.5 text-sky-600" />
                  <span>Popular Diagnostic Tests</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                  mobileAccordion === "tests" ? "rotate-180 text-sky-600" : ""
                }`} />
              </button>

              {mobileAccordion === "tests" && (
                <div className="p-2.5 grid grid-cols-2 gap-1.5 animate-ultimate-dropdown bg-slate-50 border-t border-slate-100 text-xs">
                  {["Fever & CBC", "Diabetes HbA1c", "Thyroid Profile", "Lipid Panel", "Liver & Kidney", "Vitamin D / B12"].map((test, i) => (
                    <Link
                      key={i}
                      href="#tests"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 text-center"
                    >
                      {test}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion 3: Center & Rights */}
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => toggleMobileAccordion("clinic")}
                className="w-full px-4 py-3 flex items-center justify-between text-xs font-black text-slate-900 bg-white"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jaganpura Clinic &amp; Rights</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                  mobileAccordion === "clinic" ? "rotate-180 text-emerald-600" : ""
                }`} />
              </button>

              {mobileAccordion === "clinic" && (
                <div className="p-2 space-y-1 animate-ultimate-dropdown bg-slate-50 border-t border-slate-100 text-xs">
                  <Link
                    href="#gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <Camera className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Clinic Photographs</span>
                  </Link>
                  <Link
                    href="#consumer-rights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Patient Consumer Rights</span>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>East of Double Transformer Location</span>
                  </Link>
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-sky-50 font-bold text-sky-800 hover:bg-sky-100 transition-colors"
                  >
                    <Lock className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Reception Staff Portal</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl text-center text-sm font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all cursor-pointer"
              >
                Book Free Home Sample Pickup
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:7654041612"
                  className="py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call 7654041612</span>
                </a>
                <a
                  href="https://wa.me/917654041612"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 rounded-xl text-center text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};
