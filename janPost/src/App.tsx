import Landing from "./pages/Landing";
import NavBar from "./components/Navbar";
import { Box, Container, Grid2 } from "@mui/material";
import { Login, X } from "@mui/icons-material";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import AuthContextProvider from "./context/AuthContextProvider";
import CreatePost from "./pages/CreatePost";
import ManagePosts from "./pages/ManagePosts";
import { useState } from "react";
import SideBar from "./components/SideBar";
import { Params } from "./hooks/usePost";

function App() {
  // for filtering posts
  const [param, setParam] = useState<Params>({ status: "all" });
  console.log(param);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<Landing />} />
        </Routes> */}
        <Grid2 container spacing={1} sx={{ height: "90vh" }}>
          {/* Sidebar */}
          <Grid2
            size={{ sm: 4, md: 3, lg: 2 }}
            sx={{
              display: { xs: "none", sm: "block" },
              overflowY: "hidden",
              height: "90vh",
            }}
          >
            <SideBar setParams={setParam} />
          </Grid2>

          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/feeds" element={<Feed />} />
            <Route path="/saved" element={<Feed saved={param.saved} />} />

            <Route
              path="/manage-post"
              element={<ManagePosts status={param.status} />}
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/password-reset-confirm"
              element={<PasswordResetConfirm />}
            />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Grid2>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
