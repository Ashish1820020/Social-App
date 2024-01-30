import { createSlice } from "@reduxjs/toolkit";
import { getPostsApi, addNewPostApi } from "../api/postApi";

const getPostsData = () => {
    const localUserData = localStorage.getItem("userData");
    if(localUserData) return JSON.parse(localUserData);
    return null;
}

const initialState = {
    isLoading: false,
    isError: false,
    allPosts: []
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
            state.isLoggedIn = false;
        });


        // builder.addCase(addNewPostApi.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(addNewPostApi.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = false;
        //     state.allPosts = action?.payload?.posts;
        // });
        // builder.addCase(addNewPostApi.rejected, (state, action) => {
        //     state.isError = true;
        //     state.isLoggedIn = false;
        // });
    }
});




export const {} = postSlice.actions;
export default postSlice.reducer;