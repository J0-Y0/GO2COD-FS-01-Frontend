import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { User } from "../service/auth_service";
import { deepOrange, red } from "@mui/material/colors";
import { Comment } from "../service/post_service";
interface Props {
  comment: Comment;
}

const CommentView = ({ comment }: Props) => {
  return (
    <Stack py={2} direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        <b>{comment.author?.first_name?.charAt(0)}</b>
      </Avatar>
      <Stack direction="column">
        <Stack
          alignItems="baseline"
          justifyContent="space-between"
          direction="row"
          spacing={1}
        >
          <Typography
            color={deepOrange[200]}
            sx={{ fontSize: "medium", fontStyle: "bold" }}
          >
            {comment.author?.first_name + " " + comment.author?.last_name}{" "}
          </Typography>
          <Typography sx={{ fontSize: "smaller", fontStyle: "italic" }}>
            {comment?.published_date}
          </Typography>
        </Stack>

        <Typography sx={{ fontSize: "smaller" }}>{comment?.content}</Typography>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button>Like</Button>
          <Button>Replay</Button>
        </ButtonGroup>
        <Divider></Divider>
      </Stack>
    </Stack>
  );
};

export default CommentView;
