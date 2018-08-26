import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/LoginPage";
import Register from "./Components/Register/RegisterPage";
import SignleAdPage from "./Components/Ads/SignleAdPage";
import SubmitAd from "./Components/SubmitAd/SubmitAdPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Category from "./Components/Category/Category";
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
            <Route path="/listings/:id" exact component={SignleAdPage} />
            <PrivateRoute path="/submitad" component={SubmitAd} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/category/:category" component={Category} />
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
