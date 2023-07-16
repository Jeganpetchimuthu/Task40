const express = require("express");

const customersAction = require("../controllers/customers");

const router = express.Router();

router.post("/", customersAction.createCustomers);

module.exports = router;
