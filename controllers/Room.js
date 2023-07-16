const mongoose = require("mongoose");

const express = require("express");

const Room = require("../moduls/Room");

const router = express.Router();

const createRoom = async (req, res) => {
  console.log(req.body);

  const newRoom = new Room({
    room_id: req.body.room_id,
    seats_available: req.body.seats_available,
    amenities_room: req.body.amenities_room,
    price: req.body.price,
  });

  try {
    await newRoom.save();

    res.status(200).json(newRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createRoom = createRoom;
