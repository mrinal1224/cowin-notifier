const express = require("express");

const router = express.Router();

const Booking = require('../models/booking')

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
                  roomid :room._id,
                  userid,
                  fromDate,
                  toDate,
                  totalDays,
                  totalamount,
                  transactionId :'abc'
                });

                const booking = await newBooking.save()
                res.send('room Booked successfully')
            } catch (error) {
               return res.status(400).json({error})
            }
})


module.exports = router