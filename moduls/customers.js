const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
});
const customers = mongoose.model("customers", customerSchema);
module.exports = customers;
