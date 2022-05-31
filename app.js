const express = require('express');
const connect = require('./connect/connect');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:'./config/.env'})

const app = express();

app.use(express.json());
app.use(cors());

connect();


app.use('/',(req,res)=>{
    res.status(200).json({
        message:"working",
    });
});

module.exports = app;