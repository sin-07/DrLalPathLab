"use client";

import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  CalendarCheck, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  HeartPulse, 
  CheckCircle2, 
  Building2
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-slate-50">
      {/* Authentic Diagnostic Clinic Collection Center Background with Sleek Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/clinic-hero-bg.jpg"
          alt="Authentic Pathology Collection Clinic"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-35 transition-opacity duration-1000"
        />
        {/* Sleek directional gradient fades for text readability and clinic ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-50" />
        {/* Warm golden and medical blue ambient glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-400/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Main Typography & Value Prop (GSAP Reveal from Left) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* GSAP Reveal Down: Trust Ribbon */}
            <div className="gsap-reveal-down inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span className="font-bold text-amber-700">Authorized Franchise Center • Dr Lal PathLabs</span>
              <span className="text-amber-400">•</span>
              <span className="text-slate-700">Jaganpura, Patna</span>
            </div>

            {/* GSAP Reveal Left: Main Headline */}
            <div className="gsap-reveal-left space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] font-heading">
                Precision Diagnostics,{" "}
                <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 bg-clip-text text-transparent">
                  Trusted Results.
                </span>{" "}
                <br />
                Right At Your Doorstep.
              </h1>

              {/* Franchise clarity callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-brand-navy text-white shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl" />
                <div className="flex items-start gap-3 relative z-10">
                  <Building2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Official Franchise Clarification
                    </p>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      <strong>Asneha Diagnostic</strong> is the official authorized collection center of <strong>Dr Lal PathLabs</strong> in Patna. All tests are processed with Dr Lal PathLabs&apos; certified barcoded analyzers with genuine computerized reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GSAP Reveal Left: Feature Bullets */}
            <div className="gsap-reveal-left grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>Free Home Collection</strong> in Patna</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>100% Barcoded</strong> Vacuum Tubes</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>Same-Day</strong> Digital Reports on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Lead by <strong>Ajay Kumar (DMLT)</strong></span>
              </div>
            </div>

            {/* Action Buttons & Fast Booking Trigger */}
            <div className="gsap-reveal-up flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-3 px-7 py-4 rounded-2xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-slate-950" />
                <span>Book Free Home Sample Pickup</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="tel:7654041612"
                className="flex items-center gap-2.5 px-6 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:shadow transition-all"
              >
                <PhoneCall className="w-5 h-5 text-sky-600" />
                <span>Call +91 7654041612</span>
              </a>
            </div>

            {/* Location quick snippet */}
            <div className="gsap-reveal-up flex items-center gap-2 text-xs text-slate-600 font-medium">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna - 800027</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Collage with Real Images & Floating Badges (GSAP Reveal from Right) */}
          <div className="lg:col-span-5 relative">
            <div className="gsap-reveal-right relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card: Authentic Storefront Photograph */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                  <Image
                    src="/images/center-entrance.jpg"
                    alt="Asneha Diagnostic - Dr Lal PathLabs Authorized Collection Center Jaganpura Patna"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Overlay Caption Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold mb-1 shadow">
                    <span>Our Verified Center</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Asneha Diagnostic • Authorized Center
                  </h3>
                  <p className="text-xs text-slate-300">
                    Jaganpura, Patna • Dr Lal PathLabs Collection Center
                  </p>
                </div>
              </div>

              {/* Secondary Floating Card: Dr Lal PathLabs Family Trust Poster (Image 1) */}
              <div className="gsap-float hidden sm:block absolute -bottom-6 -left-6 lg:-left-8 w-56 sm:w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="aspect-[16/10] relative w-full">
                  <Image
                    src="/images/family-legacy.jpg"
                    alt="A legacy of superior diagnostic care Dr Lal PathLabs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 bg-brand-navy text-white text-center">
                  <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                    75+ Years of Trust
                  </p>
                  <p className="text-[10px] text-slate-200">
                    Precision care for every family member
                  </p>
                </div>
              </div>

              {/* Floating Quality Assurance Pill */}
              <div className="gsap-float absolute top-3 right-3 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-950">100% Genuine Reports</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Dr Lal PathLabs Barcoded</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM METRICS STRIP: GSAP Reveal Upward */}
        <div className="gsap-reveal-up mt-16 sm:mt-20 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 font-heading">75+</div>
              <div className="text-xs font-bold text-amber-600 mt-1 uppercase tracking-wider">Years Brand Legacy</div>
              <div className="text-xs text-slate-500 mt-0.5">Dr Lal PathLabs Excellence</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-sky-600 font-heading">5,000+</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wider">Diagnostic Tests</div>
              <div className="text-xs text-slate-500 mt-0.5">Routine to Specialized Panels</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-heading">₹0</div>
              <div className="text-xs font-bold text-emerald-700 mt-1 uppercase tracking-wider">Home Sample Pickup</div>
              <div className="text-xs text-slate-500 mt-0.5">Free in Jaganpura & Surrounding</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 font-heading">100%</div>
              <div className="text-xs font-bold text-sky-700 mt-1 uppercase tracking-wider">NABL / CAP Calibrated</div>
              <div className="text-xs text-slate-500 mt-0.5">Automated Clinical Analysis</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
