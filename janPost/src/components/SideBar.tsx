import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Stack,
  useTheme,
  Button,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CreateIcon from "@mui/icons-material/Create";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DrawIcon from "@mui/icons-material/Draw";
import { Link, useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { AuthContext, useAuth } from "../hooks/auth/useAuth";

const SideBar = () => {
  const location = useLocation();
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const commonStyles = {
    fontWeight: "bold",
    color: theme.palette.primary.main, // Unified color for icons and text
  };

  return (
    <Stack direction="row">
      <List
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: theme.palette.background.default,
          overflowY: "auto",
          height: "97vh",
          borderRight: `1px solid ${theme.palette.divider}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& .MuiListItemButton-root": {
            margin: "4px 8px",
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                color: theme.palette.primary.contrastText,
              },
            },
            "&.Mui-selected": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                color: theme.palette.primary.contrastText,
              },
            },
          },
        }}
        component="nav"
      >
        <div>
          <ListItemButton
            selected={location.pathname === "/feeds"}
            component={Link}
            to="/feeds"
          >
            <ListItemIcon>
              <AutoStoriesIcon sx={commonStyles} />
            </ListItemIcon>
            <ListItemText primary="Your Feed" sx={commonStyles} />
          </ListItemButton>

          <ListItemButton
            component={Link}
            selected={location.search === "?saved=true"}
            to={"/feeds/?saved=" + true}
          >
            <ListItemIcon>
              <BookmarkIcon sx={commonStyles} />
            </ListItemIcon>
            <ListItemText primary="Saved Posts" sx={commonStyles} />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/my-post"
            selected={location.pathname === "/my-post"}
          >
            <ListItemIcon>
              <CreateIcon sx={commonStyles} />
            </ListItemIcon>
            <ListItemText primary="Manage Posts" sx={commonStyles} />
            <ExpandMore />
          </ListItemButton>

          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                component={Link}
                to="/my-post/?status=published"
                sx={{ pl: 4 }}
                selected={location.search === "?status=published"}
              >
                <ListItemIcon>
                  <PublishedWithChangesIcon sx={commonStyles} />
                </ListItemIcon>
                <ListItemText primary="Published Posts" sx={commonStyles} />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/my-post/?status=draft"
                sx={{ pl: 4 }}
                selected={location.search === "?status=draft"}
              >
                <ListItemIcon>
                  <SaveAsIcon sx={commonStyles} />
                </ListItemIcon>
                <ListItemText primary="Drafts" sx={commonStyles} />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/create-post"
                selected={location.pathname === "/create-post"}
              >
                <ListItemIcon>
                  <DrawIcon sx={commonStyles} />
                </ListItemIcon>
                <ListItemText primary="Write" sx={commonStyles} />
              </ListItemButton>
            </List>
          </Collapse>
        </div>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            fontStyle: "italic",
            bgcolor: "primary",
            color: grey[100],
            margin: 2,
            padding: 1,
            fontWeight: "bold",
            textTransform: "none",
            alignSelf: "center",
            borderRadius: 0,
            boxShadow: theme.shadows[3],
            "&:hover": {
              boxShadow: theme.shadows[6],
              bgcolor: theme.palette.primary.dark,
            },
          }}
        >
          {"Yosef.Emyayu@ጃንpost.com"}
        </Button>
      </List>
      <Divider orientation="vertical" flexItem />
    </Stack>
  );
};

export default SideBar;
