import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../api/authApi";

const initialState = {
    isLoading: false,
    isError: false,
    userData: {},
    lastLogin: "",
    lastUpdated: "",
    allUsers: "",
    isLoggedIn: false
}




const authSlice = createSlice({

    name: "Auth",
    initialState,
    reducers: {
        isLoading(state, action){
            return {
                ...state,
                isLoading: true
            }
        },

        isError(state, action){
            return {
                ...state,
                isError: true
            }
        },

        setLoggedIn(state, action){
            return {
                ...state, 
                isLoading: false,
                isError: false,
                userData: action.payload,
                lastLogin: Date.now(),
                isLoggedIn: true
            }
        },

        setLoggedOut(state, action){
            return {
                ...state, 
                isLoading: false,
                isError: false,
                userData: {},
                isLoggedIn: false
            }
        }
    },



    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action.payload.user;
        });
        builder.addCase(loginApi.rejected, (state, action) => {
            state.isError = true;
        });
    }
});




export const {} = authSlice.actions;
export default authSlice.reducer;