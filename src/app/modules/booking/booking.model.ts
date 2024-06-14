import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  facility: {
    type: Schema.Types.ObjectId,
    ref: 'Facility',
    required: true,
  },
  payableAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  isBooked: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    default: 'unconfirmed',
  },
});

const Booking = model<TBooking>('Booking', bookingSchema);
export default Booking;