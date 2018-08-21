import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import ReactDropzone from "react-dropzone";
// import axios from "axios";
// import { Link } from "react-router-dom";

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
    flexBasis: 150
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
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class InputAdornments extends React.Component {
  state = {
    title: "",
    category: "",
    name: "",
    description: "",
    price: 0,
    address: "",
    phone: 0,
    email: "",
    city: "",
    files: [],
    imagePreviewUrl: "",
    error: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSelectChange = event => {
    this.setState({ category: event.target.value });
    console.log(event.target.value);
  };

  onPreviewDrop = files => {
    this.setState({
      files: this.state.files.concat(files)
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const state = this.state;
    if (
      !state.title ||
      !state.description ||
      !state.price ||
      !state.city ||
      !state.address ||
      !state.phone
    ) {
      this.setState({
        error: "Please fill all the feilds!"
      });
    } else {
      this.setState({
        error: ""
      });
      var formData = new FormData();
      formData.append("title", state.title);
      formData.append("category", state.category);
      formData.append("description", state.description);
      formData.append("address", state.address);
      formData.append("price", state.price);
      formData.append("name", state.name);
      formData.append("email", state.email);
      formData.append("city", state.city);
      formData.append("phone", state.phone);
      formData.append("file", state.files[0]);
      // let data = {
      //   title: state.title,
      //   category: state.category,
      //   description: state.description,
      //   price: state.price,
      //   address: state.Addresname,
      //   name: state.name,
      //   email: state.email,
      //   phone: state.phone,
      //   file: state.files[0]
      // };
      this.props.onSubmit(formData);
      console.log(formData);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <h1>Submit an Ad</h1>

              <form onSubmit={this._handleSubmit}>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="adornment-password">Title</InputLabel>
                  <Input
                    id="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-controlled-open-select">
                    Category
                  </InputLabel>
                  <Select
                    value={this.state.category}
                    onChange={this.handleSelectChange}
                    inputProps={{
                      name: "category",
                      id: "demo-controlled-open-select"
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"pets"}>Pets</MenuItem>
                    <MenuItem value={"cars"}>Cars</MenuItem>
                    <MenuItem value={"property"}>Property</MenuItem>
                    <MenuItem value={"bikes"}>Bikes</MenuItem>
                    <MenuItem value={"electronics"}>Electronics</MenuItem>
                    <MenuItem value={"mobiles"}>Mobiles</MenuItem>
                    <MenuItem value={"furniture"}>Furniture</MenuItem>
                    <MenuItem value={"books"}>Books</MenuItem>
                    <MenuItem value={"services"}>Services</MenuItem>
                    <MenuItem value={"fashion"}>Fashion</MenuItem>
                    <MenuItem value={"agriculture"}>Agriculture</MenuItem>
                    <MenuItem value={"sports"}>Sports</MenuItem>
                  </Select>
                </FormControl>
                <Divider />
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <TextField
                    id="description"
                    label="Description"
                    multiline
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.description}
                    onChange={this.handleChange("description")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Price</InputLabel>
                  <Input
                    id="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.handleChange("price")}
                  />
                </FormControl>
                <Divider />
                <h5>Address Details</h5>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Name</InputLabel>
                  <Input
                    id="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Address</InputLabel>
                  <Input
                    id="address"
                    type="text"
                    value={this.state.address}
                    onChange={this.handleChange("address")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Phone</InputLabel>
                  <Input
                    id="phone"
                    type="tel"
                    value={this.state.phone}
                    onChange={this.handleChange("phone")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="adornment-password">City</InputLabel>
                  <Input
                    id="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange("city")}
                  />
                </FormControl>
                <Divider />
                <h5>Add Image</h5>
                <FormControl
                  fullWidth
                  className={classNames(classes.margin, classes.textField)}
                >
                  <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
                    Drop an image, get a preview!
                  </ReactDropzone>
                </FormControl>
                {this.state.files.length > 0 && <h3>Previews</h3>}{" "}
                {this.state.files.map(file => (
                  <img
                    src={file.preview}
                    key={file.preview}
                    alt="Preview"
                    width="100px"
                    style={{ padding: "20px", marginBottom: "20px" }}
                  />
                ))}
                {this.state.error && <p>{this.state.error}</p>}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Register
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
        <Grid xs={12} sm={2} item />
      </Grid>
    );
  }
}

export default withStyles(styles)(InputAdornments);
