import React from "react";
import { Form } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import { auth } from "../../firebase";

export default class SyncValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      emailSent: null
    };
  }
  registerUser = event => {
    console.log(this.state);

    const actionCodeSettings = {
      url: "http://localhost:3000",
      handleCodeInApp: true
    };

    const { userEmail } = this.state;

    auth
      .doSignInWithLink(userEmail.nextValue, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", userEmail.nextValue);
        this.setState({ emailSent: true });
      })
      .catch(error => {
        console.log(error);
        //this.setState(byPropKey('error', error));
      });
    //event.preventDefault();

    /* Perform async request with the serialized data */
    return new Promise(resolve => resolve());
  };
  render() {
    const { userEmail } = this.state;
    return (
      <div>
        {this.state.emailSent ? (
          <h3>
            We've sent you an email, on {userEmail.nextValue} ,please login to
            your email to verify.
          </h3>
        ) : (
          <Form action={this.registerUser}>
            <Input
              onChange={text => this.setState({ userEmail: text })}
              name="userEmail"
              spellCheck={false}
              type="email"
              label="E-mail"
              required
            />

            <Button primary>Sign in</Button>
          </Form>
        )}
      </div>
    );
  }
}
