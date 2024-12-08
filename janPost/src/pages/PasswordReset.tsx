import React, { useState } from "react";
import { Button, LinearProgress, Stack, TextField } from "@mui/material";
import { LockReset } from "@mui/icons-material";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <CenteredCard
      headerIcon={<LockReset />}
      headerText="Password Reset"
      headerSubText="Lost your password? No worries! Just provide the email linked to your account."
    >
      {<LinearProgress />}
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
          variant="contained"
          startIcon={<LockReset />}
          type="submit"
          sx={{ marginY: 2 }}
          fullWidth
        >
          Reset
        </Button>
        <Button component={Link} to="/account/signin">
          Cancel
        </Button>
        {/* </Stack> */}
      </form>
    </CenteredCard>
  );
};

export default PasswordReset;
