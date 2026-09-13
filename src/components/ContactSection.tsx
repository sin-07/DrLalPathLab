"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Building, 
  ExternalLink,
  User,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: GSAP Reveal Upward */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Visit Us or Request Doorstep Pickup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading">
            Contact &amp; <span className="text-sky-600">Location Guide</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Conveniently located in Jaganpura, Patna. Walk in for urgent tests or call for free home sample pickup anywhere across Patna.
          </p>
        </div>

        {/* 2 Equal-Sized Symmetrical Columns (Both cards same height) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1 (Left): Center Identification & In-Charge Details with Yellowish Gradient */}
          <div className="gsap-reveal-left h-full">
            <div className="h-full bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/90 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Brand Header */}
                <div className="border-b border-slate-200 pb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase mb-3 shadow-sm">
                    Authorized Collection Center
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">
                    Asneha Diagnostic
                  </h3>
                  <p className="text-xs font-bold text-sky-700 mt-1">
                    Dr Lal PathLabs Authorized Collection Center
                  </p>
                </div>

                {/* Address & Landmark */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Clinic Address &amp; Landmark
                    </h4>
                    <p className="text-sm font-bold text-slate-800 mt-1 leading-snug">
                      East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna - 800027, Bihar
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      (Landmark: East of Double Transformer, Jaganpura)
                    </p>
                  </div>
                </div>

                {/* In-Charge Ajay Kumar */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Center In-Charge &amp; Technician
                    </h4>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <p className="text-sm font-bold text-slate-800">
                        Ajay Kumar (DMLT)
                      </p>
                      <div className="flex items-center gap-1.5">
                        <a
                          href="tel:7654041612"
                          className="px-2 py-0.5 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors flex items-center gap-1 text-[11px] font-bold shadow-2xs"
                          title="Call Ajay Kumar"
                        >
                          <Phone className="w-3 h-3 text-amber-700" />
                          <span>Call</span>
                        </a>
                        <a
                          href="https://wa.me/917654041612?text=Hello%20Ajay%20ji,%20I%20want%20to%20inquire%20about%20blood%20test%20at%20Asneha%20Diagnostic"
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded-md bg-emerald-100 hover:bg-emerald-200 text-emerald-900 transition-colors flex items-center gap-1 text-[11px] font-bold shadow-2xs"
                          title="WhatsApp Ajay Kumar"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-700" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Lead Laboratory Phlebotomist &amp; Sample In-Charge
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Direct Phone / WhatsApp
                    </h4>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href="tel:7654041612"
                        className="text-base font-black text-sky-700 hover:text-sky-800 transition-colors"
                      >
                        +91 7654041612
                      </a>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-medium">
                        National Desk: 011-39885050
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Center Timings
                    </h4>
                    <p className="text-sm font-bold text-slate-800 mt-1">
                      Monday to Sunday: 7:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      Home Sample Collection starts early at 6:30 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Assurance Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sterile BD Vacutainer Tubes</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Easy Parking &amp; Entry Ramp</span>
                </span>
              </div>

            </div>
          </div>

          {/* Card 2 (Right): Prescription WhatsApp & Location Directions (Identical Height with Yellowish Gradient) */}
          <div className="gsap-reveal-right h-full">
            <div className="h-full bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/90 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-slate-200 pb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase mb-3 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    <span>Instant Support &amp; Prescription</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">
                    Have a Doctor&apos;s Prescription?
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Send your prescription directly to Ajay Kumar on WhatsApp. We will promptly check test names, give you exact pricing, and arrange free home sample collection.
                  </p>
                </div>

                {/* Call-to-action buttons */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/917654041612?text=Hello%20Ajay%20ji,%20I%20am%20sending%20my%20prescription%20for%20blood%20test%20pricing%20and%20home%20collection."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>WhatsApp Your Prescription (+91 7654041612)</span>
                  </a>

                  <a
                    href="tel:7654041612"
                    className="w-full py-3 px-6 rounded-2xl font-bold text-sm text-slate-800 bg-white hover:bg-amber-50 border border-slate-300 flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-sky-600" />
                    <span>Call Us Direct (+91 7654041612)</span>
                  </a>
                </div>

                {/* Patna Center Location Box with Yellowish Gradient */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/70 via-amber-50 to-amber-100/50 border border-amber-200 text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                      <Building className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Patna Center Location</span>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Jaganpura+Patna+Dr+Lal+PathLabs"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-slate-600 leading-snug">
                    East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna - 800027
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-1">
                    <span><strong>Free Areas:</strong> Jaganpura, Ramkrishna Nagar, Kankarbagh</span>
                    <span>Easy Patient Parking</span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>100% Genuine Barcoded Reports</span>
                </span>
                <span className="text-amber-700 font-bold">
                  Same-Day Digital Delivery
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
