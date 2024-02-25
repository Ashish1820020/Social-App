import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"


export const getPostsApi = createAsyncThunk("getAllPosts", async () => {
  try {
    const response = await axios.get(`/api/v1/post`)
    return response?.data?.posts;
  } catch (error) {
    console.log(error);
    throw error; 
  }
});

// export const getUserPostApi = async (userId) => {
//   try {
//     const response = await axios.get(`/api/v1/post/${userId}`)
//     // console.log(response.data);
//     return response?.data?.posts;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };


export const getUserPostApi = createAsyncThunk("getUserPosts", async (userId) => {
  try {
    const response = await axios.get(`/api/v1/post/${userId}`)
    // console.log(response.data);
    return response?.data?.posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
});


export const addNewPostApi = createAsyncThunk("addNewPost", async (myPost) => {
  try{
    const response = await axios.post(`/api/v1/post`, myPost)
    console.log(response.data);
    return response.data;

  }catch(error){
    console.log(error);
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});


export const handleLikeUnLikeApi = createAsyncThunk("likeUnlikePost", async (postId) => {
  try {
    const response = await axios.patch(`/api/v1/post/likeunlike/${postId}`)
    // console.log(response.data);
    return response.data; 
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});


export const commentOnPostApi = createAsyncThunk("commentOnPost", async ({postId, commentText, commentOwner}) => {
  try {
    const response = await axios.patch(`/api/v1/post/comment/${postId}`, {commentText, commentOwner})
    // console.log(response.data);
    return response.data; 
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});