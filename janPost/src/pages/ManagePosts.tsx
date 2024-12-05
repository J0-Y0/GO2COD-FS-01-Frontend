import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import PostLargeCard from "../components/PostLargeCard";
import PostCard from "../components/PostCard";
import BottomBar from "../components/BottomBar";
import usePost from "../hooks/usePost";
interface Props {
  status?: string;
  // setStatus: (status: string) => void;
}

const ManagePosts = ({ status }: Props) => {
  const { data: posts } = usePost({ status: status });
  return (
    <>
      <Grid2
        size={{ xs: 12, sm: 8, md: 9, lg: 6 }}
        sx={{
          overflowY: "auto",
          height: "100%",
          //   padding: 3,
          bgcolor: "background.paper",
          //   borderRadius: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box my={3} sx={{ textAlign: "center" }}>
          <Typography variant="h5"> Manage Your Blog </Typography>
          <Typography variant="body1" color="body2">
            {status === "published"
              ? "Explore all your published posts here."
              : "These are your drafts. Publish them to engage with the community and gather feedback!"}
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

        <Stack spacing={3}>
          {posts?.map((post) => <PostLargeCard post={post} key={post.id} />)}

          {/* Loading Section */}
          {/* <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
            >
              <CircularProgress
                size={40}
                thickness={5}
                sx={{
                  color: "primary.light",
                  animation: "spin 1s linear infinite",
                }}
              />
              <Typography
                textAlign="center"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "text.secondary",
                  letterSpacing: 1.2,
                }}
              >
                Loading . . .
              </Typography>
              <Typography
                textAlign="center"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  letterSpacing: 1.1,
                }}
              >
                Fetching the latest blogs for your preferences
              </Typography>
            </Box> */}
        </Stack>
      </Grid2>

      {/* Last Visited */}
      <Grid2
        size={4}
        sx={{
          display: { xs: "none", lg: "block" },
          overflowY: "auto",
          height: "100%",
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            bgcolor: "background.default",
            zIndex: 2,
            paddingY: 2,
            borderRadius: 2,
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "primary.main",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 1.2,
            }}
          >
            Last Visited
          </Typography>
          <Divider sx={{ my: 2, borderColor: "primary.light" }} />
        </Box>

        <Stack spacing={2}>
          {posts?.slice(0, 5).map((post) => (
            <Box
              key={post.id}
              sx={{
                p: 2,

                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Grid2>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <BottomBar></BottomBar>
      </Box>
    </>
  );
};

export default ManagePosts;
