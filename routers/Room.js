const express = require("express");

const roomAction = require("../controllers/Room");

const router = express.Router();

router.post("/", roomAction.createRoom);

module.exports = router;
