const mongoose = require("mongoose");

const roomsBookedSchema = new mongoose.Schema({
  room_name: {
    type: String,
    required: true,
  },
  booked_status: {
    type: String,
  },
  customer_name: {
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
});
const roomsBooked = mongoose.model("roomsBooked", roomsBookedSchema);
module.exports = roomsBooked;
