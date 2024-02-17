const User = require("../models/UsersModel");
const JWT = require("jsonwebtoken");


const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
}

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
    
        if(!token) return res.status(200).json({success: false, massage: "please login first"});


        JWT.verify(token, process.env.JWT_KEY, async (err, data) => {
            if(err) {
                return res.status(200).cookie("token", null, options).json({success: false, massage: "session expired please login first"});
            }
            
            req.user = await User.findById(data._id);
            next();
        });  
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success: false, 'msg': 'internal server error'})
    }

}

module.exports = { isAuthenticated };