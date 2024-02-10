const express = require("express");
const { createNewPost, updatePost, deletePost, likeAndUnlikePost, getPostsOfFollowing, getUserPost, commentOnPost } = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/Auth");
const multer = require("multer");
const path = require("path");
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage});


router.route("/post").post(isAuthenticated, upload.single('image'), createNewPost);
router.route("/post/:postId").put(isAuthenticated, updatePost);
router.route("/post/:postId").delete(isAuthenticated, deletePost);

router.route("/post").get(isAuthenticated, getPostsOfFollowing);
router.route("/post/:userId").get(isAuthenticated, getUserPost);

router.route("/post/likeunlike/:postId").patch(isAuthenticated, likeAndUnlikePost);
router.route("/post/comment/:postId").patch(isAuthenticated, commentOnPost);

module.exports = router;