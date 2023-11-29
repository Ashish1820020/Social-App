import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const loginApi = createAsyncThunk("login", async (loginData) => {
  try {
    const response = await axios.post("/api/v1/auth/signin", loginData);
    return response.data;
  } catch (error) {
    throw error;
    // console.log(error);
  }
});

export const signupApi = createAsyncThunk("login", async (signupForm) => {
  try {
    const response = await axios.post("/api/v1/auth/signup", signupForm);
    return response.data;
  } catch (error) {
    throw error;
    console.log(error);
  }
})