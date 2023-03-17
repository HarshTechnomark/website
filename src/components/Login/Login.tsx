import React from "react";
import classes from "./Login.module.css";
import BgImg from "../../assets/loginbg.png";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={classes["bg-div"]}>
      <div className={classes["form-container"]}>
        {/* Main login form container */}
        <div className={classes["signin-container"]}>
          {/* sign in and sign up container */}
          <div>{/* Sign in container */}</div>
          <div>{/* sign up container */}</div>
        </div>
        <div>
          {/* Main form container where we giv padding from the sign in container */}
          <div>{/* Username field and input component */}</div>
          <div>{/* Password  field and input component */}</div>
          <div>{/* sign in button */}</div>
        </div>
        <div>{/* forgot username or password */}</div>
        <div>{/* field marked with* are compulsory */}</div>
      </div>
      <div>{/* place to render footer */}</div>
    </div>
  );
};

export default Login;
