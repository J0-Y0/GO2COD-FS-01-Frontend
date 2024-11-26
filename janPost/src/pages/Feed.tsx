import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import PostLargeCard from "../components/PostLargeCard";
import PostCard from "../components/PostCard";

const Feed = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Grid2 container spacing={1} sx={{ height: "90vh" }}>
      {/* Sidebar */}
      <Grid2 size={2} sx={{ overflowY: "auto", height: "90%" }}>
        <SideBar />
      </Grid2>

      {/* Main Feed */}
      <Grid2 size={6} sx={{ overflowY: "auto", height: "100%", padding: 2 }}>
        <Stack spacing={2}>
          {posts.map((post) => (
            <PostLargeCard key={post} />
          ))}
        </Stack>
      </Grid2>

      {/* Last Visited */}
      <Grid2 size={4} sx={{ overflowY: "auto", height: "100%", paddingX: 2 }}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            background: "rgb(239 239 239)",
            zIndex: 2,
            paddingTop: 2,
          }}
        >
          <Typography variant="h6">Last Visited</Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Stack spacing={2}>
          {posts.slice(0, 5).map((post) => (
            <PostCard index={post} />
          ))}
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default Feed;
