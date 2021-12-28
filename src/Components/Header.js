import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
  IconButton,
  withStyles,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";

import { CryptoState } from "../CryptoContext";
import logo from "./cOre share.svg";

import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./UserSidebar";
import { Email, Home, Radio } from "@material-ui/icons";
import ButtonMailto from "./ButtonMailto";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#2eb8b8",
    fontFamily: "Bungee",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#2eb8b8",
    },
    type: "light",
  },
});

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
            >
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                style={{ left: 0 }}
              />
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={"USD"}
              value={currency}
              style={{
                backgroundColor: "#2eb8b8",
                fontFamily: "Bungee",
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"BRL"}>BRL</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
              <MenuItem value={"RUB"}>RUB</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
              <MenuItem value={"CAD"}>CAD</MenuItem>
              <MenuItem value={"AUD"}>AUD</MenuItem>
              <MenuItem value={"CNY"}>CNY</MenuItem>
            </Select>

            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
