import { createSlice } from "@reduxjs/toolkit";
import { getUserProfileData, loginApi, logoutApi, manageFriends, sendOrCancelFriendRequest, signupApi, updateUserProfileApi } from "../api/authApi";

const getUserData = () => {
    const localUserData = localStorage.getItem("userData");
    if(localUserData) return JSON.parse(localUserData);
    return null;
}

const initialState = {
    isLoading: false,
    isError: false,
    userData: getUserData(),
    lastLogin: "",
    lastUpdated: "",
    allUsers: "",
    userProfileData: {},
    isLoggedIn: getUserData()? true : false
}




const authSlice = createSlice({

    name: "Auth",
    initialState,
    reducers: {
        setUserData(state, action){
            state.userData = action.payload;
        }
    },

    
    
    extraReducers: (builder) => {
        // Login Reducer
        builder.addCase(loginApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action.payload.user;
            state.isLoggedIn = true;
        });
        builder.addCase(loginApi.rejected, (state, action) => {
            state.isError = true;
            state.isLoggedIn = false;
        });

        
        // Signup Reducer
        builder.addCase(signupApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(signupApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action.payload.user;
            state.isLoggedIn = true;
        });
        builder.addCase(signupApi.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isLoggedIn = false;
        });


        // UpdateProfile Reducer
        builder.addCase(updateUserProfileApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateUserProfileApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action.payload.user;
        });
        builder.addCase(updateUserProfileApi.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });


        // Logout Reducer
        builder.addCase(logoutApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(logoutApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = null;
            state.isLoggedIn = false;
        });
        builder.addCase(logoutApi.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });


        // HANDLE SEND OR CANCEL FRIEND REQUEST SENDING
        builder.addCase(sendOrCancelFriendRequest.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(sendOrCancelFriendRequest.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action?.payload;
        });
        builder.addCase(sendOrCancelFriendRequest.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });


        // HANDLE ACCEPTING, REJECTING FRIEND REQUEST OR UNFRIEND AN USER
        builder.addCase(manageFriends.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(manageFriends.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action?.payload;
        });
        builder.addCase(manageFriends.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
});




export const {setUserData} = authSlice.actions;
export default authSlice.reducer;