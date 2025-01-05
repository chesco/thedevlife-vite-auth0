import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLoginButtonClick = () => {
    loginWithRedirect();
  };

  const handleLogoutButtonClick = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "#16682C" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            textTransform: "none",
            cursor: "pointer",
          }}
          onClick={handleHomeClick}
        >
          App Name
        </Typography>

        {isAuthenticated ? (
              <>
                <Button
                  sx={{ color: "white", textTransform: "none" }}
                  onClick={handleMenuOpen}
                >
                  <Typography>{user.name}</Typography>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  MenuListProps={{ "aria-labelledby": "user-menu-button" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleDashboardClick();
                      handleMenuClose();
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleLogoutButtonClick();
                      handleMenuClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                sx={{ color: "white", textTransform: "none" }}
                onClick={handleLoginButtonClick}
              >
                <Typography>Login</Typography>
              </Button>
            )}
      </Toolbar>
    </AppBar>
  );
}
