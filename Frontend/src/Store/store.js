import AuthSlice from "./slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { lo } from "./api/authApi";


const store =  configureStore({
    reducer: {
        auth: AuthSlice,
        // [authApi.reducerPath]: authApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});


export default store;