import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  bookingId: string;
  patientName: string;
  mobile: string;
  age: number;
  gender: string;
  address: string;
  area: string;
  testPackage: string;
  price?: number;
  preferredDate: string;
  preferredTimeSlot: string;
  collectionType: string;
  status: "Pending" | "Confirmed" | "Sample Collected" | "Completed" | "Cancelled";
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },
    address: {
      type: String,
      required: [true, "Address / Landmark is required"],
      trim: true,
    },
    area: {
      type: String,
      default: "Jaganpura, Patna",
    },
    testPackage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    preferredDate: {
      type: String,
      required: true,
    },
    preferredTimeSlot: {
      type: String,
      required: true,
    },
    collectionType: {
      type: String,
      default: "Home Collection (Free)",
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Sample Collected", "Completed", "Cancelled"],
      default: "Pending",
    },
    remarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

// Memory fallback store for instantaneous zero-config operation
export interface MemoryBooking {
  _id: string;
  bookingId: string;
  patientName: string;
  mobile: string;
  age: number;
  gender: string;
  address: string;
  area: string;
  testPackage: string;
  price?: number;
  preferredDate: string;
  preferredTimeSlot: string;
  collectionType: string;
  status: "Pending" | "Confirmed" | "Sample Collected" | "Completed" | "Cancelled";
  remarks?: string;
  createdAt: string;
  updatedAt: string;
}

declare global {
  var globalBookingStore: MemoryBooking[] | undefined;
}

if (!global.globalBookingStore) {
  // Seed with realistic sample bookings for testing & admin demonstration
  global.globalBookingStore = [
    {
      _id: "demo-booking-1",
      bookingId: "ASNEHA-84920",
      patientName: "Ramesh Chandra Sharma",
      mobile: "9835012456",
      age: 56,
      gender: "Male",
      address: "House No 42, Near Shiv Mandir, New Jaganpura Colony",
      area: "Jaganpura, Patna",
      testPackage: "Swasth Fit Super 4 (Diabetic, Heart, LFT, KFT & Vitamins)",
      price: 2550,
      preferredDate: new Date().toISOString().split("T")[0],
      preferredTimeSlot: "07:00 AM - 08:30 AM (Fasting Sample)",
      collectionType: "Home Collection (Free)",
      status: "Confirmed",
      remarks: "Patient is diabetic, needs fasting sample collection first thing in morning.",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    },
    {
      _id: "demo-booking-2",
      bookingId: "ASNEHA-84921",
      patientName: "Sunita Verma",
      mobile: "9431087654",
      age: 42,
      gender: "Female",
      address: "Flat 201, Shanti Niketan, Near Double Transformer, Base Nagar",
      area: "Base Nagar, Patna",
      testPackage: "Thyroid Profile Total + Complete Blood Count (CBC)",
      price: 800,
      preferredDate: new Date().toISOString().split("T")[0],
      preferredTimeSlot: "08:30 AM - 10:00 AM",
      collectionType: "Home Collection (Free)",
      status: "Pending",
      remarks: "Please call 10 mins before arrival.",
      createdAt: new Date(Date.now() - 3600000 * 1).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export const fallbackBookingStore = global.globalBookingStore;
