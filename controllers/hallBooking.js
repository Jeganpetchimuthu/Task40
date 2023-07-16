const mongoose = require("mongoose");

const express = require("express");

const hallBooking = require("../moduls/hallBooking");

const router = express.Router();

const createHallBooking = async (req, res) => {
  console.log(req.body);

  const newHallBooking = new hallBooking({
    customer_name: req.body.customer_name,
    room_name: req.body.room_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    booking_id: req.body.booking_id,
    booking_date: req.body.booking_date,
    booking_status: req.body.booking_status,
  });

  try {
    await newHallBooking.save();

    res.status(200).json(newHallBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createHallBooking = createHallBooking;
