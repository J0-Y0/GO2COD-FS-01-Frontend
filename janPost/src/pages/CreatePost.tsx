import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Import Grid2
import { useForm } from "react-hook-form";
import SideBar from "../components/SideBar";

interface PostData {
  title: string;
  image: File | null;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  category: "aaa" | "bbbb" | "cccc" | "dddd";
  author: number;
}

const CreatePost: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>();

  const onSubmit = (data: PostData) => {
    console.log(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid2 container spacing={1} sx={{ height: "90vh" }}>
      {/* Sidebar */}
      <Grid2
        size={{ sm: 4, md: 3, lg: 2 }}
        sx={{
          display: { xs: "none", sm: "block" },
          overflowY: "hidden",
          height: "100%",
        }}
      >
        <SideBar />
      </Grid2>

      {/* Form Content */}
      <Grid2
        size={{ xs: 12, sm: 8, md: 9, lg: 10 }}
        sx={{
          overflowY: "auto",
          height: "100%",
          bgcolor: "background.paper",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          paddingX: 3,
          //   padding: "0  4px 0 0",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: "100%",
            mx: "auto",
            mt: 3,
            px: 3,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Create Post
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            {/* Title and Excerpt */}
            <Stack direction="column" spacing={3} flexGrow={1}>
              <TextField
                {...register("title", { required: "Title is required" })}
                label="Title"
                error={!!errors.title}
                helperText={errors.title?.message}
                fullWidth
              />
              <TextField
                {...register("excerpt", { required: "Excerpt is required" })}
                label="Excerpt"
                multiline
                rows={2}
                error={!!errors.excerpt}
                helperText={errors.excerpt?.message}
                fullWidth
              />
            </Stack>

            {/* Image Upload */}
            <Stack
              direction={{ xs: "row", sm: "column" }}
              spacing={3}
              alignItems="center"
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: "grey.200",
                  borderRadius: 1,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No Image
                  </Typography>
                )}
              </Box>
              <Button variant="outlined" component="label">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
            </Stack>
          </Stack>
          {/* Content */}
          <TextField
            {...register("content", { required: "Content is required" })}
            label="Content"
            multiline
            rows={10}
            error={!!errors.content}
            helperText={errors.content?.message}
            fullWidth
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            {/* Category Dropdown */}
            <FormControl fullWidth error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Select
                {...register("category", { required: "Category is required" })}
                defaultValue=""
              >
                <MenuItem value="aaa">AAA</MenuItem>
                <MenuItem value="bbbb">BBBB</MenuItem>
                <MenuItem value="cccc">CCCC</MenuItem>
                <MenuItem value="dddd">DDDD</MenuItem>
              </Select>
            </FormControl>
            {/* Status Dropdown */}
            <FormControl fullWidth error={!!errors.status}>
              <InputLabel>Status</InputLabel>
              <Select
                {...register("status", { required: "Status is required" })}
                defaultValue=""
              >
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="published">Published</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* Submit Button */}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Save
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default CreatePost;
