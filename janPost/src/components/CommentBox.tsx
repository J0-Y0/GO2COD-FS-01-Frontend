import { Stack, Avatar, TextField, Button, Box, Fab } from "@mui/material";
import { Send } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const CommentBox = () => {
  return (
    <Box
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
        // bgcolor: "background.paper",
        // maxWidth: 600,
        mx: "auto",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          sx={{
            bgcolor: red[500],
            width: 48,
            height: 48,
            fontWeight: "bold",
            fontSize: 20,
          }}
          aria-label="recipe"
        >
          Y
        </Avatar>

        <TextField
          fullWidth
          id="feedback-input"
          label="Write your feedback"
          placeholder="Typing..."
          multiline
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
            "& .MuiInputLabel-root": {
              color: "text.secondary",
            },
          }}
        />
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            px: 3,
            textTransform: "capitalize",
            fontWeight: "medium",
          }}
        >
          <Send />
        </Fab>
      </Stack>
    </Box>
  );
};

export default CommentBox;
