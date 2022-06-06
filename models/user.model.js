const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    role:{
        type:String,
        enum:{
            values:["USER","ADMIN"],
            default:"USER",
            message:"{VALUE} role is not exist"
        },
        required:[true,"Please enter users role"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email address"],
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
    },
    emailVerificationToken:{
        type:String,
    },
    expirationToken:{
        type:String,
    }
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password =await bcrypt.hash(this.password,10);
});

const User = mongoose.model('User',userSchema);

module.exports = User;