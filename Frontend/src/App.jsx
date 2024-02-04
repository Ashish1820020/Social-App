// import { HomePage, ProFilePage, LoginPage } from "./Pages/index";
import { useMemo } from "react";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./themes";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Components/Shared/Navbar";
import { useSelector } from "react-redux";
import CreatePostCard from "./Components/utility/CreatePostCard";
import PostsDetails from "./Components/Posts/PostsDetails";
import PostDetailsContainer from "./Components/Posts/PostDetailsContainer";



const App = () => {

  const mode = "light";

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  const { enableCreatePost } = useSelector(state => state.utilsSlice);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="root-inside h-full w-full relative font-poppins">
          <Navbar />

          <Routes>

            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/profile/:userId" element={<ProfilePage/>} />

          </Routes>

          
          {
            enableCreatePost?
                <CreatePostCard />
                :
                <></>
          }

          <PostDetailsContainer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
