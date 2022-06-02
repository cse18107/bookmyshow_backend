const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter name of the show"],
    },
    type:{
        type:String
    },
    interested:{
        type:Number,
    },
    aboutMovie:{
        type:String,
        required:[true,"Please enter some description of the show"]
    }
});