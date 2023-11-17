const PostModel = require("../models/PostModel");
const UsersModel = require("../models/UsersModel");


const createNewPost = async (req, res) => {
    try {
        const {caption, image, owner, likes, comments} = req.body;

        const obj = {
            caption: req.body.caption,
            image: {
                public_id: "req.body.public_id",
                url: "req.body.url",
            },
            owner: req.user._id
        };

        const newPost = await PostModel.create(obj);

        const user = await UsersModel.findById(req.user._id);

        user.posts.push(newPost._id);
        await user.save();

        res.status(300).json({success: true, massage: "New Post pushed successfully", post: newPost});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const {caption, image, likes, comments} = req.body;


        const obj = {};

        if(caption) obj.caption = caption;
        if(image) obj.image = image;
        if(likes) obj.likes = likes;
        if(comments) obj.comments = comments;

       await PostModel.findByIdAndUpdate(postId, obj);
       const post = await PostModel.findById(postId);

        res.status(300).json({success: true, massage: "Post content updated successfully", post});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        await PostModel.findByIdAndDelete(postId);

        const user = await UsersModel.findById(req.user._id);

        const index =  user.posts.indexOf(postId);
        console.log(index);

        user.posts.splice(index, 1);

        res.status(300).json({success: true, massage: "Post is deleted successfully"});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


const getPostsOfFollowing = async (req, res) => {
    try {

        const user = await UsersModel.findById(req.user._id)

        const posts = await PostModel.find({
            owner:{
                $in: user.following
            }
        });

        res.status(300).json({success: true, massage: "got posts successfully", posts});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


const likeAndUnlikePost = async (req, res, next) => {
    try {
        const post = await PostModel.findById(req.params.id);


        if(post.likes.includes(req.user._id)){
            
            const index = post.likes.indexOf(req.user._id);
    
            post.likes.splice(index, 1);

            await post.save();
            return res.status(201).json({success: true, massage: "post un-liked successfully"});
        }

        post.likes.push(req.user._id);

        await post.save();

        res.status(201).json({success: true, message: "post liked successfully"});
    } catch (error) {
        console.log(error);
        res.status(201).json({success: false, message: error.massage});
    }
}

module.exports = { createNewPost, likeAndUnlikePost, updatePost, deletePost, getPostsOfFollowing };