"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles 
} from "lucide-react";

interface HomeCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultPrice?: number;
}

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
    preferredTimeSlot: "07:00 AM - 08:30 AM (Fasting Sample)",
    collectionType: "Home Collection (Free)",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (defaultPackage) {
      setFormData((prev) => ({
        ...prev,
        testPackage: defaultPackage,
        price: defaultPrice || 0,
      }));
    }
  }, [defaultPackage, defaultPrice]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase mb-2">
            <span>Free Doorstep Pickup</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-heading">
            Book Free Home Sample Collection
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Asneha Diagnostic • Dr Lal PathLabs Authorized Collection Center, Patna
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/15 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-black text-slate-900">
                  Sample Pickup Registered!
                </h4>
                <p className="text-sm text-slate-600">
                  Your request has been stored in our diagnostic system.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Booking ID:</span>
                  <span className="font-bold text-slate-900 font-mono text-sm">
                    {submitSuccess.bookingId}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Patient:</span>
                  <span className="font-semibold text-slate-900">
                    {submitSuccess.patientName} ({submitSuccess.age}y / {submitSuccess.gender})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Test / Package:</span>
                  <span className="font-semibold text-sky-700">
                    {submitSuccess.testPackage}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Scheduled Date:</span>
                  <span className="font-semibold text-slate-900">
                    {submitSuccess.preferredDate} ({submitSuccess.preferredTimeSlot})
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Address:</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {submitSuccess.address}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Instant WhatsApp Alert to Lab In-Charge</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitSuccess(null);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Patient Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone and Age/Gender Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number (For Reports &amp; Call) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Age / Gender *
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="number"
                      min="1"
                      max="120"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-16 px-2 py-2.5 rounded-xl border border-slate-300 text-sm text-center focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="flex-1 px-2 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Selected Test / Package */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Selected Health Package / Test *
                </label>
                <input
                  type="text"
                  required
                  value={formData.testPackage}
                  onChange={(e) => setFormData({ ...formData, testPackage: e.target.value })}
                  placeholder="e.g. Swasth Fit Super 4, CBC, Lipid Profile..."
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              {/* Address & Landmark in Patna */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Home Address &amp; Nearby Landmark in Patna *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. House #14, Near Double Transformer / Shiv Mandir, New Jaganpura"
                    className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Collection Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="06:30 AM - 08:00 AM (Early Fasting)">06:30 AM - 08:00 AM (Early Fasting)</option>
                    <option value="08:00 AM - 09:30 AM (Fasting)">08:00 AM - 09:30 AM (Fasting)</option>
                    <option value="09:30 AM - 11:00 AM">09:30 AM - 11:00 AM</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    <option value="04:00 PM - 07:00 PM (Evening)">04:00 PM - 07:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Special Note / Remarks */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Remarks / Medical History (Optional)
                </label>
                <input
                  type="text"
                  value={formData.remarks}
                  onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  placeholder="e.g. Patient is diabetic / elderly / please call 15 mins prior"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              {/* Free Home Pickup Guarantee */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-900">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                <span>
                  <strong>100% Free Home Sample Collection:</strong> Sterile BD Vacutainer vacuum tubes used. Cold chain sample transport to central lab.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
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
