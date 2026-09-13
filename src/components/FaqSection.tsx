"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  FileCheck2,
  Sparkles,
  PhoneCall
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  category: string;
  answer: string;
  icon: React.ReactNode;
  bulletPoints?: string[];
}

const FAQS: FAQItem[] = [
  {
    id: "home-collection",
    question: "Is home sample collection really 100% free across Patna?",
    category: "Home Pickup",
    icon: <Droplets className="w-5 h-5 text-sky-600" />,
    answer: "Yes! Asneha Diagnostic provides 100% free home sample pickup in Jaganpura, Ramkrishna Nagar, Kankarbagh, and surrounding areas of Patna. There are no hidden visit or convenience fees. Our certified phlebotomist visits your home at your chosen time slot.",
    bulletPoints: [
      "Zero visit fee for Swasth Fit packages & routine panels",
      "Sterile single-use BD Vacutainer vacuum needles and tubes",
      "Temperature-controlled cold chain transport boxes to protect blood stability"
    ]
  },
  {
    id: "authenticity",
    question: "How do I verify that my reports are genuinely from Dr Lal PathLabs?",
    category: "Authenticity",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    answer: "Every sample collected by Asneha Diagnostic receives a unique barcode registered in Dr Lal PathLabs' centralized Laboratory Information Management System (LIMS). Your report includes an official QR verification code and Dr Lal PathLabs letterhead.",
    bulletPoints: [
      "Scannable QR code on every computerized PDF report",
      "Direct SMS and WhatsApp alert sent from Dr Lal PathLabs official sender ID",
      "NABL and CAP certified standardized analytical reference ranges"
    ]
  },
  {
    id: "fasting-prep",
    question: "What preparation is needed for fasting blood tests (e.g. Sugar, Lipid, Swasth Fit)?",
    category: "Test Preparation",
    icon: <Clock className="w-5 h-5 text-amber-600" />,
    answer: "For comprehensive health checkups like Swasth Fit Super 1, 2, 3, 4, or Complete (including Fasting Blood Glucose and Lipid Profile), an overnight fast of 10 to 12 hours is recommended. You may drink plain water, but avoid tea, coffee, milk, or breakfast before sample collection.",
    bulletPoints: [
      "10 to 12 hours overnight fasting is ideal",
      "Plain drinking water is allowed and encouraged to keep veins hydrated",
      "We offer early morning home pickup slots starting at 6:30 AM so you don't stay hungry"
    ]
  },
  {
    id: "report-timing",
    question: "When and how will I receive my diagnostic test reports?",
    category: "Reports Delivery",
    icon: <FileCheck2 className="w-5 h-5 text-indigo-600" />,
    answer: "Most routine tests (such as CBC, Blood Sugar, LFT, KFT, Urine Routine) are reported on the same day within 6 to 12 hours. You will receive an instant PDF download link on WhatsApp and SMS. Hard copies can also be collected from our Jaganpura center.",
    bulletPoints: [
      "Same-day digital delivery via registered WhatsApp number",
      "Permanent cloud access to your digital health records",
      "Physical printed computerized reports available on request at our clinic"
    ]
  },
  {
    id: "center-location",
    question: "Where is Asneha Diagnostic located, and what are the clinic hours?",
    category: "Location & Timings",
    icon: <MapPin className="w-5 h-5 text-rose-600" />,
    answer: "Our physical collection center is located East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna - 800027, Bihar. Our center is open 7 days a week from 7:00 AM to 8:00 PM, and our phlebotomist begins doorstep home collections at 6:30 AM daily.",
    bulletPoints: [
      "Landmark: East of Double Transformer, Jaganpura",
      "Open Monday through Sunday from 7:00 AM to 8:00 PM",
      "Direct Helpline & WhatsApp: +91 7654041612 (Ajay Kumar - DMLT)"
    ]
  }
];

export const FaqSection: React.FC = () => {
  // All accordion items closed by default
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: GSAP Reveal Upward */}
        <div className="gsap-reveal-up text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Common Patient Queries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading tracking-tight">
            Frequently Asked <span className="text-sky-600">Questions</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear, transparent guidance on fasting requirements, sample collection hygiene, and report delivery.
          </p>
        </div>

        {/* ULTIMATE DROP DOWN ACCORDION LIST */}
        <div className="gsap-reveal-up space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-b from-amber-100/60 via-amber-50/90 to-white border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/40"
                    : "bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 hover:from-amber-100/50 hover:to-white border-amber-200/80 shadow-sm hover:shadow-md hover:border-amber-300"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-amber-500/15 text-amber-950" : "bg-slate-100 text-slate-700"
                    }`}>
                      {faq.icon}
                    </div>

                    <div className="min-w-0">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Ultimate Rotating Chevron */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-amber-400 text-slate-950 rotate-180 shadow-sm" 
                      : "bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Drop Down Animated Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>

                    {faq.bulletPoints && (
                      <ul className="space-y-1.5 pt-1">
                        {faq.bulletPoints.map((bp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <span className="text-amber-500 font-black mt-0.5">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="gsap-reveal-up mt-10 p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specific test prescription or medical question?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Directly consult Ajay Kumar (DMLT) for custom rates &amp; sample slots.</p>
          </div>
          <a
            href="tel:7654041612"
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 flex items-center gap-1.5 shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call +91 7654041612</span>
          </a>
        </div>

      </div>
    </section>
  );
};
