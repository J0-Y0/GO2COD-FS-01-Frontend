import { Padding } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Grid2,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Landing = () => {
  const top5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Paper elevation={1} square={false} sx={{ marginY: 4 }}>
        <Grid2 container spacing={1} overflow="hidden">
          <Grid2
            size={{ sm: 12, md: 6 }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "100vw", height: { xs: 200, md: 300 } }}
            />
          </Grid2>
          <Grid2
            size={{ sm: 12, md: 6 }}
            sx={{ padding: 3 }}
            alignContent="center"
          >
            <Typography variant="h5">
              This is the most featured Titleost featured Title ost featured
              Title
            </Typography>
            <Typography variant="body1" paddingY={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facilis placeat excepturi aut, sint esse voluptas consequatur
              possimus hic voluptatum quae commodi assumenda sunt. Dolores quo
              aut voluptates delectus fuga! Lorem ipsum dolor sit amet
            </Typography>
            <Button variant="contained">Read Now</Button>
          </Grid2>{" "}
          <Grid2
            size={{ sm: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "100vw", height: { xs: 200, md: 300 } }}
            />
          </Grid2>
        </Grid2>
      </Paper>
      <ButtonGroup fullWidth variant="outlined" aria-label="Basic button group">
        <Button color="primary">All Articles</Button>
        <Button>WebDevelopment</Button>
        <Button>Cyber Security</Button>
        <Button>Database</Button>
        <Button>Database</Button>
      </ButtonGroup>

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        marginY={4}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
        justifyContent="space-between"
      >
        {top5.map((post) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />

            <CardContent key={post}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Landing;
