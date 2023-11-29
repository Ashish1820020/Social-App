const UserModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendToken");
const cloudinary = require("../utils/cloudinaryConfig");




/**
 * All the routes related to Auth are present here.
 * */

/**
 * This handler handles user registration.
 * send POST Request at /api/v1/auth/signup
 * body contains {name, email, password}
 * */

const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const avatar = req.file;

    console.log(req.body);

    if (password != confirmPassword)
      return res
        .status(400)
        .json({ success: false, massage: "Password does not match" });

    let user = await UserModel.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .json({ success: false, massage: "User already exist" });

    const encryptedPassword = await bcrypt.hash(password, 10);

    const obj = { name, email, password: encryptedPassword };

    if (avatar) {
      obj.avatar = {
        public_id: "public",
        url: "url",
      };
    }

    user = await UserModel.create(obj);
    res
      .status(201)
      .json({ success: true, massage: "Registration successful", user });
  } catch (error) {
    res.status(500).json({ success: false, massage: error });
  }
};






/**
 * This handler handles user login.
 * send GET Request at /api/v1/auth/login
 * body contains {email, password}
 * */

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password){
      return res
      .status(401)
      .json({ success: false, massage: "Invalid Email or password" });
    }

    let user = await UserModel.findOne({ email: email }).select("+password");
    
    
    if (!user){
      return res
      .status(401)
      .json({ success: false, massage: "Either Email or password is wrong" });
    }
    
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched){
      return res.status(401).json({ success: false, massage: "Either Email or password is wrong" });
    }

    sendToken(user, 201, res);

  } catch (error) {
    res.status(500).json({ success: false, massage: error });
  }
};





/**
 * This handler handles userProfile update.
 * send PUT Request at /api/v1/auth/updateprofile
 * body contains {name, email, avatar}
 * */

const updateProfile = async (req, res, next) => {
  try {

    const {name, email, avatar} = req.body;

    let obj = {};

    if(name) obj.name = name;
    if(email) obj.name = email;
    // if(avatar) {
    //   cloudinary.uploader.upload()
    // }

    await UserModel.findByIdAndUpdate(req.user._id, obj);
    const user = await UserModel.findById(req.user._id);

    res.status(201).json({success: true, massage: "Profile updated successfully", user});

    
  } catch (error) {
    console.log(error);
    res.status(501).json({success: false, massage: "error occurred", error})
  }
};











/**
 * This handler handles user logout.
 * send GET Request at /api/v1/auth/logout
 * */

const logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  
  res.status(200).json({
    success: true,
    msg: "Logged Out",
  });
};




/**
 * This handler handles forgetting passwords.
 * send PATCH Request at /api/v1/auth/forgotpassword
 * body contains {oldPassword, newPassword1, newPassword2}
 * */

const forgotPassword = async (req, res, next) => {
  try {

    const {oldPassword, newPassword1, newPassword2} = req.body;

    if(!oldPassword) return res.status(400).json({success: false, massage: "Enter your old Password"});

    if(newPassword1 != newPassword2) return res.status(400).json({success: false, massage: "Password did not match"});

    let user = await UserModel.findById(req.user._id).select("+password");

    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);

    if(!isPasswordMatched) return res.status(400).json({success: false, massage: "Wrong old password"});
    

    const encryptedPassword = await bcrypt.hash(newPassword1, 10);

  
    user.password = encryptedPassword;

    await user.save();
    

    res.status(201).json({success: true, massage: "Profile updated successfully", user});

    
  } catch (error) {
    console.log(error);
    res.status(501).json({success: false, massage: "error occurred", error})
  }
};



/**
 * This handler handles user following or un-following other profiles.
 * send PATCH Request at /api/v1/auth/follow/:id
 * body contains {oldPassword, newPassword1, newPassword2}
 * */

const followUser = async (req, res) => {
  try {
    const userToFollow = await UserModel.findById(req.params.id);
    const loggedInUser = await UserModel.findById(req.user._id);

    
    if (!userToFollow){
      return res
      .status(401)
      .json({ success: false, massage: "User not found"});
    }

    if(loggedInUser.following.includes(userToFollow._id)){
      let index = loggedInUser.following.indexOf(userToFollow._id);

      loggedInUser.following.splice(index, 1);
      
      index = userToFollow.followers.indexOf(loggedInUser._id);
      
      userToFollow.followers.splice(index, 1);

      await userToFollow.save();
      await loggedInUser.save();

      return res.status(401).json({ success: false, massage: "Un-follow successfully"})
    }
    
    userToFollow.followers.push(loggedInUser._id);
    loggedInUser.following.push(userToFollow._id);

    await userToFollow.save();
    await loggedInUser.save();

    return res.status(401).json({ success: false, massage: "Following added successfully"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error });
  }
};







module.exports = { registerUser, loginUser, followUser, logout, updateProfile, forgotPassword };
