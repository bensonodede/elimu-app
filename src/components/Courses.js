import React, { Component } from "react";
import "../styles/Course.css";
import "../styles/App.css";

export default class Courses extends Component {
  render() {
    return (
      <div className="App-container">
        <div>
          <h3 className="Input-title">Course Code</h3>
          <input type="text" placeholder="What is the course name?" />
        </div>
        <div>
          <h3>Course Description</h3>
          <input type="text" placeholder="What is the course description?" />
        </div>
        <button>
          <p>Create</p>
        </button>
      </div>
    );
  }
}
