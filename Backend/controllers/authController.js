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

    if (password != confirmPassword){
      return res
        .status(400)
        .json({ success: false, massage: "Password does not match" });
    }

    let user = await UserModel.findOne({ email: email });

    if (user){
      return res
        .status(400)
        .json({ success: false, massage: "User already exist" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const obj = { name, email, password: encryptedPassword };

    if (avatar) {
      const upload = await cloudinary.uploader.upload(avatar.path);
      obj.avatar = upload.secure_url;
    }


    user = await UserModel.create(obj);

    sendToken(user, 201, res);
    
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

    console.log(user);
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

    const {name, email} = req.body;
    let avatar = req.files['avatar'];
    let coverImage = req.files['coverImg'];

    let queryObj = {};

    if(name) queryObj.name = name;
    if(email) queryObj.name = email;

    if (avatar) {
      avatar = avatar[0];
      const upload = await cloudinary.uploader.upload(avatar.path);
      queryObj.avatar = upload.secure_url;
    }

    if (coverImage) {
      coverImage = coverImage[0];
      const upload = await cloudinary.uploader.upload(coverImage.path);
      queryObj.coverImage = upload.secure_url;
    }

    await UserModel.findByIdAndUpdate(req.user._id, queryObj);
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
 * This handler handles user logout.
 * send GET Request at /api/v1/auth/logout
 * */

const verifyAuthToken = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Auth token is verified",
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



const acceptOrRejectFriendRequestOrUnfriendAnUser = async (req, res) => {

  try {
    
    const otherUser = await UserModel.findById(req.params.id);
    const loggedInUser = await UserModel.findById(req.user._id);
    
    if (!otherUser){
      return res
      .status(401)
      .json({ success: false, massage: "User not found"});
    }

    // Unfriend the user if he is a friend
    if(loggedInUser.friends.includes(otherUser._id) && otherUser.friends.includes(loggedInUser._id)){
        
      let index = loggedInUser.friends.indexOf(otherUser._id);
      loggedInUser.friends.splice(index, 1);
      
      index = otherUser.friends.indexOf(loggedInUser._id);
      otherUser.friends.splice(index, 1);
      
      await otherUser.save();
      await loggedInUser.save();
      
      return res.status(200).json({ success: false, massage: "Unfriend the user successfully", user: loggedInUser})
    }
    
    
    const { action } = req.query;
    
    // accepted the friend request
    if(action === 'accepted'){
      loggedInUser.friends.push(otherUser._id);
      otherUser.friends.push(loggedInUser._id);
    }
    
    
    let index = otherUser.sendFriendRequest.indexOf(loggedInUser._id);
    otherUser.sendFriendRequest.splice(index, 1);
    
    index = loggedInUser.receivedFriendRequest.indexOf(otherUser._id);
    loggedInUser.receivedFriendRequest.splice(index, 1);
    
    await otherUser.save();
    await loggedInUser.save();
    
    return res.status(200).json({ success: false, massage: "Unfriend the user successfully", user: loggedInUser})
  } catch (error) {
    console.log(error);
  }
}




const sendOrCancelFriendRequest = async (req, res) => {
  try {
    const otherUser = await UserModel.findById(req.params.id);
    const loggedInUser = await UserModel.findById(req.user._id);

    
    if (!otherUser){
      return res
      .status(401)
      .json({ success: false, massage: "User not found"});
    }


    // cancel the friend request the user
    if(loggedInUser.sendFriendRequest.includes(otherUser._id) && otherUser.receivedFriendRequest.includes(loggedInUser._id)){

      let index = loggedInUser.sendFriendRequest.indexOf(otherUser._id);
      loggedInUser.sendFriendRequest.splice(index, 1);
      
      index = otherUser.receivedFriendRequest.indexOf(loggedInUser._id);
      otherUser.receivedFriendRequest.splice(index, 1);

      await otherUser.save();
      await loggedInUser.save();

      return res.status(200).json({ success: false, massage: "un-send friend request successfully", user: loggedInUser})
    }

    otherUser.receivedFriendRequest.push(loggedInUser._id);
    loggedInUser.sendFriendRequest.push(otherUser._id);

    await otherUser.save();
    await loggedInUser.save();

    return res.status(200).json({ success: false, massage: "send friend request to the user successfully", user: loggedInUser});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error });
  }
};



const getUserProfileData = async (req, res) => {
  try {
    const { userId } = req.params;

    const userData = await UserModel
                          .findById(userId)
                          .select("_id name avatar email followers following coverImage");

    if(!userData)
      return res.status(401).json({success: false, msg: 'User not present', data: {}});

    return res.status(200).json({success: true, msg: 'User data found', data: userData});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error });
  }
};



const getUsers = async (req, res) => {
  try {
    const { search } = req.query;

    const queryObject = {};

    if(search)
      queryObject.name = { $regex: search, $options: 'i' };

    const userData = await UserModel
                          .find(queryObject)
                          .select("_id name avatar");

    return res.status(200).json({success: true, msg: 'Some users found', data: userData});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error });
  }
};



const populateFriendsPageData = async (req, res) => {
  try {
    const loggedInUser = await UserModel.findById(req.user._id).populate({path: 'receivedFriendRequest', select: 'avatar _id name'});

    const queryObject = {};

    if(!loggedInUser)
      return res.status(200).json({success: false, msg: 'User not found'});

    const allUsers = await UserModel.find({}).select('avatar _id name')

    return res.status(200).json({success: true, msg: 'Some users found', allUsers, receivedRequests: loggedInUser.receivedFriendRequest});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error});
  }
};



module.exports = { registerUser, loginUser, logout, updateProfile, forgotPassword, verifyAuthToken, getUserProfileData, getUsers, 
  sendOrCancelFriendRequest, acceptOrRejectFriendRequestOrUnfriendAnUser, populateFriendsPageData };
