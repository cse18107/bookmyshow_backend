const express = require('express');
const connect = require('./connect/connect');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.routes')

dotenv.config({path:'./config/.env'})

const app = express();

app.use(express.json());
app.use(cors());

connect();

app.use('/api/user',userRouter);


app.use('/',(req,res)=>{
    res.status(200).json({
        message:"working",
    });
});

module.exports = app;