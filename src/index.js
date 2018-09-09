import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./Store/store";
import "./index.css";
<<<<<<< HEAD
import App from "./router";
=======
import App from "./App";
>>>>>>> b5b6232405cc36abd779f43e23579d67209c0a37
import registerServiceWorker from "./registerServiceWorker";
import {
  setCurrentUser,
  logoutUser,
  clearCurrentProfile
} from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}
