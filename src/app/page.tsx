"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SwasthFitPackages } from "@/components/SwasthFitPackages";
import { PopularTestsSection } from "@/components/PopularTestsSection";
import { CenterGallery } from "@/components/CenterGallery";
import { HowItWorks } from "@/components/HowItWorks";
import { ConsumerRightsSection } from "@/components/ConsumerRightsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HomeCollectionModal } from "@/components/HomeCollectionModal";
import { setupGSAPAnimations } from "@/lib/animations";
import { Phone, CalendarPlus, MessageSquare } from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("Swasth Fit Super 4");
  const [selectedPrice, setSelectedPrice] = useState<number>(2550);

  // Initialize 4-directional GSAP ScrollTrigger animations
  useEffect(() => {
    const cleanup = setupGSAPAnimations(containerRef);
    return cleanup;
  }, []);

  const handleOpenBooking = (packageName?: string, price?: number) => {
    if (packageName) {
      setSelectedPackage(packageName);
      setSelectedPrice(price || 0);
    }
    setIsBookingOpen(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-950 pb-24 sm:pb-0 overflow-x-hidden">
      
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section with 4-directional GSAP entrance & real photos */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Swasth Fit Preventive Healthcare Packages from official rate chart */}
        <SwasthFitPackages onSelectPackage={(pkg, price) => handleOpenBooking(pkg, price)} />

        {/* 3. Popular Diagnostic Tests Searchable Catalog */}
        <PopularTestsSection onBookTest={(test, price) => handleOpenBooking(test, price)} />

        {/* 4. Real Clinic Photo Showcase (Jaganpura Center) */}
        <CenterGallery />

        {/* 5. How Home Sample Collection Works */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Know Your Rights As A Consumer (From Image 5) */}
        <ConsumerRightsSection />

        {/* 7. Contact Details, Landmark & Directions */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Home Collection Booking Modal (Connected to MongoDB & WhatsApp) */}
      <HomeCollectionModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPackage={selectedPackage}
        defaultPrice={selectedPrice}
      />

      {/* Persistent Floating Bottom Action Bar on Mobile/Tablet */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2">
          <a
            href="tel:7654041612"
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Call Lab</span>
          </a>
          <button
            onClick={() => handleOpenBooking()}
            className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-lg shadow-amber-400/20"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Book Pickup</span>
          </button>
          <a
            href="https://wa.me/917654041612?text=Hello%20Ajay%20ji,%20I%20want%20to%20inquire%20about%20blood%20test%20at%20Asneha%20Diagnostic"
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
