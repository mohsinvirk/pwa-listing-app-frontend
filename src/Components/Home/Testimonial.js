import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import imageHome from "../../assets/images/home.png";
import imageCar from "../../assets/images/car.png";
import imagePhone from "../../assets/images/phone.png";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  container: {
    maxWidth: "1080px",
    display: "flex",
    margin: "0 auto",
    padding: "12px 0px"
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container className={classes.container} spacing={8}>
        <Grid xs={12} item>
          <h1 style={{ textAlign: "center" }}>Amazing Stories on OLX</h1>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imageHome}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Abdul Rehman, Lahore
              </Typography>
              <Typography component="p">
                I was worried about selling my house and thinking how to sell
                it. Then I found out how easy it is to list my house for sale on
                OLX.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imageCar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Zain, Faisalabad
              </Typography>
              <Typography component="p">
                I sold my car today after listing it 2 days ago. I loved the
                responses on my ad and found OLX really amazing since I placed
                the ad.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          {" "}
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imagePhone}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Yasir, Lahore
              </Typography>
              <Typography component="p">
                OLX is a great classified app. I sold my mobile within 2 hours
                after posting my ad... I recommend OLX for selling and
                purchasing
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
