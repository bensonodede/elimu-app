import React, { Component } from "react";
import { browserHistory } from "react-router";

export default class createUsers extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="App-container">
        <div />
        <div>
          <h3 className="Input-title">email</h3>
          <input type="text" placeholder="" />
        </div>
        <div>
          <h3 className="Input-title">First name</h3>
          <input type="text" placeholder="" />
        </div>
        <div>
          <h3 className="Input-title">Last name</h3>
          <input type="text" placeholder="" />
        </div>
        <div>
          <h3 className="Input-title">Password</h3>
          <input type="text" placeholder="" />
        </div>
        <div>
          <h3 className="Input-title">User role</h3>
          <select>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button>
          <p>Create</p>
        </button>
      </div>
    );
  }
}
