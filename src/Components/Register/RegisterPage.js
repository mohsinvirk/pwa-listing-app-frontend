import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegisterForm from "./RegisterForm";
import Header from "../Header/MainHeader";

class Register extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header />
        <RegisterForm />
        {user.isAuthenticated && <Redirect to="/dashboard" />}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(MapStateToProps)(Register);
