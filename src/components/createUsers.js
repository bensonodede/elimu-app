import React from "react";
import { Form } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import { auth } from "../firebase";

export default class CreateUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      firstName: "",
      lastName: "",
      role: "",
      error: ""
    };
  }
  registerUser = event => {
    console.log(this.state);

    const { userEmail, userPassword } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(
        userEmail.nextValue,
        userPassword.nextValue
      )
      .then(authUser => {
        console.log(authUser);
        //this.setState({ ...INITIAL_STATE });
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
    const error = this.state;
    return (
      <Form action={this.registerUser}>
        <Input
          onChange={text => this.setState({ firstName: text })}
          name="firstName"
          spellCheck={false}
          type="name"
          label="First Name"
          required
        />
        <Input
          onChange={text => this.setState({ lastName: text })}
          name="lastName"
          spellCheck={false}
          type="name"
          label="Last Name"
          required
        />
        <Input
          onChange={text => this.setState({ userEmail: text })}
          name="userEmail"
          spellCheck={false}
          type="email"
          label="E-mail"
          required
        />
        <Input
          onChange={text => this.setState({ userPassword: text })}
          name="userPassword"
          type="password"
          label="Password"
          required
        />

        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          required
          skip
        />
        <div>
          <p>User role</p>
          <select>
            <option value="" />
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        <Button primary>Sign Up</Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}
