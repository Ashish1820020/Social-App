import { createSlice } from "@reduxjs/toolkit";
import { getPostsApi } from "../api/postApi";


const initialState = {
    enableCreatePost: false
}


const utilsSlice = createSlice({

    name: "Utils",
    initialState,
    reducers: {
        setEnableCreatePost(state, action){
            state.enableCreatePost = !state.enableCreatePost;
        }
    },

    // extraReducers: (builder) => {
    //     builder.addCase(getPostsApi.pending, (state, action) => {
    //         state.isLoading = true;
    //     });
    //     builder.addCase(getPostsApi.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.isError = false;
    //         state.allPosts = action?.payload?.posts;
    //     });
    //     builder.addCase(getPostsApi.rejected, (state, action) => {
    //         state.isError = true;
    //         state.isLoggedIn = false;
    //     });
    // }
});




export const { setEnableCreatePost, } = utilsSlice.actions;
export default utilsSlice.reducer;