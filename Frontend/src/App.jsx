// import { HomePage, ProFilePage, LoginPage } from "./Pages/index";
import { useMemo } from "react";
import HomePage from "./Pages/HomePage/index";
import LoginPage from "./Pages/LoginPage/index";
import ProfilePage from "./Pages/ProfilePage/index";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./themes";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./Components/Shared/Navbar";



const App = () => {

  const mode = "light";

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* Resetting css */}
        <CssBaseline />
        {/* <Navbar /> */}

        <Routes>


          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
