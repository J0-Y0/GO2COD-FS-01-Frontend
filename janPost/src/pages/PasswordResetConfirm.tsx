import { useParams } from "react-router-dom";
import CenteredCard from "../utils/CenteredCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

const PasswordSchema = z
  .object({
    new_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
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
    re_new_password: z.string(),
  })
  .refine((data) => data.new_password === data.re_new_password, {
    message: "Passwords do not match.",
    path: ["re_new_password"], // Error will be associated with the re_password field
  });

type FormData = z.infer<typeof PasswordSchema>;

const PasswordResetConfirm = () => {
  const { uid, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(PasswordSchema) });

  return (
    <CenteredCard
      headerText="Reset Your Password"
      headerSubText="Create a new password to secure your account."
    >
      <Typography variant="body2" color="text.secondary" mb={3}>
        Your password must be 8–25 characters long, and include at least one
        uppercase letter, one lowercase letter, one number, and one special
        character.
      </Typography>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          console.log("uid: " + uid);
          console.log("token: " + token);
        })}
      >
        <TextField
          required
          label="New Password"
          type="password"
          {...register("new_password")}
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
          error={!!errors.new_password}
          helperText={errors.new_password?.message || ""}
        />
        <TextField
          required
          label="Confirm New Password"
          type="password"
          {...register("re_new_password")}
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
          error={!!errors.re_new_password}
          helperText={errors.re_new_password?.message || ""}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ my: 2, py: 1 }}
          type="submit"
        >
          Save New Password
        </Button>
      </form>
    </CenteredCard>
  );
};

export default PasswordResetConfirm;
