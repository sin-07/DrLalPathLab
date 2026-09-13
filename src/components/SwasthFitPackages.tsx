"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Check, 
  X, 
  Sparkles, 
  CalendarCheck2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Eye,
  Droplets,
  Clock
} from "lucide-react";
import { SWASTH_FIT_PACKAGES, TARIFF_FEATURES_LIST } from "@/lib/data/packagesData";

interface SwasthFitPackagesProps {
  onSelectPackage: (pkgName: string, price: number) => void;
}

export const SwasthFitPackages: React.FC<SwasthFitPackagesProps> = ({ onSelectPackage }) => {
  const [viewMode, setViewMode] = useState<"cards" | "matrix">("cards");
  const [showOriginalChart, setShowOriginalChart] = useState(false);

  return (
    <section id="packages" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: GSAP Upward Reveal */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-bold mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Dr Lal PathLabs Tariff Chart</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-heading tracking-tight">
            Swasth <span className="text-sky-600">Fit</span>™ Healthcare Packages
          </h2>

          <p className="mt-3 text-base sm:text-lg font-bold text-slate-800">
            Select from our curated <span className="text-sky-700">Swasth Fit™</span> Preventive Health Packages
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All preventive checkup packages include free home sample collection across Patna, barcoded automated lab processing, and digital report delivery on your registered WhatsApp &amp; SMS.
          </p>

          {/* View Toggle & Original Poster Viewer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="bg-slate-200/80 p-1 rounded-2xl inline-flex shadow-inner">
              <button
                onClick={() => setViewMode("cards")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "cards"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Package Cards View
              </button>
              <button
                onClick={() => setViewMode("matrix")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "matrix"
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Comparison Matrix (Official Table)
              </button>
            </div>

            <button
              onClick={() => setShowOriginalChart(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors shadow-sm"
            >
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              <span>View Clinic Tariff Poster</span>
            </button>
          </div>
        </div>

        {/* MODE 1: ENHANCED CARDS VIEW */}
        {viewMode === "cards" && (
          <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-3.5 2xl:gap-5 items-stretch">
            {SWASTH_FIT_PACKAGES.map((pkg) => {
              const isPopular = pkg.isPopular;
              const discountPercent = Math.round(
                ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
              );

              return (
                <div
                  key={pkg.id}
                  className={`gsap-stagger-item rounded-3xl p-5 xl:p-4 2xl:p-5 transition-all duration-300 flex flex-col justify-between h-full relative ${
                    isPopular
                      ? "bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navyDark text-white shadow-2xl ring-2 ring-amber-400 hover:shadow-amber-500/20 hover:-translate-y-1"
                      : "bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 text-slate-900 border border-amber-200/90 shadow-lg hover:shadow-xl hover:shadow-amber-500/15 hover:border-amber-400 hover:-translate-y-1"
                  }`}
                >
                  <div className="flex flex-col flex-1">
                    {/* Top Badge & Discount Header: Guaranteed Single-Line & Non-Wrapping */}
                    <div className="flex items-center justify-between gap-1 mb-3.5 pb-2.5 border-b border-dashed border-slate-200/50">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap shrink-0 ${
                          isPopular
                            ? "bg-amber-400 text-slate-950 shadow-sm"
                            : "bg-amber-100/80 text-amber-900 border border-amber-200"
                        }`}
                      >
                        {isPopular && <Sparkles className="w-3 h-3 text-slate-950 shrink-0" />}
                        <span>{pkg.badge}</span>
                      </span>

                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shrink-0 ${
                          isPopular
                            ? "bg-amber-400/25 text-amber-300 border border-amber-400/40"
                            : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        }`}
                      >
                        {discountPercent}% OFF
                      </span>
                    </div>

                    {/* Title & Tagline with Synchronized Heights Across All Cards */}
                    <div className="space-y-1">
                      <div className="min-h-[50px] flex flex-col justify-center">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                          isPopular ? "text-amber-400" : "text-sky-600"
                        }`}>
                          Swasth Fit™
                        </span>
                        <h3
                          className={`text-xl font-black font-heading leading-tight tracking-tight ${
                            isPopular ? "text-white" : "text-slate-950"
                          }`}
                        >
                          {pkg.name.replace("Swasth Fit ", "")}
                        </h3>
                      </div>

                      <p
                        className={`text-xs leading-snug line-clamp-2 h-9 ${
                          isPopular ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Pricing Display with warm yellowish gradient */}
                    <div className={`my-4 p-3.5 rounded-2xl border ${
                      isPopular 
                        ? "bg-slate-800/80 border-amber-400/30 text-white" 
                        : "bg-gradient-to-r from-amber-100/70 via-amber-50 to-amber-100/40 border-amber-200 text-slate-900"
                    }`}>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-2xl sm:text-3xl font-black tracking-tight font-heading ${
                            isPopular ? "text-amber-400" : "text-sky-600"
                          }`}
                        >
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                            isPopular
                              ? "bg-amber-400/20 text-amber-300"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {pkg.parametersCount}+ Parameters
                        </span>
                        <span
                          className={`text-[10px] font-medium ${
                            isPopular ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          • Free Pickup
                        </span>
                      </div>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2 mb-4 flex-1">
                      <p
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          isPopular ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        Included Key Panels:
                      </p>
                      <ul className="space-y-2 text-xs">
                        {pkg.tests.map((test, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                isPopular ? "text-amber-400" : "text-emerald-600"
                              }`}
                            />
                            <span
                              className={`leading-snug text-xs ${
                                isPopular
                                  ? "text-slate-200 font-medium"
                                  : "text-slate-700 font-medium"
                              }`}
                            >
                              {test.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Button (Pinned to Bottom) */}
                  <div className="pt-2 mt-auto">
                    <button
                      onClick={() => onSelectPackage(pkg.name, pkg.price)}
                      className={`w-full py-3 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md ${
                        isPopular
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-400/30 hover:shadow-lg hover:shadow-amber-400/40"
                          : "bg-slate-950 hover:bg-slate-800 text-white hover:shadow-lg"
                      }`}
                    >
                      <CalendarCheck2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Book For ₹{pkg.price.toLocaleString()}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODE 2: MATRIX TABLE */}
        {viewMode === "matrix" && (
          <div className="bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 rounded-3xl shadow-xl border border-amber-200/80 overflow-hidden">
            <div className="p-4 sm:p-6 bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Dr Lal PathLabs • 75+ Years of Trust
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-0.5">
                  Swasth Fit Preventive Healthcare Inclusions Matrix
                </h3>
              </div>
              <div className="text-xs text-slate-300">
                East of Double Transformer, New Jaganpura Colony, Patna
              </div>
            </div>

            {/* Mobile swipe hint */}
            <div className="sm:hidden bg-amber-500/10 px-4 py-2 text-[11px] font-bold text-amber-900 border-b border-amber-200/60 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                Swipe table sideways to compare all 5 packages
              </span>
              <span className="text-xs font-semibold">→</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-800">
                    <th className="p-3 sm:p-4 font-extrabold text-slate-950 min-w-[200px]">
                      Test Name / Parameter
                    </th>
                    {SWASTH_FIT_PACKAGES.map((pkg) => (
                      <th
                        key={pkg.id}
                        className={`p-3 sm:p-4 text-center font-black min-w-[130px] ${
                          pkg.isPopular ? "bg-amber-500/15 text-amber-900 border-x border-amber-300" : ""
                        }`}
                      >
                        <div>{pkg.name.replace("Swasth Fit ", "")}</div>
                        <div className="text-base sm:text-lg font-black text-slate-950 mt-1">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {TARIFF_FEATURES_LIST.map((feature) => (
                    <tr key={feature.key} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 sm:p-4 font-semibold text-slate-800">
                        {feature.label}
                      </td>
                      {SWASTH_FIT_PACKAGES.map((pkg) => {
                        const isIncluded = (pkg.includedMap as any)[feature.key];
                        return (
                          <td
                            key={pkg.id}
                            className={`p-3 sm:p-4 text-center ${
                              pkg.isPopular ? "bg-amber-50/40 border-x border-amber-100" : ""
                            }`}
                          >
                            {isIncluded ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                              </span>
                            ) : (
                              <span className="text-slate-300 font-bold">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-100/90 border-t-2 border-slate-300">
                    <td className="p-4 font-black text-slate-950 text-sm">
                      Action
                    </td>
                    {SWASTH_FIT_PACKAGES.map((pkg) => (
                      <td
                        key={pkg.id}
                        className={`p-3 sm:p-4 text-center ${
                          pkg.isPopular ? "bg-amber-500/10 border-x border-amber-300" : ""
                        }`}
                      >
                        <button
                          onClick={() => onSelectPackage(pkg.name, pkg.price)}
                          className="px-3 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow transition-all cursor-pointer"
                        >
                          Book Now
                        </button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* MODAL: Original Clinic Poster Viewer with Ultimate Popup Animation */}
      {showOriginalChart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-ultimate-backdrop">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-ultimate-popup">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h4 className="font-bold text-slate-900">Original Swasth Fit Tariff Chart &amp; Visiting Card</h4>
                <p className="text-xs text-slate-500">As displayed at Asneha Diagnostic, Jaganpura, Patna</p>
              </div>
              <button
                onClick={() => setShowOriginalChart(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex justify-center bg-slate-100">
              <div className="relative w-full max-w-md aspect-[723/1024] rounded-xl overflow-hidden shadow-lg border border-slate-300">
                <Image
                  src="/images/swasthfit-tariff.jpg"
                  alt="Dr Lal PathLabs Swasth Fit tariff rate chart and Ajay Kumar visiting card"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
