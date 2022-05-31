const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:'../config/.env'});

function connect(){
    mongoose.connect(process.env.DB).then(()=>{
        console.log("DB is connected successfully");
    }).catch((error)=>{
        console.log(error.message);
    })
};

module.exports = connect;