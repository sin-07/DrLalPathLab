"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, MapPin, CheckCircle2, Maximize2, X } from "lucide-react";

interface GalleryPhoto {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  span?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/center-entrance.jpg",
    title: "Center Entrance & Reception",
    subtitle: "Dr Lal PathLabs Authorized Collection Center sign & hygienic glass cabin",
    tag: "Main Storefront",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/clinic-sample-lab.jpg",
    title: "Hygienic Sample Collection Desk",
    subtitle: "Sterile BD Vacutainer vacuum tubes, barcode labeling & patient comfort chair",
    tag: "Sample Station",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/center-building.jpg",
    title: "Clinic Building Exterior",
    subtitle: "East of Double Transformer, New Jaganpura Colony, Base Nagar, Patna",
    tag: "Building Facade",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/family-legacy.jpg",
    title: "Legacy of Superior Diagnostic Care",
    subtitle: "75+ years of clinical excellence trusted by millions of families",
    tag: "Brand Heritage",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/swasthfit-tariff.jpg",
    title: "Official Swasth Fit Tariff Chart & Visiting Card",
    subtitle: "In-Charge: Ajay Kumar (DMLT) | Mob: 7654041612 | Transparent pricing",
    tag: "Pricing & In-Charge",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    src: "/images/consumer-rights.jpg",
    title: "Patient Consumer Rights Charter",
    subtitle: "Right to verified name, computerized invoices & critical SMS alerts",
    tag: "Quality Charter",
    span: "md:col-span-1 lg:col-span-1",
  },
];

export const CenterGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: GSAP Upward */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Center Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Our Jaganpura <span className="text-amber-400">Center Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Take a real tour of <strong>Asneha Diagnostic</strong> in Patna. Certified hygienic environment, vacuum sample collection tubes, and certified staff led by Ajay Kumar (DMLT).
          </p>
        </div>

        {/* Gallery Grid: GSAP Reveal Stagger */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActivePhoto(photo)}
              className={`gsap-stagger-item group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-2xl cursor-pointer hover:border-amber-400/50 transition-all ${
                photo.span || ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 shadow-md">
                  {photo.tag}
                </span>
              </div>

              {/* Zoom trigger icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center in-charge profile snippet: GSAP Reveal Left */}
        <div className="gsap-reveal-left mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-black text-xl">
              AK
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
                <span>Center In-Charge &amp; Head Phlebotomist</span>
              </div>
              <h4 className="text-xl font-black text-white">Ajay Kumar (DMLT)</h4>
              <p className="text-xs text-slate-400">
                Blood, Stool, Sputum, Urine, Body Fluid analysis &amp; Free Home Collection Specialist
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:7654041612"
              className="px-5 py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
            >
              Direct Call: 7654041612
            </a>
            <a
              href="https://wa.me/917654041612?text=Hello%20Ajay%20ji,%20I%20want%20to%20book%20a%20blood%20test%20at%20Asneha%20Diagnostic"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
            >
              WhatsApp Ajay Kumar
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal with Ultimate Popup Animation */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-ultimate-backdrop">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 animate-ultimate-popup">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">{activePhoto.title}</h4>
                <p className="text-xs text-slate-400">{activePhoto.subtitle}</p>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[4/3] w-full bg-black">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
