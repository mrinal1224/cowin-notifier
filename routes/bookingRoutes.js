const express = require("express");

const router = express.Router();

const Booking = require('../models/booking')
const moment = require('moment')

const Room = require('../models/room');
const { findOne } = require("../models/booking");

router.post('/bookroom' , async (req,res)=>{
    const {room ,
            userid,
            fromDate,
            toDate,
            totalDays,
            totalamount} = req.body

            try {
                const newBooking = new Booking({
                  room: room.name,
                  roomid: room._id,
                  userid,
                  fromDate: moment(fromDate).format("DD-MM-YYYY"),
                  toDate: moment(toDate).format("DD-MM-YYYY"),
                  totalDays,
                  totalamount,
                  transactionId: "abc",
                });

                const booking = await newBooking.save()

                const currentRoom = await Room.findOne({_id : room._id})
                currentRoom.currentbookings.push({
                  bookingid: booking._id,
                  fromDate: moment(fromDate).format("DD-MM-YYYY"),
                  toDate: moment(toDate).format("DD-MM-YYYY"),
                  userid : userid,
                  status: booking.status

                });

                await currentRoom.save();
                res.send('room Booked successfully')
            } catch (error) {
               return res.status(400).json({error})
            }
})


module.exports = router