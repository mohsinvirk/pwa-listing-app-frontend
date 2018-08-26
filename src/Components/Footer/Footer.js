import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../../logo.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container className={classes.container}>
            <Grid item>
              <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Grid item>
              <p className="contact">080010101</p>
              <span>(9:30am to 6:30pm)</span>
              <p>
                <a href="mailto:help@olx.com.pk">help@olx.com.pk</a>
              </p>
            </Grid>
            <Grid item>
              <span>Developed by Mohsin Latif!</span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
