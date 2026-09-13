import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Booking, fallbackBookingStore } from "@/lib/models/Booking";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { status, remarks } = body;

    const conn = await connectToDatabase();
    if (conn) {
      const updated = await Booking.findByIdAndUpdate(
        id,
        { ...(status && { status }), ...(remarks !== undefined && { remarks }) },
        { new: true }
      );
      if (!updated) {
        return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, booking: updated });
    } else {
      const index = fallbackBookingStore.findIndex(
        (b) => b._id === id || b.bookingId === id
      );
      if (index === -1) {
        return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
      }
      if (status) fallbackBookingStore[index].status = status;
      if (remarks !== undefined) fallbackBookingStore[index].remarks = remarks;
      fallbackBookingStore[index].updatedAt = new Date().toISOString();

      return NextResponse.json({
        success: true,
        booking: fallbackBookingStore[index],
      });
    }
  } catch (error: any) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const conn = await connectToDatabase();
    if (conn) {
      await Booking.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Booking deleted" });
    } else {
      const index = fallbackBookingStore.findIndex(
        (b) => b._id === id || b.bookingId === id
      );
      if (index !== -1) {
        fallbackBookingStore.splice(index, 1);
      }
      return NextResponse.json({ success: true, message: "Booking deleted" });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
