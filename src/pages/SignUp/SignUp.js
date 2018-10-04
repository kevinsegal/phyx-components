import React from "react";
import Paper from "@material-ui/core/Paper";
import LoginForm from "../../components/Forms/Login";
import PaymentForm from "../../components/Forms/Payment";
import RegisterForm from "../../components/Forms/Register";

function SignUp() {
  return (
    <React.Fragment>
      <Paper elevation={1} className="container">
        <LoginForm />
      </Paper>
      <Paper elevation={1} className="container">
        <RegisterForm />
      </Paper>
      <Paper elevation={1} className="container">
        <PaymentForm />
      </Paper>
    </React.Fragment>
  );
}

export default SignUp;
