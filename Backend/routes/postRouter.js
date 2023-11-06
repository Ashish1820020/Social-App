const express = require("express");
const { createNewPost } = require("../controllers/postController");
const router = express.Router();



router.route("/create-post").get(createNewPost);

module.exports = router;