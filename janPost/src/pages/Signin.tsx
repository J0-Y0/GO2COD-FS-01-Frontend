import { Box, Button, TextField } from "@mui/material";
// import CenteredCard from "../utils/CenteredCard";
// import { LoadingButton } from "../utils/Loading";
import { Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useLogin } from "../context/auth/hooks/useLogin";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../context/auth/authProvider";
import CenteredCard from "../utils/CenteredCard";
interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  // const navigate = useNavigate();
  // const login = useLogin();
  // const { token } = useAuth;
  // token && navigate("/");

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <CenteredCard
      headerIcon={<Lock />}
      headerText="Sign In"
      headerSubText="Welcome, please sign in to continue"
    >
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField
          required
          label="Email"
          type="email"
          {...register("email")}
          variant="standard"
          fullWidth
          sx={{ my: 2 }}
        />
        <TextField
          required
          label="Password"
          type="password"
          {...register("password")}
          variant="standard"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="outlined" type="submit" fullWidth sx={{ my: 2 }}>
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
        <Button variant="text" component={Link} to="/signup">
          Create account?
        </Button>
        <Button variant="text" component={Link} to="/PasswordReset">
          Forgot Password?
        </Button>
      </Box>
    </CenteredCard>
  );
};

export default SignIn;
