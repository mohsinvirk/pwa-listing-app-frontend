import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { DashboardOutlined as Dashboard } from "@material-ui/icons";

import { CloudUploadOutlined as CloudUploadIcon } from "@material-ui/icons";

import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const drawerWidth = 250;

const styles = theme => ({
  link: {
    textDecoration: "none",
    color: "#000"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: 1080,
    display: "flex",
    justifyContent: "center",
    margin: "0 auto"
  },
  appFrame: {
    height: 100,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },

  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  },
  tagline: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "500"
  },
  "@media only screen and (min-width: 680px)": {
    mobileOnly: {
      display: "none",
      color: "#000"
    },
    drawerHeader: {
      display: "none",
      color: "#000 !important"
    },
    appFrame: {
      height: "100px"
    }
  },
  "@media only screen and (max-width: 680px)": {
    button: {
      display: "none"
    },
    tagline: {
      fontSize: "1rem"
    }
  }
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    anchor: "left"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <div>
        <List>
          <MenuItem>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard" className={classes.link}>
              Messages
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard" className={classes.link}>
              Favorites
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register" className={classes.link}>
              Register
            </Link>
          </MenuItem>
        </List>
        <Divider />
        <List>
          <MenuItem>
            <Link to="/submitad" className={classes.link}>
              Post Ad
            </Link>
          </MenuItem>
        </List>
      </div>
    );

    return (
      <Grid container className={classes.container}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar
                disableGutters={!open}
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "white"
                }}
              >
                <div className={classes.mobileOnly}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton,
                      open && classes.hide,
                      classes.mobileOnly
                    )}
                    style={{ color: "black" }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    open={open}
                    onClose={this.handleDrawerClose}
                    className={classes.mobileOnly}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={this.handleDrawerClose}
                      onKeyDown={this.handleDrawerClose}
                    >
                      {drawer}
                    </div>
                  </Drawer>
                </div>
                <header className={classes.logoAndTagline}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      float: "left"
                    }}
                  >
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className={classes.tagline}>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {" "}
                        Pakistan's Largest Marketplace
                      </Link>
                    </span>
                  </div>
                </header>
                <div
                  style={{
                    float: "right",
                    textAlign: "right",
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <Button
                    variant="contained"
                    color="default"
                    style={{ color: "#2965BE" }}
                    className={classes.button}
                    component={Link}
                    to={"/dashboard"}
                  >
                    My Account
                    <Dashboard className={classes.rightIcon} />
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={Link}
                    to={"/submitad"}
                    style={{ backgroundColor: "#FF7700" }}
                  >
                    Post a Free Ad
                    <CloudUploadIcon className={classes.rightIcon} />
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </Grid>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
