import { Button, Container, TextField } from "@mui/material";

interface FormData {
  email: string;
  password: string;
}

const Signin = () => {
  return (
    <Container maxWidth="sm" sx={{ my: 5, border: "gray 1px solid" }}>
      <form>
        <TextField sx={{ my: 1 }} fullWidth label="Email" variant="standard" />
        <TextField
          sx={{ my: 1 }}
          fullWidth
          label="Password"
          variant="standard"
        />

        <Button sx={{ my: 2, borderRadius: 0 }} variant="contained">
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default Signin;
