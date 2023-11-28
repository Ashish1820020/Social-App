import AuthSlice from "./slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


const store =  configureStore({
    reducer: {
        auth: AuthSlice
    }
});


export default store;