const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter a name"]
    },

    avatar:{
        type: String
    }, 

    coverImage:{
        type: String
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

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts"
        }
    ],

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],

    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ]
});


userSchema.methods.getJWTToken = function () {
    return JWT.sign({ _id: this._id }, process.env.JWT_KEY, {expiresIn: "7d"});
}


module.exports = mongoose.model("Users", userSchema);