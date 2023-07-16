const mongoose = require("mongoose");

const hallBookingSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  room_name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  booking_id: {
    type: String,
    required: true,
  },
  booking_date: {
    type: String,
    required: true,
  },
  booking_status: {
    type: String,
  },
});
const hallBooking = mongoose.model("hallBooking", hallBookingSchema);
module.exports = hallBooking;
