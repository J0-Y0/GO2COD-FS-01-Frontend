import NavBar from "./components/Navbar";
import { Grid2 } from "@mui/material";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import CreatePost from "./pages/CreatePost";
import ManagePosts from "./pages/ManagePosts";
import SideBar from "./components/SideBar";
// import { PostQuery } from "./hooks/usePost";
import Landing from "./pages/Landing";
import SignIn from "./pages/Signin";
import SignUpActivation from "./pages/SignUpActivation";
import SignUpActivationSuccess from "./pages/SignUpActivationSuccess";
import Notification from "./components/Notification";
import AuthProvider from "./hooks/auth/useAuth";
import PrivateWrapper from "./components/PrivateWrapper";

function App() {
  const location = useLocation();

  // Define the routes where the SideBar should appear
  const sidebarRoutes = [
    "/feeds",
    "/feeds/",
    "/my-post/",
    "/my-post",
    "/create-post",
  ];
  return (
    <>
      <NavBar />

      <Grid2 container spacing={1} sx={{ height: "90vh" }}>
        {sidebarRoutes.includes(location.pathname) && (
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
        )}

        <Routes>
          <Route path="/" element={<Landing></Landing>} />

          {/* here make them private */}
          <Route element={<PrivateWrapper />}>
            <Route path="/feeds" element={<Feed />} />
            <Route path="/my-post" element={<ManagePosts />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Route>
          <Route path="/account/signup" element={<SignUp />} />
          <Route
            path="/account/signup-activation"
            element={<SignUpActivation />}
          />
          <Route
            path="/account/activate/:uid/:token"
            element={<SignUpActivationSuccess />}
          />
          <Route path="/account/signin" element={<SignIn />} />
          <Route path="/account/password-reset" element={<PasswordReset />} />
          <Route
            path="/account/password-reset-confirm"
            element={<PasswordResetConfirm />}
          />
        </Routes>
      </Grid2>
      <Notification />
    </>
  );
}

export default App;
