import { createSlice } from "@reduxjs/toolkit";
import { getPostsApi, addNewPostApi, getUserPostApi, handleLikeUnLikeApi } from "../api/postApi";

const getPostsData = () => {
    const localUserData = localStorage.getItem("userData");
    if(localUserData) return JSON.parse(localUserData);
    return null;
}

const initialState = {
    isLoading: false,
    isError: false,
    isLikeLoading: false,
    isLikeError: false,
    allPosts: [],
    userPosts: []
}


const postSlice = createSlice({

    name: "Posts",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getPostsApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getPostsApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.allPosts = action?.payload;
        });
        builder.addCase(getPostsApi.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(getUserPostApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUserPostApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userPosts = action?.payload;
        });
        builder.addCase(getUserPostApi.rejected, (state, action) => {
            state.isError = true;
        });


        builder.addCase(handleLikeUnLikeApi.pending, (state, action) => {
            state.isLikeLoading = true;
        });
        builder.addCase(handleLikeUnLikeApi.fulfilled, (state, action) => {
            let { post } = action.payload;
            let { allPosts } = state;
            allPosts = allPosts.map((elem) => {
                if(elem._id === post._id){
                    return post;
                }
                return elem;
            });
            state.allPosts = allPosts;
            state.isLikeError = false;
            state.isLikeError = false;
        });
        builder.addCase(handleLikeUnLikeApi.rejected, (state, action) => {
            state.isError = true;
        });
    }
});




export const {} = postSlice.actions;
export default postSlice.reducer;