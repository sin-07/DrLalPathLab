"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  X, 
  CalendarCheck2, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  SunMedium,
  Check,
  Sunrise,
  Sun,
  Sunset
} from "lucide-react";
import { SWASTH_FIT_PACKAGES } from "@/lib/data/packagesData";

interface HomeCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultPrice?: number;
}

const TIME_SLOTS = [
  { slot: "06:30 AM - 08:00 AM (Early Fasting)", note: "Best for Swasth Fit & Fasting Blood Sugar", Icon: Sunrise, color: "text-amber-500" },
  { slot: "08:00 AM - 09:30 AM (Morning Fasting)", note: "Ideal morning fasting window", Icon: Sun, color: "text-amber-600" },
  { slot: "09:30 AM - 11:30 AM (Routine)", note: "Post-prandial & general blood tests", Icon: SunMedium, color: "text-sky-500" },
  { slot: "04:00 PM - 07:00 PM (Evening)", note: "Non-fasting panels & urgent collection", Icon: Sunset, color: "text-indigo-500" },
];

export const HomeCollectionModal: React.FC<HomeCollectionModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = "Swasth Fit Super 4 (Most Popular)",
  defaultPrice = 2550,
}) => {
  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    age: "35",
    gender: "Male",
    address: "",
    area: "Jaganpura, Patna",
    testPackage: defaultPackage,
    price: defaultPrice,
    preferredDate: new Date().toISOString().split("T")[0],
    preferredTimeSlot: "06:30 AM - 08:00 AM (Early Fasting)",
    collectionType: "Home Collection (Free)",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState("");

  // Animated Dropdown states
  const [packageDropdownOpen, setPackageDropdownOpen] = useState(false);
  const [timeSlotDropdownOpen, setTimeSlotDropdownOpen] = useState(false);

  const packageDropdownRef = useRef<HTMLDivElement>(null);
  const timeSlotDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultPackage) {
      setFormData((prev) => ({
        ...prev,
        testPackage: defaultPackage,
        price: defaultPrice || 0,
      }));
    }
  }, [defaultPackage, defaultPrice]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (packageDropdownRef.current && !packageDropdownRef.current.contains(e.target as Node)) {
        setPackageDropdownOpen(false);
      }
      if (timeSlotDropdownRef.current && !timeSlotDropdownRef.current.contains(e.target as Node)) {
        setTimeSlotDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Freeze / lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevPaddingRight = document.body.style.paddingRight;

      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.paddingRight = prevPaddingRight;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(data.booking);
      } else {
        setSubmitError(data.error || "Failed to book appointment. Please try again.");
      }
    } catch (err: any) {
      setSubmitError("Network error. Please call +91 7654041612 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Home Collection Request - Asneha Diagnostic*\n` +
      `-----------------------------------------\n` +
      `*Booking ID:* ${submitSuccess?.bookingId || "NEW"}\n` +
      `*Patient Name:* ${formData.patientName}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Age/Gender:* ${formData.age} yrs / ${formData.gender}\n` +
      `*Address:* ${formData.address}, ${formData.area}\n` +
      `*Test / Package:* ${formData.testPackage}\n` +
      `*Preferred Slot:* ${formData.preferredDate} at ${formData.preferredTimeSlot}\n` +
      `*Remarks:* ${formData.remarks || "None"}\n\n` +
      `Please confirm sample collection timing. Thank you!`
    );
    return `https://wa.me/917654041612?text=${text}`;
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-ultimate-backdrop"
    >
      <div className="relative w-full max-w-md sm:max-w-lg my-auto bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-200/90 overflow-hidden animate-ultimate-popup">
        
        {/* Header Bar: Compact & Sleek */}
        <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark px-4 py-3 sm:px-5 sm:py-3.5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-wide">
              <Sparkles className="w-2.5 h-2.5 text-slate-950" />
              <span>Free Doorstep Pickup</span>
            </span>
            <span className="text-[10px] text-slate-300 hidden sm:inline">Patna Authorized Center</span>
          </div>

          <h3 className="text-base sm:text-lg font-black font-heading leading-tight pr-6">
            Book Home Sample Collection
          </h3>
          <p className="text-[11px] text-slate-300 truncate mt-0.5">
            Asneha Diagnostic • Dr Lal PathLabs, Jaganpura
          </p>
        </div>

        {/* Content Body: Proportional & Compact */}
        <div className="p-3.5 sm:p-4.5 max-h-[78vh] overflow-y-auto">
          {submitSuccess ? (
            <div className="text-center py-4 space-y-3 animate-ultimate-popup">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md shadow-emerald-500/15">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-lg sm:text-xl font-black text-slate-900">
                  Sample Pickup Registered!
                </h4>
                <p className="text-xs text-slate-600">
                  Your appointment is confirmed in our lab management system.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50/90 via-white to-amber-100/50 border border-amber-200 text-left space-y-1.5 text-xs">
                <div className="flex justify-between items-center py-0.5 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Booking ID:</span>
                  <span className="font-bold text-slate-900 font-mono text-xs">
                    {submitSuccess.bookingId}
                  </span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Patient:</span>
                  <span className="font-semibold text-slate-900">
                    {submitSuccess.patientName} ({submitSuccess.age}y / {submitSuccess.gender})
                  </span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Test / Package:</span>
                  <span className="font-semibold text-sky-700">
                    {submitSuccess.testPackage}
                  </span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Scheduled Date:</span>
                  <span className="font-semibold text-slate-900">
                    {submitSuccess.preferredDate} ({submitSuccess.preferredTimeSlot})
                  </span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500 font-medium">Address:</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {submitSuccess.address}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Alert to Lab In-Charge</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitSuccess(null);
                    onClose();
                  }}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {submitError && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Patient Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone and Age/Gender Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    Mobile Number (For Reports) *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    Age / Gender *
                  </label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      min="1"
                      max="120"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-14 px-1.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-center focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                    />
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="flex-1 px-2 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Selected Health Package / Lab Test Dropdown */}
              <div ref={packageDropdownRef} className="relative">
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5 flex items-center justify-between">
                  <span>Selected Package / Test *</span>
                  <span className="text-[10px] text-amber-600 font-extrabold">Tap to change</span>
                </label>
                
                {/* Dropdown Trigger Button */}
                <button
                  type="button"
                  onClick={() => setPackageDropdownOpen(!packageDropdownOpen)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 hover:bg-white text-left text-xs sm:text-sm flex items-center justify-between transition-all focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-bold text-slate-950 truncate">
                      {formData.testPackage}
                    </span>
                    {formData.price > 0 && (
                      <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded shrink-0">
                        ₹{formData.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-500 shrink-0 transition-transform duration-300 ${
                    packageDropdownOpen ? "rotate-180 text-sky-600" : ""
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {packageDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-200 p-1.5 z-50 max-h-52 overflow-y-auto animate-ultimate-dropdown">
                    <div className="text-[9px] font-black uppercase text-slate-400 px-2 py-0.5">
                      Dr Lal PathLabs Swasth Fit™ Packages
                    </div>
                    {SWASTH_FIT_PACKAGES.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            testPackage: pkg.name,
                            price: pkg.price,
                          });
                          setPackageDropdownOpen(false);
                        }}
                        className={`p-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                          formData.testPackage === pkg.name
                            ? "bg-amber-50 text-amber-950 font-bold border border-amber-200"
                            : "hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {formData.testPackage === pkg.name ? (
                            <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 shrink-0" />
                          )}
                          <div>
                            <div className="text-xs font-bold">{pkg.name}</div>
                            <div className="text-[10px] text-slate-400">{pkg.badge}</div>
                          </div>
                        </div>
                        <span className="text-xs font-black text-amber-600">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                      </div>
                    ))}

                    <div className="pt-1.5 mt-1 border-t border-slate-100 px-1">
                      <div className="text-[9px] font-black uppercase text-slate-400 px-1 py-0.5">
                        Or Type Custom Test Name
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. CBC, Thyroid, Dengue..."
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            testPackage: e.target.value,
                            price: 0,
                          });
                        }}
                        className="w-full mt-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Address & Landmark */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  Home Address &amp; Landmark in Patna *
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. House #14, Near Double Transformer, New Jaganpura Colony, Patna"
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    Collection Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Animated Time Slot Selector */}
                <div ref={timeSlotDropdownRef} className="relative">
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    Preferred Time Slot *
                  </label>
                  <button
                    type="button"
                    onClick={() => setTimeSlotDropdownOpen(!timeSlotDropdownOpen)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 hover:bg-white text-left text-xs sm:text-sm flex items-center justify-between transition-all focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer truncate"
                  >
                    <span className="font-semibold text-slate-900 truncate text-xs">
                      {formData.preferredTimeSlot}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 shrink-0 ml-1 transition-transform duration-300 ${
                      timeSlotDropdownOpen ? "rotate-180 text-sky-600" : ""
                    }`} />
                  </button>

                  {timeSlotDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-200 p-1.5 z-50 animate-ultimate-dropdown">
                      {TIME_SLOTS.map((ts, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              preferredTimeSlot: ts.slot,
                            });
                            setTimeSlotDropdownOpen(false);
                          }}
                          className={`p-1.5 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                            formData.preferredTimeSlot === ts.slot
                              ? "bg-amber-50 text-amber-950 font-bold border border-amber-200"
                              : "hover:bg-slate-50 text-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ts.Icon className={`w-3.5 h-3.5 ${ts.color} shrink-0`} />
                            <div>
                              <div className="text-xs font-bold">{ts.slot}</div>
                              <div className="text-[10px] text-slate-400">{ts.note}</div>
                            </div>
                          </div>
                          {formData.preferredTimeSlot === ts.slot && (
                            <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Special Note / Remarks */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  Remarks / Medical History (Optional)
                </label>
                <input
                  type="text"
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  placeholder="e.g. Patient is diabetic / elderly / call prior"
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                />
              </div>

              {/* Free Home Pickup Guarantee */}
              <div className="p-2 px-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-2 text-[10px] sm:text-[11px] text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>100% Free Home Sample Collection:</strong> Sterile BD Vacutainer vacuum tubes &amp; cold chain sample transport.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer active:scale-98"
              >
                {isSubmitting ? (
                  <span>Registering Sample Pickup...</span>
                ) : (
                  <>
                    <CalendarCheck2 className="w-4 h-4" />
                    <span>Confirm Free Home Pickup</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
