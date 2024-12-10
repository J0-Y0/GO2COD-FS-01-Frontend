import { Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid2,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import usePost from "../hooks/usePost";

const Landing = () => {
  const { posts } = usePost();
  return (
    <>
      <Container maxWidth="xl">
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
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  color: "var(--primary-300)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                Discover Engaging Stories
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginY: 2,
                  lineHeight: 1.8,
                  color: "var(--text-200)",
                }}
              >
                Dive into a curated selection of articles, insights, and
                opinions from experts across various fields. Your next favorite
                read is just a click away!
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/feeds"
                sx={{
                  color: "var(--text-100)",
                  paddingX: 3,
                  paddingY: 1.5,
                }}
              >
                Start Reading
              </Button>
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
        <ButtonGroup
          sx={{
            position: "sticky",
            top: 62,
            bgcolor: "#1d2e3d",
            paddingY: 1,
            zIndex: 2,
          }}
          fullWidth
          variant="outlined"
          aria-label="Basic button group"
          size="small"
        >
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
          {posts?.slice(0, 6).map((post) => <PostCard post={post} />)}
        </Stack>
        <Box
          sx={{
            background: "linear-gradient(304deg, #0d1f2d, #293947)",
            p: 8,
            marginY: 10,
            borderRadius: 3,
            textAlign: "center",
            boxShadow: 3,
            mx: "auto",
            mt: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="primary"
            sx={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.4)" }}
          >
            Join Our Community
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "var(--text-200)",
            }}
          >
            Connect with like-minded individuals and share your stories, ideas,
            and experiences. Be a part of ጃንpost, a platform where your voice
            matters.
          </Typography>
          <Button
            sx={{
              px: 4,
              py: 1.5,
              color: "var(--text-100)",
              fontWeight: "bold",
              borderRadius: 8,
            }}
            component={Link}
            variant="contained"
            to="account/signin "
          >
            Get Started
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
