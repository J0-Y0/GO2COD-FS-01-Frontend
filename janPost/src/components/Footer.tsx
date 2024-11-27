import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <footer>
      <Divider orientation="horizontal" flexItem />

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          paddingX: 2,
          paddingTop: 2,
          paddingBottom: 4,
          // bgcolor: "#e2e2e2",
        }}
      >
        <Typography variant="h5">
          <b>ጃንpost</b>
        </Typography>
        © 2024 ጃንpost, Inc
        <Box>
          <FacebookIcon />
          <LinkedInIcon />
          <XIcon />
        </Box>
      </Stack>
    </footer>
  );
};

export default Footer;
