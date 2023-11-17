const express = require("express");
const { createNewPost, updatePost, deletePost, likeAndUnlikePost, getPostsOfFollowing } = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/Auth");
const router = express.Router();



router.route("/post/upload").post(isAuthenticated, createNewPost);
router.route("/post/updatepost/:postId").put(isAuthenticated, updatePost);
router.route("/post/deletepost/:postId").get(isAuthenticated, deletePost);

router.route("/post/getposts").get(isAuthenticated, getPostsOfFollowing);

router.route("/post/likeunlike/:postId").patch(isAuthenticated, likeAndUnlikePost);

module.exports = router;