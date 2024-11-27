import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  headerText: string;
  headerSubText?: string;
  headerIcon?: ReactNode;
}

const CenteredCard = ({
  headerText,
  children,
  headerSubText,
  headerIcon,
}: Props) => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        p: 5,
        my: 5,
        display: "flex",
        border: "1px #0f3c32 solid",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "19px",
        // background: "#0d1f2d",
        // boxShadow: "-35px -35px 70px #0b1a26,35px 35px 70px #0f2434",
      }}
    >
      <Avatar
        sx={{ bgcolor: blue[100], display: "flex", justifyContent: "center" }}
      >
        {headerIcon}
      </Avatar>
      <Typography
        variant="h6"
        fontWeight={700}
        component="div"
        color={"primary"}
      >
        {headerText}
      </Typography>
      <Typography fontWeight={700} component="div" color={"primary"} mb={2}>
        {headerSubText}
      </Typography>
      {children}
    </Container>
  );
};

export default CenteredCard;
