import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paperMain: {
    display: "flex",
    justifyContent: "center",
    AlignItems: "center",
    padding: "40px 0px",
    backgroundColor: "#ffe9d6"
  },
  link: {
    color: "#000",
    textDecoration: "none"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paperMain}>
        <Typography variant="headline" component="p">
          <Link to={props.to} className={classes.link}>
            {props.linkTitle}
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
