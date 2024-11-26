import { Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Grid2,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import PostCard from "../components/PostCard";

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
            sx={{ paddingX: { xs: 1, md: 3 }, paddingY: 3 }}
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
        marginY={8}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
        justifyContent="space-evenly"
      >
        {top5.map((post: number) => (
          <PostCard index={post} />
        ))}
      </Stack>
      <Box
        sx={{
          background: "linear-gradient(135deg, #bcaaaa, #000000)",
          color: "white",
          p: 4,
          marginY: 10,
          borderRadius: 3,
          textAlign: "center",
          boxShadow: 3,
          // maxWidth: 500,
          mx: "auto",
          mt: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
        >
          Share Your Thoughts
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          Write and share insightful thoughts on ጃንpost, your go-to platform for
          meaningful conversations.
        </Typography>

        <Button
          variant="contained"
          sx={{
            px: 3,
            py: 1.5,
            background: "linear-gradient(135deg, #bcaaaa, #000000)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 8,
          }}
        >
          Want to Join?
        </Button>
      </Box>
    </>
  );
};

export default Landing;
