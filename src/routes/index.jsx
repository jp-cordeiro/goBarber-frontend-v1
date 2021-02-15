import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Darshboard from "../pages/Dashboard/Darshboard";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route isPrivate path="/dashboard" component={Darshboard} />
      <Route isPrivate path="/profile" component={Profile} />
    </Switch>
  );
}
