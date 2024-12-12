import { useContext, useEffect } from "react";
import CenteredCard from "../utils/CenteredCard";
import { Button, LinearProgress, Typography } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { Link, useParams } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { AuthContext } from "../hooks/auth/useAuth";

const SignUpActivationSuccess = () => {
  const { loading, message, activate } = useContext(AuthContext);

  const { uid, token } = useParams();
  // Trigger account activation

  useEffect(() => activate({ uid, token }), []);
  return loading ? (
    <CenteredCard
      headerText="Account Activation"
      headerSubText="We are activating your account. Please wait."
      headerIcon={<GppMaybeIcon />}
    >
      <LinearProgress />
    </CenteredCard>
  ) : (
    <CenteredCard
      headerText="Account Activation"
      headerIcon={<PublishedWithChangesIcon />}
    >
      {message?.severity === "error" ? (
        <Typography variant="h6" color="error">
          Invalid link or token expired
        </Typography>
      ) : (
        <>
          <Typography variant="h5" color="success">
            Account Activation Completed! <br /> You can now log in.
          </Typography>
        </>
      )}{" "}
      <Button
        sx={{ px: 4, my: 2 }}
        startIcon={<Login />}
        variant="contained"
        component={Link}
        to="/account/signin"
      >
        Login
      </Button>
    </CenteredCard>
  );
};

export default SignUpActivationSuccess;
