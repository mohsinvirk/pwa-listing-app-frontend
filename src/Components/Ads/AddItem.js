import React from "react";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/FavoriteBorder";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import img from "../../assets/images/car.png";

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
    padding: "20px 20px 35px 20px",
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
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.container} container spacing={8}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img
              src={img}
              alt="Ad thumbnail"
              className={classes.responsiveimg}
            />
            <Link to="/" className={classes.link}>
              <h3>Title of the Item</h3>
            </Link>
            <Typography color="primary">Lahore</Typography>
            <p color="primary" className={classes.price}>
              Rs 750,000
            </p>
            <Button
              variant="fab"
              color="secondary"
              aria-label="Add"
              className={classes.button}
            >
              <AddIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    );
  }
}

export default withStyles(styles)(AdItem);
