import {
  Button,
  CircularProgress,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/auth/useAuth";
import { useContext } from "react";

// Schema for user sign-up validation
export const UserSchema = z
  .object({
    first_name: z
      .string()
      .min(3, { message: "First name must be at least 3 characters." })
      .max(25, { message: "First name must be 25 characters or fewer." }),
    last_name: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters." })
      .max(25, { message: "Last name must be 25 characters or fewer." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(25, { message: "Password must be 25 characters or fewer." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character.",
      }),
    re_password: z.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match.",
    path: ["re_password"],
  });

type FormData = z.infer<typeof UserSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const { loading, sign_up } = useContext(AuthContext);

  const onSubmit = (data: FormData) => {
    sign_up(data);
  };

  return (
    <CenteredCard
      headerText="Sign Up"
      headerSubText="Please fill in all required fields."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {loading && <LinearProgress />}

        <TextField
          autoComplete="given-name"
          required
          {...register("first_name")}
          label="First name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.first_name}
          helperText={errors.first_name?.message || ""}
        />
        <TextField
          autoComplete="family-name"
          {...register("last_name")}
          label="Last Name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.last_name}
          helperText={errors.last_name?.message || ""}
        />
        <TextField
          autoComplete="email"
          required
          {...register("email")}
          label="Email"
          type="email"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          autoComplete="new-password"
          required
          {...register("password")}
          label="Password"
          type="password"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message || ""}
        />
        <TextField
          autoComplete="new-password"
          required
          {...register("re_password")}
          label="Confirm Password"
          type="password"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.re_password}
          helperText={errors.re_password?.message || ""}
        />

        <Button
          disabled={loading}
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
          Already have an account?
        </Button>
      </form>
    </CenteredCard>
  );
};

export default SignUp;
