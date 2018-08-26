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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { DashboardOutlined as Dashboard } from "@material-ui/icons";

import { CloudUploadOutlined as CloudUploadIcon } from "@material-ui/icons";

import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const drawerWidth = 150;

const styles = theme => ({
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
    height: 330,
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

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Hidden className={classes.mobileOnly}>
        <Drawer
          variant="persistent"
          anchor={anchor}
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
          className={classes.mobileOnly}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={this.handleDrawerClose}
              className={classes.mobileOnly}
              style={{ color: "#000" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <MenuItem>Mohsin</MenuItem>
            <MenuItem>Hassan</MenuItem>
            <MenuItem>Hamza</MenuItem>
            <MenuItem>Amir</MenuItem>
          </List>
          <Divider />
          <List>
            <MenuItem>Logout</MenuItem>
          </List>
        </Drawer>
      </Hidden>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

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
            {before}
            <main
              className={classNames(
                classes.mobileOnly,
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open
                }
              )}
            >
              <div className={classes.drawerHeader} />
              <div
                style={{
                  letterSpacing: "3px",
                  lineHeight: "2rem",
                  textAlign: "center"
                }}
              >
                <h1>"Buy, Sell, Compare"</h1>
                <h3 style={{ letterSpacing: "5px", fontWeight: "500" }}>
                  Search more than 8 lac listings across Pakistan today
                </h3>
              </div>
            </main>
            {after}
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
