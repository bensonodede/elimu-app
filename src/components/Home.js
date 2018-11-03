import React, { Component } from "react";
import { firebase, auth } from "../firebase";
import "../styles/Home.css";
import "../styles/App.css";

export default class HomePage extends Component {
  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log("SIGNED IN: ", user);
      } else {
        console.log("NOT SIGNED IN");
        // Confirm the link is a sign-in with email link.
        if (auth.doConfirmEmailLink(window.location.href)) {
          let email = window.localStorage.getItem("emailForSignIn");
          console.log(email);
          if (!email) {
            email = window.prompt("Please provide your email for confirmation");
            console.log(email);
          }
          // The client SDK will parse the code from the link for you.
          auth
            .doParseAndSignIn(email, window.location.href)
            .then(result => {
              console.log(result);
              // Clear email from storage.
              window.localStorage.removeItem("emailForSignIn");
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("NOT VERIFIED");
        }
      }
    });
  }
  render() {
    return (
      <div className="App-container">
        <h1 className="Home-header">Welcome to your dashboard</h1>
      </div>
    );
  }
}
