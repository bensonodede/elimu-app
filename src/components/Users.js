import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";
import { onceGetStudents } from "../firebase/db";

export default class ReportsPage extends Component {
  constructor() {
    super();
    this.state = {
      Students: []
    };
  }
  componentDidMount() {
    const { Students } = this.state;
    onceGetStudents().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data());
        const user = {
          id: doc.id,
          data: doc.data()
        };
        Students.push(user);
        this.setState({ Students }, () => {
          console.log(this.state.Students);
        });
      });
    });
  }
  render() {
    const { Students } = this.state;
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
            {Students.map(item => (
              <tr key={item.id}>
                <td>{item.data.email}</td>
                <td>{item.data.firstName}</td>
                <td>{item.data.lastName}</td>
                <td>Student</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
