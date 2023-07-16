const mongoose = require("mongoose");

const express = require("express");

const customers = require("../moduls/customers");

const router = express.Router();

const createCustomers = async (req, res) => {
  console.log(req.body);

  const newCustomers = new customers({
    customer_name: req.body.customer_name,
    room_name: req.body.room_name,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  });

  try {
    await newCustomers.save();

    res.status(200).json(newCustomers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createCustomers = createCustomers;
