import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const loginApi = createAsyncThunk("login", async (loginData) => {
  try {
    console.log(loginData);
    const response = await axios.post("/api/v1/auth/signin", loginData);
    localStorage.setItem("userData", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});


export const logoutApi = createAsyncThunk("logout", async () => {
  try {
    const response = await axios.get("/api/v1/auth/logout");
    localStorage.removeItem("userData");
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


export const getUserProfileData = async (userId) => {
  try {
    const response = await axios.get(`/api/v1/auth/user/${userId}`);
    // console.log(response);
    return response?.data?.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};


export const searchUserWithNameApi = async (search) => {
  console.log(`/auth/users?search=${search}`);
  try {
    const response = await axios.get(`/api/v1/auth/users?search=${search}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


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