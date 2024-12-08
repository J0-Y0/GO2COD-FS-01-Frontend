import NavBar from "./components/Navbar";
import { Grid2 } from "@mui/material";
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
import { PostQuery } from "./hooks/usePost";
import Landing from "./pages/Landing";
import SignIn from "./pages/Signin";

function App() {
  // for filtering posts
  const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />

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
            <SideBar setQuerySet={setPostQuery} querySet={postQuery} />
          </Grid2>

          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/feeds" element={<Feed />} />
            <Route path="/saved" element={<Feed saved={postQuery.saved} />} />
            <Route
              path="/manage-post"
              element={<ManagePosts status={postQuery.status} />}
            />
            <Route path="/create-post" element={<CreatePost />} />

            <Route path="/account/signup" element={<SignUp />} />
            <Route path="/" element={<Landing />} />
            <Route path="/account/signin" element={<SignIn />} />
            <Route path="/account/password-reset" element={<PasswordReset />} />
            <Route
              path="/account/password-reset-confirm"
              element={<PasswordResetConfirm />}
            />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Grid2>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
