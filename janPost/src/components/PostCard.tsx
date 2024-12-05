import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Skeleton, Typography } from "@mui/material";
import { PostData } from "../service/post_service";

interface Props {
  post: PostData;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card
      sx={{ maxWidth: { xs: 450, sm: 300, md: 320, lg: 400 }, borderRadius: 2 }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={`https://picsum.photos/id/${post.id}/500/300`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {post.title.substring(0, 80)}...
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.excerpt.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export const PostCardSkeleton = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 450, sm: 300, md: 320, lg: 400 },
        borderRadius: 2,
        minWidth: { xs: 450, sm: 300, md: 320, lg: 400 },
        marginBottom: 6,
      }}
    >
      <CardMedia>
        <Skeleton variant="rectangular" height={140} />
      </CardMedia>

      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />

        <Skeleton variant="text" width={150} />

        <Skeleton variant="text" width={100} />
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" height={25} width={80} />
      </CardActions>
    </Card>
  );
};
export default PostCard;
