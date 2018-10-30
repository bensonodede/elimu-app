import React, { Component } from "react";
import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import SyncValidation from "./SyncValidation";

export default class SignUpForm extends Component {
  render() {
    return (
      /* Validation rules and messages are applied application-wide */
      <FormProvider rules={rules} messages={messages}>
        <SyncValidation />
      </FormProvider>
    );
  }
}
