const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    email:{
        type : String,
        required :true,

    },

    password:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required : true
    },

    latitude :{
        type : Number,
        required : true
    },

    longitude : {
        type : Number,
        required : true
    }
},{
    timestamps:true
})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel