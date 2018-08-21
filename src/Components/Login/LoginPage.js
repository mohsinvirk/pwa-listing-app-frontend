import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import Header from "../Header/MainHeader";
import { loginUser } from "../../actions/authActions";

class Login extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header />
        <LoginForm
          onSubmit={data => {
            this.props.dispatch(loginUser(data, this.props.history));
          }}
        />
        {user.isAuthenticated && <Redirect to="/dashboard" />}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    user: state.auth,
    error: state.error.message
  };
};

export default connect(MapStateToProps)(Login);
