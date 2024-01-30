import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"


export const getPostsApi = createAsyncThunk("getAllPosts", async () => {

  try {
    const response = await axios.get(`/api/v1/post`)
    console.log(response.data);
    return response?.data?.posts;
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
});


export const addNewPostApi = createAsyncThunk("addNewPost", async (myPost) => {
  await axios.post(`/api/v1/post`, myPost)
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    console.log(error);
    return thunkAPI.rejectWithValue({ error: err.message })
  })
});