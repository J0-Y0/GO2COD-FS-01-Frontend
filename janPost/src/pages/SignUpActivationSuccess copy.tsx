import { useParams } from "react-router-dom";
// import { useAuth } from "../context/auth/authProvider";
import CenteredCard from "../utils/CenteredCard";
import { LinearProgress, Typography } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import useActivate, { Query } from "../hooks/auth/useActivate";

const SignUpActivationSuccess = () => {
  const { loading, error, activate } = useActivate();
  const { uid, token } = useParams();

  activate({ uid: uid, token: token });
  console.log(error);
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
      <Typography variant="h5">{error}</Typography>
    </CenteredCard>
  );
};

export default SignUpActivationSuccess;
