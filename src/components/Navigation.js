import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../constants/routes";
import "../styles/App.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="Header-Container">
        <h1 className="Menu-Logo">LOGO</h1>
        <div className=" Menu-Container">
          <ul className=" Menu-List">
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.HOME}
              >
                Home
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.COURSES}
              >
                Courses
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.USERS}
              >
                Users
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.LOGOUT}
              >
                Logout
              </NavLink>
            </p>
            <p className="Menu-Item">
              <NavLink
                activeClassName="Menu-Link-Active"
                className="Menu-Link"
                to={routes.SIGN_IN}
              >
                Sign In
              </NavLink>
            </p>
          </ul>
        </div>
      </div>
    );
  }
}
