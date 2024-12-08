import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAuth } from "../context/auth/authProvider";
import CenteredCard from "../utils/CenteredCard";
import { LinearProgress, Typography } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
// import { useActivate } from "../context/auth/hooks/useActivate";

// interface Parameters{
//     uid: string;
//     token: string;

// }
const SignUpActivationSuccess = () => {
  const { message, loading } = useAuth();
  const { uid, token } = useParams();

  const activate = useActivate();
  useEffect(() => {
    async function doActivate() {
      activate(uid, token);
    }
    doActivate();
  }, [token]);

  return loading ? (
    <CenteredCard
      headerText="Account Activation"
      headerSubText="Hang tight! We're verifying your details and getting your account ready."
      headerIcon={<GppMaybeIcon />}
    >
      <LinearProgress />
    </CenteredCard>
  ) : (
    <CenteredCard
      headerText="Account Activation"
      headerIcon={<PublishedWithChangesIcon />}
    >
      <Typography></Typography>
      <Typography variant="h5">{message?.content}</Typography>
    </CenteredCard>
  );
};

export default SignUpActivationSuccess;
