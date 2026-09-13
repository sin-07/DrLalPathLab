"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Activity, 
  ArrowLeft, 
  Search, 
  Filter, 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Clock3, 
  AlertCircle, 
  Trash2, 
  RefreshCw,
  Send,
  Database
} from "lucide-react";

export default function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [source, setSource] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings || []);
        setSource(data.source || "local");
      } else {
        setError(data.error || "Failed to load bookings");
      }
    } catch (err: any) {
      setError("Failed to connect to backend API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) =>
          prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
        );
      }
    } catch (e) {
      alert("Error updating status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking record?")) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
      }
    } catch (e) {
      alert("Error deleting record");
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.mobile?.includes(searchTerm) ||
      b.bookingId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.testPackage?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = bookings.filter((b) => b.status === "Pending").length;
  const confirmedCount = bookings.filter((b) => b.status === "Confirmed").length;
  const collectedCount = bookings.filter((b) => b.status === "Sample Collected").length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Admin Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl font-heading text-white">
                  Asneha Diagnostic
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500 text-slate-950">
                  Staff Reception Portal
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Dr Lal PathLabs Collection Center • Jaganpura, Patna
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">Data Source:</span>
              <span className="font-mono text-emerald-400 font-bold uppercase text-[11px]">
                {source}
              </span>
            </div>
            <button
              onClick={fetchBookings}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700">
            <div className="text-xs font-bold text-slate-400 uppercase">Total Bookings</div>
            <div className="text-3xl font-black text-white mt-1">{bookings.length}</div>
          </div>
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div className="text-xs font-bold text-amber-400 uppercase">Pending Pickup</div>
            <div className="text-3xl font-black text-amber-400 mt-1">{pendingCount}</div>
          </div>
          <div className="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/30">
            <div className="text-xs font-bold text-sky-400 uppercase">Confirmed</div>
            <div className="text-3xl font-black text-sky-400 mt-1">{confirmedCount}</div>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="text-xs font-bold text-emerald-400 uppercase">Sample Collected</div>
            <div className="text-3xl font-black text-emerald-400 mt-1">{collectedCount}</div>
          </div>
        </div>

        {/* Search & Filter Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by patient name, mobile, booking ID..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400 font-semibold">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Sample Collected">Sample Collected</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Bookings List */}
        {loading ? (
          <div className="text-center py-20 text-slate-400 space-y-2">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-amber-400" />
            <p className="text-sm">Loading bookings from database...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-800/40 border border-slate-800 text-slate-400">
            No bookings found matching your filter.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((b) => (
              <div
                key={b._id}
                className="p-6 rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      {b.bookingId}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        b.status === "Pending"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : b.status === "Confirmed"
                          ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                          : b.status === "Sample Collected"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                          : b.status === "Completed"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                      }`}
                    >
                      {b.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      Booked on {new Date(b.createdAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white">
                      {b.patientName}{" "}
                      <span className="text-xs font-normal text-slate-400">
                        ({b.age} yrs • {b.gender})
                      </span>
                    </h3>
                    <p className="text-sm font-bold text-sky-400 mt-0.5">
                      {b.testPackage} {b.price ? `• ₹${b.price}` : ""}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{b.address}, {b.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Slot: {b.preferredDate} ({b.preferredTimeSlot})</span>
                    </div>
                  </div>

                  {b.remarks && (
                    <div className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                      <strong>Remarks:</strong> {b.remarks}
                    </div>
                  )}
                </div>

                {/* Actions & Status Control */}
                <div className="flex flex-wrap lg:flex-col items-end gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-700">
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${b.mobile}`}
                      className="px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>Call {b.mobile}</span>
                    </a>
                    <a
                      href={`https://wa.me/91${b.mobile}?text=Hello%20${encodeURIComponent(b.patientName)},%20this%20is%20from%20Asneha%20Diagnostic%20(Dr%20Lal%20PathLabs%20Center,%20Patna)%20regarding%20your%20home%20sample%20collection%20booking%20${b.bookingId}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={b.status}
                      onChange={(e) => handleUpdateStatus(b._id, e.target.value)}
                      className="bg-slate-900 border border-slate-700 text-xs text-amber-400 font-bold rounded-xl px-3 py-2 focus:outline-none"
                    >
                      <option value="Pending">Mark: Pending</option>
                      <option value="Confirmed">Mark: Confirmed</option>
                      <option value="Sample Collected">Mark: Sample Collected</option>
                      <option value="Completed">Mark: Completed</option>
                      <option value="Cancelled">Mark: Cancelled</option>
                    </select>

                    <button
                      onClick={() => handleDelete(b._id)}
                      className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                      title="Delete Record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
