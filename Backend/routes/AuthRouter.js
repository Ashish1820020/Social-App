const express = require("express");
const { registerUser, loginUser, followUser } = require("../controllers/authController");
const { isAuthenticated } = require("../middlewares/Auth");

const router = express.Router();

router.route('/auth/signup').post(registerUser);
router.route('/auth/signin').get(loginUser);
router.route('/auth/follow/:id').post(isAuthenticated, followUser);

module.exports = router;