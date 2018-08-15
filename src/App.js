import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/LoginPage";
import Register from "./Components/Register/RegisterPage";
import AdItem from "./Components/Ads/AddItem";
import SubmitAd from "./Components/SubmitAd/SubmitAdPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/routes/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/ad" exact component={AdItem} />
            <PrivateRoute path="/submitad" component={SubmitAd} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
      <br />
      Go Back to <Link to="/">Home</Link>!
    </h3>
  </div>
);

export default App;
