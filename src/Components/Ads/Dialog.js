import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class AlertDialog extends React.Component {
  state = {
    open: false,
    message: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  _handleSubmit = () => {
    this.setState({ open: false });
    axios
      .post("https://olx-backend.herokuapp.com/message", {
        senderName: this.props.senderName,
        senderEmail: this.props.senderEmail,
        adAuthor: this.props.senderEmail,
        senderMessage: this.state.message
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Send a Message</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <TextField
                id="message"
                label="message"
                multiline
                rows="4"
                margin="normal"
                value={this.state.message}
                onChange={this.handleChange("message")}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleSubmit} color="primary" autoFocus>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
