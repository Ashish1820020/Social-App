import { createSlice } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../api/authApi";

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
    isLoggedIn: getUserData()? true : false
}




const authSlice = createSlice({

    name: "Auth",
    initialState,
    reducers: {},



    extraReducers: (builder) => {
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
    }
});




export const {} = authSlice.actions;
export default authSlice.reducer;