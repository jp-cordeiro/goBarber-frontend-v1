import React from "react";
import { Switch, Route } from "react-router-dom";
import Darshboard from "../pages/Dashboard/Darshboard";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      
      <Route path="/dashboard" component={Darshboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
