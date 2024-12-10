import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { BlogThemeContext } from "./BlogThemeProvider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { AuthContext } from "../hooks/auth/useAuth";
import { blue } from "@mui/material/colors";
const settings = ["Profile", "Account", "Post Impression", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const themeObject = React.useContext(BlogThemeContext);
  const { user, logout } = React.useContext(AuthContext);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px lightgray solid" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            ጃንpost
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ጃንpost
          </Typography>
          <IconButton
            color="primary"
            onClick={() =>
              themeObject?.theme == "light"
                ? themeObject?.setTheme("dark")
                : themeObject?.setTheme("light")
            }
          >
            {themeObject?.theme == "light" ? <LightMode /> : <DarkMode />}
          </IconButton>

          {!!user ? (
            <Box
              sx={{ flexGrow: 0, px: 1 }}
              component={Button}
              variant="outlined"
            >
              <Tooltip title="Open settings">
                <>
                  {" "}
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ width: 24, height: 24, bgcolor: blue[700] }}>
                      <b>ጃ</b>
                    </Avatar>{" "}
                    <Typography sx={{ color: blue[700] }}>
                      {user.first_name}
                    </Typography>
                  </IconButton>
                </>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting === "Logout"
                        ? () => {
                            logout();
                            handleCloseUserMenu();
                          }
                        : handleCloseUserMenu
                    }
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              sx={{ marginX: 1 }}
              component={Link}
              to="/account/signin"
              variant="outlined"
            >
              Join us
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
