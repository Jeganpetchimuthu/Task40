const express = require("express");

const bookingRoomAction = require("../controllers/bookingRoom");

const router = express.Router();

router.post("/", bookingRoomAction.createBookingRoom);

module.exports = router;
