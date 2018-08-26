import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import AddItem from "../Ads/AddItem";
import { getAds } from "../../actions/ads";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "1080px",
    margin: "0 auto"
  },
  paper: {
    padding: "20px 10px 35px 10px",
    margin: "20px auto 20px"
  },
  responsiveimg: {
    maxWidth: "100%"
  },
  link: {
    textDecoration: "none"
  },
  price: {
    color: "#ff7700",
    fontWeight: "700",
    padding: "3px"
  }
});

class AdsCategory extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAds());
  }

  render() {
    const { ads, classes, user } = this.props;
    let filteredAds = ads.ads.filter(item => {
      return user.email === item.email;
    });
    let postContent;
    if (ads.isLoading) {
      postContent = (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      );
    } else {
      postContent = filteredAds.map(item => {
        return (
          <Grid item md={4} key={item._id}>
            <AddItem
              file={`https://olx-backend.herokuapp.com/${item.file}`}
              title={item.title}
              price={item.price}
              key={item._id}
              to={item._id}
              avatar={user.avatar}
              favorite={item.favorite}
            />
          </Grid>
        );
      });
    }
    if (filteredAds.length === 0) {
      postContent = (
        <div className={classes.root}>
          <h2>
            <em>
              "No Ads related to this category. Please check something else"{" "}
            </em>
            <br />
            <Link to="/">Go to Home Page</Link>
            <br />
            <Link to="/submitad">Create New Ad</Link>
          </h2>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Grid container spacing={8} className={classes.container}>
            {postContent}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    ads: state.ads
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AdsCategory));
