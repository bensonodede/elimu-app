import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";

export default class ReportsPage extends Component {
  render() {
    return (
      <div>
        <NavLink
          activeClassName="Menu-Link-Active"
          className="Menu-Link"
          to={routes.CREATE_USERS}
        >
          Create User
        </NavLink>
        <table className="mui-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
              <th>User role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>brucewayne@gmail.com</td>
              <td>Bruce</td>
              <td>Wayne</td>
              <td>Student</td>
            </tr>
            <tr>
              <td>clarkkent@gmail.com</td>
              <td>Clark</td>
              <td>Kent</td>
              <td>Instructor</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
