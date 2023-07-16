const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  room_id: {
    type: Number,
    required: true,
  },

  seats_available: {
    type: Number,
    required: true,
  },
  amenities_room: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
