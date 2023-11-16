const User = require("../models/UsersModel");
const JWT = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {

    try {
        const { token } = req.cookies;
    
        if(!token) return res.status(401).json({success: false, massage: "please login first"});
    
        
        const verified = JWT.verify(token, process.env.JWT_KEY);
    
        if(!verified) res.status(401).res({success: false, massage: "session expired please login first"});
    
        req.user = await User.findById(verified._id);
        next();
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = { isAuthenticated };