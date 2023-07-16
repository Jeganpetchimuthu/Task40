const mongoose = require("mongoose");

const express = require("express");

const roomsBooked = require("../moduls/roomsBooked");

const router = express.Router();

const createRoomsBooked = async (req, res) => {
  console.log(req.body);

  const newRoomsBooked = new roomsBooked({
    room_name: req.body.room_name,
    booked_status: req.body.booked,
    customer_name: req.body.customer_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  });

  try {
    await newRoomsBooked.save();

    res.status(200).json(newRoomsBooked);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createRoomsBooked = createRoomsBooked;
