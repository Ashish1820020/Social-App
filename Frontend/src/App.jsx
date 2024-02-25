import { useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./themes";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Components/Shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CreatePostCard from "./Components/utility/CreatePostCard";
import PostsDetails from "./Components/Posts/PostsDetails";
import PostDetailsContainer from "./Components/Posts/PostDetailsContainer";
import RouterComponent from "./Router/RouterComponent";
import { isValidToken } from "./Utils/Auth";
import { routesArray } from "./Utils/RoutesArray";



const App = () => {
  // const mode = "light";
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const { enableCreatePost } = useSelector(state => state.utilsSlice);

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />

        <div className="root-inside h-full w-full relative font-poppins">
          {
            routesArray.some((elem) => (elem.path_url === location.pathname) && elem.authenticationRequires) 
            &&
            <Navbar />
          }
          <RouterComponent />
          {
            enableCreatePost?
                <CreatePostCard />
                :
                <></>
          }
        </div>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  )
}

export default App;
