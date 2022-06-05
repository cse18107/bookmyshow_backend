const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");


//getting user details on creating account and sending token through email for email verification 
const getCreateUser = async (req, res) => {
  try {
      const user = req.body;
      const token = jwt.sign(user,process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRES
      });

      const isStored = await User.findOne().where('email').equals(user.email);
      
      if(isStored && isStored.email){
        console.log(isStored.email)
        res.status(400).json({
          success:false,
          message:`${isStored.email} is already exist`
        })
      }

      const link = `${process.env.BACKEND_URL}/api/user/create/${token}`

      const options = {
          email:user.email,
          subject:'Email verification',
          message:`please click on the link to verify your email \n\n ${link}`
      }

      await sendMail(options);

      res.status(200).json({
          success:true,
          message:"Email send to the email address. Please check your email",
          token
      });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// after successfully done of email verification we create user through token decoding 
const createUser = async (req, res) => {
  try {
    const token = req.params.token;
    
    const user = jwt.decode(token);

    const {firstName,lastName,email,password} = user;


    const storedUser = await User.create({firstName,lastName,email,password});
    res.status(200).json({
      success:true,
      user:storedUser,
      token
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCreateUser,
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
