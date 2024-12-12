import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import CommentView from "./CommentView";
import { PostData } from "../service/post_service";
import { Send } from "@mui/icons-material";
import CommentBox from "./CommentBox";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));
interface Props {
  post: PostData;
}

export default function PostLargeCard({ post }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <b>ጃ</b>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.author?.first_name + " " + post.author?.last_name}
        subheader={post.time_difference}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://picsum.photos/id/${post.id}/500/300`}
        // image={post?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            {post.title}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>{post.excerpt}</Typography>
          <Typography sx={{ marginBottom: 2 }}>{post.content}</Typography>
          <Divider />

          {post.comments &&
            post.comments.map((comment) => <CommentView comment={comment} />)}
        </CardContent>
        <CommentBox />
        <Divider />
      </Collapse>
    </Card>
  );
}
export function PostLargeCardSkeleton() {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton variant="text" width={150} />}
        subheader={<Skeleton variant="text" width={100} />}
      />
      <CardMedia>
        <Skeleton variant="rectangular" height={194} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={200} />
      </CardContent>
      <CardActions sx={{ direction: "row", justifyContent: "space-between" }}>
        <Stack direction={"row"}>
          <Skeleton sx={{ mx: 1 }} variant="circular" width={30} height={30} />
          <Skeleton sx={{ mx: 1 }} variant="circular" width={30} height={30} />
          <Skeleton sx={{ mx: 1 }} variant="circular" width={30} height={30} />
        </Stack>
        <Skeleton sx={{ p: 1 }} variant="circular" width={30} height={30} />
      </CardActions>
    </Card>
  );
}
