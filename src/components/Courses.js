import React, { Component } from "react";
import "../styles/Course.css";
import "../styles/App.css";
import { db } from "../firebase";

export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courseCode: "",
      courseDesc: ""
    };
  }
  onSubmit = () => {
    const { courseCode, courseDesc } = this.state;
    console.log(this.state);
    db.doCreateCourse(courseCode, courseDesc)
      .then(() => {
        console.log("DONE");
      })
      .catch(error => {
        console.warn(error);
      });
  };

  updateCodeValue(evt) {
    this.setState(
      {
        courseCode: evt.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  updateDescValue(evt) {
    this.setState(
      {
        courseDesc: evt.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return (
      <div className="App-container">
        <div>
          <h3 className="Input-title">Course Code</h3>
          <input
            onChange={evt => this.updateCodeValue(evt)}
            type="text"
            placeholder="What is the course name?"
          />
        </div>
        <div>
          <h3>Course Description</h3>
          <input
            onChange={evt => this.updateDescValue(evt)}
            type="text"
            placeholder="What is the course description?"
          />
        </div>
        <button onClick={this.onSubmit}>
          <p>Create</p>
        </button>
      </div>
    );
  }
}
