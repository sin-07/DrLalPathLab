"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, UserCheck, BellRing, ReceiptText, PhoneCall, CheckCircle } from "lucide-react";

export const ConsumerRightsSection: React.FC = () => {
  return (
    <section id="consumer-rights" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: GSAP Reveal Upward */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Dr Lal PathLabs Patient Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading tracking-tight">
            Know Your Rights <span className="text-sky-600">As A Consumer</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            At Asneha Diagnostic, we strictly uphold Dr Lal PathLabs&apos; official consumer protection charter. Your data accuracy, sample integrity, and timely reports are guaranteed.
          </p>
        </div>

        {/* 3 Pillars Grid: GSAP Reveal Stagger */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1: Pre-Payment Verification with Yellowish Gradient */}
          <div className="gsap-stagger-item rounded-3xl p-8 bg-gradient-to-b from-amber-50/75 via-white to-amber-100/40 border border-amber-200/90 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Step 1 • Right to Verify
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1 leading-snug">
                Check Details Before Making Payment
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Always review the booking receipt and barcoded sample requisition slip for accuracy:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Correct Name:</strong> Matches your Govt ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Age &amp; Gender:</strong> Affects reference ranges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Valid Mobile Number:</strong> For WhatsApp &amp; SMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Correct Test Details:</strong> Exact panels requested</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
              Zero tolerance for clerical misidentifications.
            </div>
          </div>

          {/* Pillar 2: Mobile Updates & Critical Alerts */}
          <div className="gsap-stagger-item rounded-3xl p-8 bg-gradient-to-b from-slate-900 to-brand-navy text-white shadow-xl ring-2 ring-amber-400/50 flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mb-6 shadow-lg shadow-amber-400/20">
                <BellRing className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Step 2 • Right to Notifications
              </span>
              <h3 className="text-lg font-black text-white mt-1 leading-snug">
                Automatic Alerts On Registered Mobile
              </h3>
              <p className="text-xs text-slate-300 mt-2">
                Stay updated in real-time through computerized SMS and WhatsApp dispatch:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Report Ready Notification:</strong> Instant download link</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Critical Value Alerts:</strong> Immediate doctor notification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Historical Records:</strong> Access past reports anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>QR Code Verification:</strong> Tamper-proof digital seal</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-amber-400/80 font-medium">
              High priority automated notification system.
            </div>
          </div>

          {/* Pillar 3: Computer Generated Bill with Yellowish Gradient */}
          <div className="gsap-stagger-item rounded-3xl p-8 bg-gradient-to-b from-amber-50/75 via-white to-amber-100/40 border border-amber-200/90 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-6 shadow-sm">
                <ReceiptText className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Step 3 • Right to Invoice
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1 leading-snug">
                Ask &amp; Receive System-Generated Bill
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Every transaction comes with an authentic Dr Lal PathLabs computerized tax invoice:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Official Printed / PDF Invoice:</strong> Transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Insurance &amp; Mediclaim:</strong> Valid for reimbursements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Barcoded Requisition:</strong> Traces tube to central lab</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Customer Support:</strong> National desk 011-39885050</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
              100% computerized tax compliance.
            </div>
          </div>

        </div>

        {/* Poster Reference Note: GSAP Reveal Left */}
        <div className="gsap-reveal-left mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                National Customer Care: 011-39885050 | Asneha Diagnostic Patna Helpline: +91 7654041612
              </p>
              <p className="text-[11px] text-slate-500">
                For feedback, report status inquiries, or medical assistance.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-amber-600">
            Dr Lal PathLabs Ltd. CIN: L74899DL1995PLC065388
          </div>
        </div>

      </div>
    </section>
  );
};
