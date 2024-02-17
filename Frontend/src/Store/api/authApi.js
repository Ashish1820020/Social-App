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



// export const authApi = async () => {
//   const [isLoading, setIsLoading] = useState(false);
//   // VERIFY AUTHENTICATION TOKEN OF CURRENT USER
//   async function verifyTokenApi() {
//     setIsLoading(true);
//     try {
//       const response = await axios.get("/api/v1/auth/verify");
//       !response?.data?.success && localStorage.removeItem("userData");
//       setIsLoading(false);
//       return response?.data?.success;
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       throw error;
//     }
//   };
//   return { verifyTokenApi, isLoading}
// }



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