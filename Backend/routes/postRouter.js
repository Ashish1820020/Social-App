const express = require("express");
const { createNewPost, updatePost, deletePost, likeAndUnlikePost } = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/Auth");
const router = express.Router();



router.route("/post/upload").post(isAuthenticated, createNewPost);
router.route("/post/updatepost/:postId").put(isAuthenticated, updatePost);
router.route("/post/deletepost/:postId").post(isAuthenticated, deletePost);
router.route("/post/likeunlike/:postId").patch(isAuthenticated, likeAndUnlikePost);

module.exports = router;