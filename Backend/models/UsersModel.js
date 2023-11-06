const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter a name"]
    },

    avatar:{
        public_id: String,
        url: String
    }, 

    email:{
        type: String,
        required: [true, "Enter an Email"],
        unique: [true, "This email already exists"]
    },

    password:{
        type: String,
        required: [true, "Enter a password"],
        minlength: [8, "Password length should be more then 6"],
        select: false
    },

    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    // timestamps: true 
});


module.exports = mongoose.model("Users", userSchema);