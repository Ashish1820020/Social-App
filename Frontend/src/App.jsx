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



const App = () => {

  const mode = "light";

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* Resetting css */}
        <CssBaseline />

        <div className="root-inside h-full w-full relative">
          <Navbar />

          <Routes>

            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/profile/:userId" element={<ProfilePage/>} />

          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
