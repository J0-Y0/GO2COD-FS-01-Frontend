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
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
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
