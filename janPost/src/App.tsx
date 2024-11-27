import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { Login, X } from "@mui/icons-material";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feeds" element={<Feed />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
