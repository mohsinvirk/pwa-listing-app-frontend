import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
import { PetsOutlined, Car } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import property from "../../assets/svg/001-architecture-and-city.svg";
import services from "../../assets/svg/001-support.svg";
import pets from "../../assets/svg/002-cat.svg";
import fashion from "../../assets/svg/002-chef.svg";
import bike from "../../assets/svg/003-bike.svg";
import agri from "../../assets/svg/003-cotton.svg";
import cars from "../../assets/svg/004-car.svg";
import sports from "../../assets/svg/004-gym.svg";
import electronics from "../../assets/svg/005-microchip.svg";
import mobiles from "../../assets/svg/006-mobile-phone.svg";
import furniture from "../../assets/svg/007-bed.svg";
import books from "../../assets/svg/008-book.svg";
=======
import Grid from "@material-ui/core/Grid";
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37

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
<<<<<<< HEAD
  },
  img: {
    display: "flex",
    alignSelf: "center",
    width: "50px"
=======
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
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
<<<<<<< HEAD
            icon={<img src={pets} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Cars"}
            to={"/category/cars"}
            icon={<img src={cars} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Property"}
            to={"/category/property"}
            icon={<img src={property} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Bikes"}
            to={"/category/bikes"}
            icon={<img src={bike} alt="cat icon" className={classes.img} />}
          />
=======
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
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Electronics"}
            to={"/category/electronics"}
<<<<<<< HEAD
            icon={
              <img src={electronics} alt="cat icon" className={classes.img} />
            }
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Mobiles"}
            to={"/category/mobiles"}
            icon={<img src={mobiles} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Furniture"}
            to={"/category/furniture"}
            icon={
              <img src={furniture} alt="cat icon" className={classes.img} />
            }
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Books"}
            to={"/category/books"}
            icon={<img src={books} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Services"}
            to={"/category/services"}
            icon={<img src={services} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Fashion"}
            to={"/category/fashion"}
            icon={<img src={fashion} alt="cat icon" className={classes.img} />}
          />
=======
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
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Agriculture"}
            to={"/category/agriculture"}
<<<<<<< HEAD
            icon={<img src={agri} alt="cat icon" className={classes.img} />}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem
            linkTitle={"Sports"}
            to={"/category/sports"}
            icon={<img src={sports} alt="cat icon" className={classes.img} />}
          />
=======
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <CategoryItem linkTitle={"Sports"} to={"/category/sports"} />
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
