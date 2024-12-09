import NavBar from "./components/Navbar";
import { Grid2 } from "@mui/material";
import Feed from "./pages/Feed";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
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
import SignUpActivation from "./pages/SignUpActivation";
import SignUpActivationSuccess from "./pages/SignUpActivationSuccess";

function App() {
  // for filtering posts
  const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    // <AuthContextProvider>
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
          <SideBar />
        </Grid2>

        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/feeds" element={<Feed />} />
          <Route path="/feeds" element={<Feed />} />
          <Route path="/my-post" element={<ManagePosts />} />
          <Route path="/create-post" element={<CreatePost />} />

          <Route path="/account/signup" element={<SignUp />} />
          <Route
            path="/account/signup-activation"
            element={<SignUpActivation />}
          />
          <Route
            path="/account/activate/:uid/:token"
            element={<SignUpActivationSuccess />}
          />

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
    // </AuthContextProvider>
  );
}

export default App;
