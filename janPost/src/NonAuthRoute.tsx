import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/PasswordReset";
import Landing from "./pages/Landing";

const NonAuthRoute = () => {
  return (
    <BrowserRouter>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route
        path="/password-reset-confirm"
        element={<PasswordResetConfirm />}
      />
      <Route path="/" element={<Landing />} />
    </BrowserRouter>
  );
};

export default NonAuthRoute;
