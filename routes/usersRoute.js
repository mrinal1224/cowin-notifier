const express = require("express");
const router = express.Router();
const User = require("../models/user");
const nodeGeocoder = require("node-geocoder");
const nodemailer = require("nodemailer");
const CronJob = require('cron').CronJob;
require("dotenv").config();
const { spawn } = require("child_process");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userIn = await User.findOne({ email: email, password: password });
    if (userIn) {
      const temp = {
        id: userIn._id,
        name: userIn.name,
        email: userIn.email,
        age: userIn.age,
        latitude: userIn.latitude,
        longitude: userIn.longitude,
      };

      let options = {
        provider: "openstreetmap",
      };

      let geoCoder = nodeGeocoder(options);
      // Reverse Geocode
      geoCoder
        .reverse({ lat: temp.latitude, lon: temp.longitude })
        .then((res) => {
          let zipcode = String(res[0].zipcode);
          let userEmail = temp.email;
          let userAge = temp.age;
             var job = new CronJob(
               "* 5 * * * *",
               function () {
                  if (userAge < 18) {
                    let transporter = nodemailer.createTransport({
                      service: "gmail",
                      auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD,
                      },
                    });

                    let mailoptions = {
                      from: "iammrinalkc@gmail.com",
                      to: userEmail,
                      subject: "Sorry! You are under 18",
                      text: "Vaccines are not available for peopele under the age of 18",
                    };

                    transporter.sendMail(mailoptions, function (err, data) {
                      if (err) {
                        console.log("cannot send mail some error occured");
                      } else {
                        console.log("Mail sent Successfully");
                      }
                    });
                  } else {
                    const childPython = spawn("python", [
                      "cowin2.py",zipcode
                    ]);
                    childPython.stdout.on("data", (data) => {
                      console.log(data.toString());
                      let transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: process.env.EMAIL,
                          pass: process.env.PASSWORD,
                        },
                      });

                      let mailoptions = {
                        from: "iammrinalkc@gmail.com",
                        to: userEmail,
                        subject: "Vaccination Slots open for today",
                        text: data.toString(),
                      };

                      transporter.sendMail(mailoptions, function (err, data) {
                        if (err) {
                          console.log("cannot send mail some error occured");
                        } else {
                          console.log("Mail sent Successfully");
                        }
                      });
                    });

                    childPython.stderr.on("data", (data) => {
                      console.error(data.toString());
                    });
                  }
               },
             );
             job.start();
         
        })
        .catch((err) => {
          console.log(err);
        });

      res.send(temp);
    } else {
      return res
        .status(400)
        .json({ message: "Login Failed Please check your Password and Email" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
