const express = require("express");
const router = express.Router();
const User = require('../models/user')

router.post('/register' , async(req , res)=>{
    const newUser = new User(req.body)

    try {
        const user= await newUser.save()
        res.send('User Registered Successfully')
    } catch (error) {
         return res.status(400).json({ error });
    }
})

router.post('/login' , async(req , res)=>{
    const [email , password] = req.body

    try {
      const userIn = await  User.findOne({email:email , password :password}) 
      if(user){
        res.send(userIn);
      }
      else{
       return res.status(400).json({ 'message': 'Login Failed Please check your Password and Email' });
      }
     
    } catch (error) {
        return res.status(400).json({ error });
    }
})


module.exports = router
