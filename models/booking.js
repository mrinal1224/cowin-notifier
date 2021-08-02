const mongoose = require("mongoose");

//creating the schema
const bookingSchema = mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    roomid: {
      type: String, //can use mongoDB object
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
     transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Booked",
    }
  },
  {
    timestamps: true,
  }
);

const bookingmodel = mongoose.model("bookings", bookingSchema);

module.exports = bookingmodel;
