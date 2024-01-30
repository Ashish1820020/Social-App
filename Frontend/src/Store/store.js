import AuthSlice from "./slices/AuthSlice";
import PostSlice from "./slices/PostSlice";
import UtilsSlice from "./slices/utils";
import { configureStore } from "@reduxjs/toolkit";


const store =  configureStore({
    reducer: {
        auth: AuthSlice,
        posts: PostSlice,
        utilsSlice: UtilsSlice
        // [authApi.reducerPath]: authApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});


export default store;