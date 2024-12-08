import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CenteredCard from "../utils/CenteredCard";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/auth/useSignUp";

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

  const { loading, error: backendError, registerUser } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    registerUser(data);
    if (!backendError) {
      navigate("/account/signup-activation");
    }
  };

  return (
    <CenteredCard
      headerText="Sign Up"
      headerSubText="Please fill in all required fields."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          autoComplete="given-name"
          required
          {...register("first_name")}
          label="First name"
          variant="standard"
          sx={{ my: 1 }}
          fullWidth
          error={!!errors.first_name || !!backendError?.first_name}
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
          error={!!errors.email || !!backendError?.email}
          helperText={errors.email?.message || backendError?.email || ""}
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
        <Button fullWidth sx={{ my: 2 }} variant="contained" type="submit">
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
