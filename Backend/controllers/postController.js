const PostModel = require("../models/PostModel");
const UsersModel = require("../models/UsersModel");
const CommentModel = require("../models/CommentsModel");
const cloudinary = require("../utils/cloudinaryConfig");

const createNewPost = async (req, res) => {
    try {
        const { caption } = req.body;
        const image = req.file;
        const queryObj = {caption: "", owner: req.user._id, likes: [], comments: []};

        console.log(caption);

        if (image) {
            const upload = await cloudinary.uploader.upload(image.path);
            queryObj.image = {url: upload.secure_url};
        }

       
        if (caption) {
            queryObj.caption = caption;
        };
       
        const newPost = await PostModel.create(queryObj);
        await newPost.save();

        const user = await UsersModel.findById(req.user._id);
        
        user.posts.push(newPost._id);
        await user.save();

        res.status(200).json({success: true, massage: "New Post pushed successfully"});
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

        res.status(200).json({success: true, massage: "Post content updated successfully", post});
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

        user.posts.splice(index, 1);

        res.status(200).json({success: true, massage: "Post is deleted successfully"});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


const getPostsOfFollowing = async (req, res) => {
    try {
        const user = await UsersModel.findById(req.user._id);

        const posts = await PostModel.find({
            owner:{
                $in: [...user.following, req.user._id]
            }
        })
        .populate('owner')
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
                select: 'name avatar _id'
            }
        });

        res.status(201).json({success: true, massage: "got posts successfully", posts});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};




const getUserPost = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const user = await UsersModel.findById(userId);

        const posts = await PostModel
                            .find({ owner: user._id})
                            .populate('owner')
                            .populate('comments');

        res.status(201).json({success: true, massage: "got user posts successfully", posts});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};




const likeAndUnlikePost = async (req, res, next) => {
    try {
        const post = await PostModel.findById(req.params.postId).populate('owner');

        if(post.likes.includes(req.user._id)){
            
            const index = post.likes.indexOf(req.user._id);
    
            post.likes.splice(index, 1);
            await post.save();

            
            return res.status(201).json({success: true, massage: "post un-liked successfully", post});
        }
        
        post.likes.push(req.user._id);
        
        await post.save();
        await post
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
                select: 'name avatar _id'
            }
        });

        res.status(201).json({success: true, message: "post liked successfully", post});
    } catch (error) {
        console.log(error);
        res.status(201).json({success: false, message: error.massage});
    }
}


const commentOnPost = async (req, res, next) => {
    const { commentText } = req.body;
    try {
        const post = await PostModel.findById(req.params.postId).populate('owner');
        const newComment = await CommentModel.create({content: commentText, user: req.user._id, post: req.params. postId})
        newComment.save();
        post.comments.push(newComment._id);
        
        await post.save()

        await post
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
                select: 'name avatar _id'
            }
        });

        res.status(201).json({success: true, message: "your comment posted successfully", post});
    } catch (error) {
        console.log(error);
        res.status(201).json({success: false, message: error.massage});
    }
}

module.exports = { createNewPost, likeAndUnlikePost, updatePost, deletePost, getPostsOfFollowing, getUserPost, commentOnPost };