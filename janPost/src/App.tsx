import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { X } from "@mui/icons-material";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feeds" element={<Feed />} />
        <Route path="/login" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
