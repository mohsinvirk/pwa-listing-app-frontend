import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

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
    padding: "20px 30px 50px 15px",
    margin: "100px auto 30px"
  }
});

class InputAdornments extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: "Please fill all the feilds correctly"
      });
    } else {
      let data = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.onSubmit(data);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <h1>Login Here</h1>
              <form onSubmit={this._handleSubmit}>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="adornment-password">Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    error={this.state.error ? true : false}
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                  <Input
                    id="adornment-password"
                    type="password"
                    error={this.state.error ? true : false}
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Login
                </Button>
                {this.state.error && (
                  <p style={{ color: "red" }}>{this.state.error}</p>
                )}
              </form>
              <Link to="/register" style={{ marginTop: "20px" }}>
                Don't have an account? register here!
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} />
      </Grid>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputAdornments);
