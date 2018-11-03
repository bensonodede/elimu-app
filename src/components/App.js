import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import HomePage from "./Home";
import Courses from "./Courses";
import Users from "./Users";
import createUsers from "./createUsers";
import MyProfilePage from "./MyProfile";
import LogOutPage from "./LogOut";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";

import * as routes from "../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.COURSES} component={Courses} />
      <Route exact path={routes.USERS} component={Users} />
      <Route exact path={routes.CREATE_USERS} component={createUsers} />
      <Route exact path={routes.MY_PROFILE} component={MyProfilePage} />
      <Route exact path={routes.LOGOUT} component={LogOutPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
    </div>
  </Router>
);

export default App;
