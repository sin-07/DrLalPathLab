"use client";

import React, { useState } from "react";
import { Search, Filter, Clock, Droplets, CalendarPlus, CheckCircle } from "lucide-react";
import { POPULAR_TESTS, DiagnosticTest } from "@/lib/data/testsData";

interface PopularTestsSectionProps {
  onBookTest: (testName: string, price: number) => void;
}

const CATEGORIES = [
  "All",
  "Fever & Infection",
  "Diabetes",
  "Thyroid",
  "Heart",
  "Liver & Kidney",
  "Vitamins",
  "Urine & Stool",
];

export const PopularTestsSection: React.FC<PopularTestsSectionProps> = ({ onBookTest }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = POPULAR_TESTS.filter((test) => {
    const matchesCategory =
      selectedCategory === "All" || test.category === selectedCategory;
    const matchesSearch =
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tests" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: GSAP Upward */}
        <div className="gsap-reveal-up text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            Over 5,000+ Pathology Tests Available
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-heading">
            Popular Individual <span className="text-sky-600">Diagnostic Tests</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Book individual routine or specialized blood, urine, and body fluid tests. All tests are processed under strict Dr Lal PathLabs automated protocols.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search test name (e.g. CBC, Lipid, Thyroid, Vitamin D)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-950 text-amber-400 shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid: GSAP Stagger */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="gsap-stagger-item rounded-2xl p-6 bg-slate-50/70 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100/80 text-sky-800">
                    {test.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {test.code}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {test.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {test.description}
                </p>

                {/* Test details badges */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-3 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-rose-500" />
                    <span>{test.sampleType} Sample</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{test.tat}</span>
                  </div>
                </div>

                <div className="mt-2 text-[11px] text-slate-500 italic">
                  ℹ️ {test.fasting}
                </div>
              </div>

              {/* Price & Booking Button */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Price:</span>
                  <div className="text-xl font-black text-slate-950">
                    ₹{test.price}
                  </div>
                </div>
                <button
                  onClick={() => onBookTest(test.name, test.price)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Book Pickup</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No tests found matching &quot;{searchQuery}&quot;. Please call us directly at <strong>+91 7654041612</strong> to inquire about any specialized test!
          </div>
        )}

      </div>
    </section>
  );
};
