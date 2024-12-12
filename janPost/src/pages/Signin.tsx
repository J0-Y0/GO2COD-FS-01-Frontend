import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  TextField,
} from "@mui/material";

import { Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CenteredCard from "../utils/CenteredCard";
import { useContext } from "react";
import { AuthContext } from "../hooks/auth/useAuth";
interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { login, loading } = useContext(AuthContext);
  return (
    <CenteredCard
      headerIcon={<Lock />}
      headerText="Sign In"
      headerSubText="Welcome, please sign in to continue"
    >
      <form onSubmit={handleSubmit((data) => login(data))}>
        {loading && <LinearProgress />}
        <TextField
          required
          label="Email"
          type="email"
          {...register("email")}
          variant="outlined"
          fullWidth
          sx={{ my: 2 }}
        />
        <TextField
          required
          label="Password"
          type="password"
          {...register("password")}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button
          disabled={loading}
          variant="contained"
          type="submit"
          fullWidth
          sx={{ my: 2 }}
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
          Sign in
        </Button>
      </form>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        width="100%"
      >
        <Button variant="text" component={Link} to="/account/signup">
          Create account?
        </Button>
        <Button variant="text" component={Link} to="/account/Password-reset">
          Forgot Password?
        </Button>
      </Box>
    </CenteredCard>
  );
};

export default SignIn;
