import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreateIcon from "@mui/icons-material/Create";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { Divider, Stack } from "@mui/material";

const SideBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Stack
        direction="row"
        // sx={{
        //   height: "50vh",
        //   width: "100%",
        //   maxWidth: 250,
        //   overflowY: "auto",
        // }}
      >
        <List
          component="nav"
          // aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Blog Navigation
          //   </ListSubheader>
          // }
        >
          <ListItemButton>
            <ListItemIcon>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="Your Feed" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarked Posts" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Posts" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PublishedWithChangesIcon />
                </ListItemIcon>
                <ListItemText primary="Published Posts" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SaveAsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider orientation="vertical" flexItem />
      </Stack>
    </>
  );
};

export default SideBar;
