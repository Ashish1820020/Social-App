const express = require("express");
const { registerUser, loginUser, followUser, logout, updateProfile, forgotPassword, verifyAuthToken, getUserProfileData } = require("../controllers/authController");
const { isAuthenticated } = require("../middlewares/Auth");
const upload = require("../middlewares/multerSetup");
const uploadFields = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'coverImg', maxCount: 1 }]);

const router = express.Router();


router.route('/auth/signup').post(upload.single('avatar'), registerUser);
router.route('/auth/signin').post(loginUser);
router.route('/auth/logout').get(isAuthenticated, logout);
router.route('/auth/user/:userId').get(isAuthenticated, getUserProfileData);

router.route('/auth/verify').get(isAuthenticated, verifyAuthToken);

router.route('/auth/updateprofile').put(isAuthenticated, uploadFields, updateProfile);

router.route('/auth/forgotpassword').patch(isAuthenticated, forgotPassword);

router.route('/auth/follow/:id').post(isAuthenticated, followUser);

module.exports = router;