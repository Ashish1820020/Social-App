import { createSlice } from "@reduxjs/toolkit";


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
    }
});

export const {} = authSlice.actions;
export default authSlice.reducer;