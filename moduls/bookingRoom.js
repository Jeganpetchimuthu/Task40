const mongoose = require("mongoose");

const bookingRoomSchema = new mongoose.Schema({
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
  room_id: {
    type: Number,
    required: true,
  },
});
const bookingRoom = mongoose.model("bookingRoom", bookingRoomSchema);
module.exports = bookingRoom;
