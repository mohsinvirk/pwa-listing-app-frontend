import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CategoryItem from "./CategoryItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "1080px",
    display: "flex",
    margin: "0 auto",
    padding: "50px 15px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid xs={12} item>
          <h1 style={{ textAlign: "center" }}>Listing Categories</h1>
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Pets"}
            to={"/category/pets"}
            style={{ backgroundColor: "#eee" }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Cars"} to={"/category/cars"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Property"} to={"/category/property"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Bikes"} to={"/category/bikes"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Electronics"}
            to={"/category/electronics"}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Mobiles"} to={"/category/mobiles"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Furniture"} to={"/category/furniture"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Books"} to={"/category/books"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Services"} to={"/category/services"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Fashion"} to={"/category/fashion"} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Agriculture"}
            to={"/category/agriculture"}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Sports"} to={"/category/sports"} />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
