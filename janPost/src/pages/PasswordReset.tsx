import React, { useContext, useState } from "react";
import {
  Button,
  CircularProgress,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LockReset } from "@mui/icons-material";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/auth/useAuth";

const PasswordReset = () => {
  const [email, setEmail] = useState<string>("");
  const { reset, loading, message } = useContext(AuthContext);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    reset(email);
  };

  return (
    <>
      <CenteredCard
        headerIcon={<LockReset />}
        headerText="Password Reset"
        headerSubText="Lost your password? No worries! Just provide the email linked to your account."
      >
        {!!loading && <LinearProgress />}{" "}
        <Typography py={2} color={message?.severity} sx={{ width: "100%" }}>
          {message?.content || "Something went wrong."} {/* Default message */}
        </Typography>{" "}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Email"
            variant="standard"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />

          <Button
            disabled={loading}
            startIcon={<LockReset />}
            fullWidth
            sx={{ my: 2 }}
            variant="contained"
            type="submit"
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            Sign up
          </Button>

          <Button component={Link} to="/account/signin">
            Cancel
          </Button>
          {/* </Stack> */}
        </form>
      </CenteredCard>
    </>
  );
};

export default PasswordReset;
