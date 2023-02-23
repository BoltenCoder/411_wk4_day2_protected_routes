import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

var loggedState = ""

const changeNavText = () => {const cookies = cookie.parse(document.cookie);
if  (cookies["loggedIn"] === "true") {loggedState = "Log Out"
} else {loggedState = "Log In"}
}

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            {changeNavText()}
            {loggedState}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
