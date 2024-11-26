import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import GradingIcon from "@mui/icons-material/Grading";
import { Button, Fab, Link, styled } from "@mui/material";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});
const BottomBar = () => {
  return (
    <AppBar position="fixed" color="default" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          size="small"
          variant="text"
        >
          <AutoStoriesIcon />
          Feeds
        </Button>
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          size="small"
          variant="text"
        >
          <BookmarkIcon />
          Saved
        </Button>
        <StyledFab color="primary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          size="small"
          variant="text"
        >
          <SaveAsIcon />
          Draft
        </Button>
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          size="small"
          variant="text"
        >
          <GradingIcon />
          Published
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
