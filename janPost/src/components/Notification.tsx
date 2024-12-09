import Alert from "@mui/material/Alert";
import React, { useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { AuthContext } from "../hooks/auth/useAuth";

export default function Notification() {
  const [open, setOpen] = useState(false);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const { message } = useContext(AuthContext);

  useEffect(() => {
    if (message) setOpen(true); // Open Snackbar if message is present
  }, [message]);

  useEffect(() => {
    const handleViewportChange = () => {
      const viewportHeight = window.visualViewport?.height;
      const screenHeight = window.innerHeight;

      // Detect if keyboard is active by comparing viewport and screen height

      viewportHeight && setIsKeyboardActive(viewportHeight < screenHeight);
    };

    window.visualViewport?.addEventListener("resize", handleViewportChange);
    return () =>
      window.visualViewport?.removeEventListener(
        "resize",
        handleViewportChange
      );
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return; // Prevent closing on clickaway
    setOpen(false);
  };

  return (
    message?.content && (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: isKeyboardActive ? "top" : "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={message?.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message?.content || "Something went wrong."} {/* Default message */}
        </Alert>
      </Snackbar>
    )
  );
}
