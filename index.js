const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const dbUrl = "mongodb://0.0.0.0:27017";

mongoose.connect(dbUrl, { useNewUrlParser: false });

const con = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("MongDB connected !!!");
  });
} catch (error) {
  console.log("Error:" + error);
}

const port = 4000;

const roomRouter = require("./routers/Room");

app.use("/rooms", roomRouter);

const bookingRouter = require("./routers/bookingRoom");

app.use("/bookings", bookingRouter);

const roomsbookedRouter = require("./routers/roomsBooked");
app.use("/booked", roomsbookedRouter);

const customersRouter = require("./routers/customers");
app.use("/customers", customersRouter);

const hallBookingRouter = require("./routers/hallBooking");
app.use("/hallbooking", hallBookingRouter);

app.listen(port, () => {
  console.log("The port is Running on " + port);
});
