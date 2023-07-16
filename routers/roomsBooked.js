const express = require("express");

const roomsBookedAction = require("../controllers/roomsBooked");

const router = express.Router();

router.post("/", roomsBookedAction.createRoomsBooked);

module.exports = router;
