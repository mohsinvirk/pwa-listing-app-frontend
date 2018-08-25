import React from "react";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FavoriteBorderOutlined, Favorite } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { putAd } from "../../actions/ads";

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
    justifyContent: "center",
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

class AdItem extends React.Component {
  state = {
    favorite: true
  };

  _handleFavoriteClick = (id, avatar) => {
    this.setState(prevState => {
      return {
        favorite: !prevState.favorite
      };
    });

    this.props.dispatch(putAd({ favorite: this.state.favorite }, id, avatar));
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <img
          src={this.props.file}
          alt="Ad thumbnail"
          className={classes.responsiveimg}
        />
        <Link to={`/listings/${this.props.to}`} className={classes.link}>
          <h3>{this.props.title}</h3>
        </Link>
        <Typography color="primary">{this.props.city}</Typography>
        <p color="primary" className={classes.price}>
          Rs
          {this.props.price}
        </p>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={() =>
            this._handleFavoriteClick(this.props.to, this.props.avatar)
          }
        >
          {this.state.favorite && <Favorite />}
          {!this.state.favorite && <FavoriteBorderOutlined />}
        </Button>
      </Paper>
    );
  }
}

export default connect()(withStyles(styles)(AdItem));
