const express = require("express");

const hallBookingAction = require("../controllers/hallBooking");

const router = express.Router();

router.post("/", hallBookingAction.createHallBooking);

module.exports = router;
