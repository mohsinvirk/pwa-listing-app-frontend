import React from "react";
import RegisterForm from "./RegisterForm";
import Header from "../Header/MainHeader";

class Login extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}

export default Login;
