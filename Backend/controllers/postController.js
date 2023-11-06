const PostModel = require("../models/PostModel");


const createNewPost = async (req, res) => {
    try {
        const {caption, image, owner, likes, comments} = req.body;

        const obj = {
            caption: req.body.caption,
            image: {
                public_id: "req.body.public_id",
                url: "req.body.url",
            }
        };

        res.status(300).json({success: true});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {createNewPost, }