const UserModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const avatar = req.file;

    let user = await UserModel.findOne({ email: email });
    if (user)
      return res
        .status(300)
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
        return res
        .status(401)
        .json({ success: false, massage: "Either Email or password is wrong" });
    }

    const token = JWT.sign({ id: user._id }, process.env.JWT_KEY, {expiresIn: "7d"});

    const options = {
        expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
        httpOnly: true,
      };
    res.status(201).cookie("token", token, options).json({success: true, user, massage: "Logged in successfully"});
  } catch (error) {
    res.status(500).json({ success: false, massage: error });
  }
};

module.exports = { registerUser, loginUser };
