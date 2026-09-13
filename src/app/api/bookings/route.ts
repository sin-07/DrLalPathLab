import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Booking, fallbackBookingStore, MemoryBooking } from "@/lib/models/Booking";

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const bookings = await Booking.find({}).sort({ createdAt: -1 }).lean();
      return NextResponse.json({ success: true, bookings, source: "mongodb" });
    } else {
      // Fallback in-memory
      const bookings = [...fallbackBookingStore].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return NextResponse.json({ success: true, bookings, source: "local-fallback" });
    }
  } catch (error: any) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      patientName,
      mobile,
      age,
      gender,
      address,
      area,
      testPackage,
      price,
      preferredDate,
      preferredTimeSlot,
      collectionType,
      remarks,
    } = body;

    if (!patientName || !mobile || !address || !testPackage) {
      return NextResponse.json(
        { success: false, error: "Please provide patient name, mobile, address, and test/package." },
        { status: 400 }
      );
    }

    const bookingId = `ASNEHA-${Math.floor(10000 + Math.random() * 90000)}`;

    const conn = await connectToDatabase();
    if (conn) {
      const newBooking = await Booking.create({
        bookingId,
        patientName,
        mobile,
        age: Number(age) || 30,
        gender: gender || "Male",
        address,
        area: area || "Jaganpura, Patna",
        testPackage,
        price: Number(price) || 0,
        preferredDate: preferredDate || new Date().toISOString().split("T")[0],
        preferredTimeSlot: preferredTimeSlot || "07:00 AM - 09:00 AM",
        collectionType: collectionType || "Home Collection (Free)",
        status: "Pending",
        remarks: remarks || "",
      });
      return NextResponse.json(
        {
          success: true,
          message: "Home collection booking registered successfully!",
          booking: newBooking,
          source: "mongodb",
        },
        { status: 201 }
      );
    } else {
      const newLocalBooking: MemoryBooking = {
        _id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        bookingId,
        patientName,
        mobile,
        age: Number(age) || 30,
        gender: gender || "Male",
        address,
        area: area || "Jaganpura, Patna",
        testPackage,
        price: Number(price) || 0,
        preferredDate: preferredDate || new Date().toISOString().split("T")[0],
        preferredTimeSlot: preferredTimeSlot || "07:00 AM - 09:00 AM",
        collectionType: collectionType || "Home Collection (Free)",
        status: "Pending",
        remarks: remarks || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      fallbackBookingStore.unshift(newLocalBooking);

      return NextResponse.json(
        {
          success: true,
          message: "Home collection booking registered successfully!",
          booking: newLocalBooking,
          source: "local-fallback",
        },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create booking" },
      { status: 500 }
    );
  }
}
