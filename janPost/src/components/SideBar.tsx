import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Stack,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreateIcon from "@mui/icons-material/Create";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DrawIcon from "@mui/icons-material/Draw";
import { Link } from "react-router-dom";
interface Props {
  setParams: ({ status, saved }: { status?: string; saved?: boolean }) => void;
}
const SideBar = ({ setParams }: Props) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Stack direction="row">
      <List
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "background.paper",
          color: "text.primary",
          overflowY: "auto",
          height: "100vh",
          borderRight: `1px solid #354656`,
          "& .MuiListItemButton-root": {
            "&:hover": {
              bgcolor: "#4a9d9c", // primary-200 for hover
              color: "#FFFFFF", // Ensure contrast on hover
            },
          },
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
        component="nav"
      >
        <ListItemButton component={Link} to="/feeds">
          <ListItemIcon>
            <AutoStoriesIcon sx={{ color: "#afffff" }} /> {/* primary-300 */}
          </ListItemIcon>
          <ListItemText primary="Your Feed" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/saved"
          onClick={() => {
            setParams({ saved: true });
          }}
        >
          <ListItemIcon>
            <BookmarkIcon sx={{ color: "#afffff" }} /> {/* primary-300 */}
          </ListItemIcon>
          <ListItemText primary="Saved Posts" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/manage-post"
          onClick={() => {
            setOpen(!open), setParams({ status: "all" });
          }}
        >
          <ListItemIcon>
            <CreateIcon sx={{ color: "#afffff" }} /> {/* primary-300 */}
          </ListItemIcon>
          <ListItemText primary="Manage Posts" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="/manage-post"
              sx={{ pl: 4 }}
              onClick={() => {
                setParams({ status: "published" });
              }}
            >
              <ListItemIcon>
                <PublishedWithChangesIcon sx={{ color: "#afffff" }} />
              </ListItemIcon>
              <ListItemText primary="Published Posts" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/manage-post"
              sx={{ pl: 4 }}
              onClick={() => {
                setParams({ status: "draft" });
              }}
            >
              <ListItemIcon>
                <SaveAsIcon sx={{ color: "#afffff" }} />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/create-post">
              <ListItemIcon>
                <DrawIcon sx={{ color: "#afffff" }} />
              </ListItemIcon>
              <ListItemText primary="Write" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider orientation="vertical" flexItem />
    </Stack>
  );
};

export default SideBar;
