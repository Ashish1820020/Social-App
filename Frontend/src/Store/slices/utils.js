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
            console.log("set");
            state.enableCreatePost = !state.enableCreatePost;
        }
    }
});




export const { setEnableCreatePost, } = utilsSlice.actions;
export default utilsSlice.reducer;