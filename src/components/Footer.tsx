"use client";

import React from "react";
import Link from "next/link";
import { Activity, Phone, Mail, MapPin, ShieldCheck, Heart, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navyDark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Franchise Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Activity className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading">
                  Asneha <span className="text-sky-400">Diagnostic</span>
                </span>
                <p className="text-[11px] font-bold text-amber-400 uppercase">
                  Dr Lal PathLabs Authorized Collection Center
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Asneha Diagnostic</strong> is proud to serve the people of Jaganpura, Patna as an official authorized collection center of <strong>Dr Lal PathLabs</strong>. We ensure 100% genuine barcoded pathology testing, sterile sample handling, and digital report delivery with zero compromise on diagnostic accuracy.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5 flex-wrap">
                <span>Center In-Charge: <strong className="text-amber-400 font-bold">Ajay Kumar (DMLT)</strong></span>
                <span className="inline-flex items-center gap-1 ml-1">
                  <a
                    href="tel:7654041612"
                    className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-sky-400 transition-colors inline-flex items-center"
                    title="Call Ajay Kumar"
                  >
                    <Phone className="w-3 h-3" />
                  </a>
                  <a
                    href="https://wa.me/917654041612?text=Hello%20Ajay%20ji,%20I%20want%20to%20inquire%20about%20blood%20test%20at%20Asneha%20Diagnostic"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-emerald-400 transition-colors inline-flex items-center"
                    title="WhatsApp Ajay Kumar"
                  >
                    <MessageSquare className="w-3 h-3" />
                  </a>
                </span>
              </div>
              <div className="mt-1">
                Helpline: <a href="tel:7654041612" className="text-sky-400 font-bold hover:underline">+91 7654041612</a>
              </div>
            </div>
          </div>

          {/* Col 3: Swasth Fit Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Swasth Fit Packages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors">
                  Swasth Fit Super 1 (₹1,250)
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors">
                  Swasth Fit Super 2 (₹1,550)
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors">
                  Swasth Fit Super 3 (₹2,250)
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors font-bold text-amber-400">
                  Swasth Fit Super 4 (₹2,550)
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors">
                  Swasth Fit Complete (₹5,200)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Patient Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  Free Home Collection
                </Link>
              </li>
              <li>
                <Link href="#tests" className="hover:text-amber-400 transition-colors">
                  Individual Blood &amp; Urine Tests
                </Link>
              </li>
              <li>
                <Link href="#consumer-rights" className="hover:text-amber-400 transition-colors">
                  Consumer Rights Charter
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-amber-400 transition-colors">
                  Clinic Photographs
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-amber-400 transition-colors text-slate-500">
                  Reception Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Center Address
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna - 800027, Bihar
            </p>
            <div className="text-xs text-slate-400 pt-1">
              <span className="text-white font-semibold">Hours:</span>
              <p>Mon - Sun: 7:00 AM – 8:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Asneha Diagnostic. Authorized Collection Center of Dr Lal PathLabs Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>CIN: L74899DL1995PLC065388</span>
            <span>•</span>
            <span>Jaganpura, Patna - 800027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
