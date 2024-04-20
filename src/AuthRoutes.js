// AuthRoutes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
// import Login from "./components/Auth/Login";
// import Signup from "./components/Auth/Signup";

function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
}

export default AuthRoutes;
