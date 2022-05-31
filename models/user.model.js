const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please enter your first name"],
    },
    lastName:{
        type:String,
        required:[true,"Please enter your last name"],
    },
    picture:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:[true,"Please enter your email address"],
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
    }
});

const User = mongoose.Model('User',userSchema);

module.exports = User;