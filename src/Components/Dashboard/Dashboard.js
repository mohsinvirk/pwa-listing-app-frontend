import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/MainHeader.js";
import Tabs from "./DashboardTabs";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1080px",
    margin: "0 auto"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.container}>
          <br />
          <Tabs />
        </div>
      </div>
    );
  }
}

const DashboardWithStyles = withStyles(styles)(Dashboard);

const MapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(MapStateToProps)(DashboardWithStyles);
