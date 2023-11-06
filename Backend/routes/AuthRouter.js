const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.route('/auth/signup').get(registerUser);
router.route('/auth/signin').get(loginUser);

module.exports = router;