"use client";

import React from "react";
import { PhoneCall, CalendarCheck2, Syringe, FileCheck, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: "01",
      icon: CalendarCheck2,
      title: "Book Free Home Pickup",
      desc: "Fill our simple 30-second form online or directly call / WhatsApp +91 7654041612.",
    },
    {
      num: "02",
      icon: Syringe,
      title: "Sterile Home Sample Collection",
      desc: "Our DMLT certified phlebotomist visits your Patna home with sterile BD Vacutainer vacuum tubes.",
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Automated Lab Processing",
      desc: "Barcoded samples are safely transported in cold-chain boxes for calibrated automated analysis.",
    },
    {
      num: "04",
      icon: PhoneCall,
      title: "Get Digital Reports",
      desc: "Receive your verified PDF report with QR authentication directly on WhatsApp & SMS within hours.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: GSAP Reveal Upward */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            Zero Hassle Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading">
            How Free Home Collection <span className="text-sky-600">Works</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Convenient, hygienic, and precise pathology services without having to wait in clinic queues.
          </p>
        </div>

        {/* Steps Grid: GSAP Stagger */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="gsap-stagger-item relative p-6 rounded-3xl bg-gradient-to-b from-amber-50/75 via-white to-amber-100/40 border border-amber-200/80 shadow-md hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 hover:-translate-y-1 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-200 font-heading">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] text-amber-600 font-semibold flex items-center gap-1">
                  <span>Step {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="gsap-reveal-up mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Need a Fasting Blood Sample Tomorrow Morning?</h3>
            <p className="text-xs text-slate-300">
              Schedule before 9 PM tonight to get our phlebotomist at your doorstep as early as 6:30 AM!
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl font-black text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/25 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Book Early Morning Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
