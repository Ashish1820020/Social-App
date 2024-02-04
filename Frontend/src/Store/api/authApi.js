import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const loginApi = createAsyncThunk("login", async (loginData) => {
  try {
    console.log(loginData);
    const response = await axios.post("/api/v1/auth/signin", loginData);
    localStorage.setItem("userData", JSON.stringify(response.data.user))
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const signupApi = createAsyncThunk("signup", async (signupForm) => {
  try {
    const response = await axios.post("/api/v1/auth/signup", signupForm);
    localStorage.setItem("userData", JSON.stringify(response.data.user))
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});



export const updateUserProfileApi = createAsyncThunk("updateUserProfile", async (updateForm) => {
  try {
    const response = await axios.put("/api/v1/auth/updateprofile", updateForm);
    localStorage.setItem("userData", JSON.stringify(response.data.user))
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});