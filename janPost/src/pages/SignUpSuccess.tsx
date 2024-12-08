import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import { MarkEmailRead, Replay } from "@mui/icons-material";
import mailSentGif from "../assets/mail_sent.gif"; // Ensure this path is correct
import CenteredCard from "../utils/CenteredCard";

const SignUpSuccess = () => {
  const mailGif = (
    <Box
      component="img"
      src={mailSentGif}
      alt="Mail Sent"
      sx={{
        width: "90%",
        height: "auto",
        borderRadius: "50%",
      }}
    />
  );
  return (
    <CenteredCard headerText="Account Activation" headerIcon={mailGif}>
      <Stack
        direction="column"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        {/* <Box
          component="img"
          src={mailSentGif}
          alt="Mail Sent"
          sx={{
            width: { xs: "30%", md: "30%" },
            height: "auto",
            borderRadius: "50%",
            border: "3px solid #B1D952",
            mb: 2,
          }} */}
        {/* /> */}
        <hr></hr>
        <Typography
          textAlign="center"
          // variant="h5"
          sx={{
            mb: 4,
            // color: "#062B76",
            // fontWeight: "bold",
            // fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.1rem" },
          }}
        >
          Your account has been successfully created. Please check your email
          and activate your account using the activation link we have sent.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<MarkEmailRead />}
          component={Link}
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 2 }}
        >
          Open Gmail
        </Button>
        <Button content="text">Resend activation link ?</Button>
      </Stack>
    </CenteredCard>
  );
};

export default SignUpSuccess;
