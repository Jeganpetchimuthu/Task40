const mongoose = require("mongoose");

const express = require("express");

const bookingRoom = require("../moduls/bookingRoom");

const router = express.Router();

const createBookingRoom = async (req, res) => {
  console.log(req.body);

  const newBookingRoom = new bookingRoom({
    customer_name: req.body.customer_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    room_id: req.body.room_id,
  });

  try {
    await newBookingRoom.save();

    res.status(200).json(newBookingRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createBookingRoom = createBookingRoom;
