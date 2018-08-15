import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Header from "../Header/MainHeader";
import { loginUser } from "../../actions/authActions";

class Login extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <Header />
        <LoginForm
          onSubmit={data => {
            this.props.dispatch(loginUser(data, this.props.history));
          }}
        />
      </div>
    );
  }
}

export default connect()(Login);
