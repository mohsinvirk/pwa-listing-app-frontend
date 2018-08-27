import React from "react";
// import classNames from "classnames";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/FavoriteBorder";
import { Paper, Tooltip } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { PhoneAndroidOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import img from "../../assets/images/car.png";
import Header from "../Header/MainHeader";
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
  }
});

class AdPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAds());
  }
  render() {
    const { classes, user, ads } = this.props;

    const { id } = this.props.match.params;

    let filteredAds = ads.ads.filter(item => {
      return id === item._id;
    });
    let content = filteredAds.map(item => {
      return (
        <Grid
          className={classes.container}
          container
          spacing={8}
          key={item._id}
        >
          <Grid item md={8} sm={12}>
            <Paper className={classes.paper}>
              <img
                src={`https://olx-backend.herokuapp.com/${item.file}`}
                alt="Ad thumbnail"
                className={classes.responsiveimg}
              />

              <h3>{item.title}</h3>
              <p>Description : {item.description}</p>
              <Typography>City: {item.city}</Typography>
              <Typography>Address: {item.address}</Typography>

              <Tooltip title="Add To Favorites">
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="Add"
                  className={classes.button}
                >
                  <AddIcon />
                </Button>
              </Tooltip>
            </Paper>
          </Grid>
          <Grid item md={4} sm={12}>
            <Paper className={classes.paper}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  background: "#f0f0f0",
                  borderRadius: "5px",
                  padding: "0 15px"
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={user.avatar}
                  className={classes.avatar}
                />
                <h3 style={{ marginLeft: "1rem" }}>Mohsin Latif</h3>
              </div>
              <ListItem button>
                <ListItemIcon>
                  <PhoneAndroidOutlined />
                </ListItemIcon>
                <ListItemText
                  inset
                  primary={<a href={`tel:${item.phone}`}>{item.phone}</a>}
                />
              </ListItem>
            </Paper>
          </Grid>
        </Grid>
      );
    });
    console.log(content);

    return (
      <div>
        <Header />
        {content}
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

export default connect(mapStateToProps)(withStyles(styles)(AdPage));
