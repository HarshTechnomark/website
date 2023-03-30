import React, { ChangeEvent, useState } from "react";
import classes from "./Login.module.css";
import BgImg from "../../assets/loginbg.png";
import Button from "../../uiComponents/Button/Button";
import Footer from "../../uiComponents/Footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
type Props = {};

const schema = yup
  .object({
    username: yup
      .string()
      .min(4)
      .required("Username must be of least 4 characters"),
    password: yup.string().min(8).max(16).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Login = (props: Props) => {
  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/navbar");
    // navigate('/overview')
  };
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/onboarding");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={classes["bg-div"]}>
      <form
        className={classes["form-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes["sign-container"]}>
          <div className={classes["signin-container"]}>
            <p className={classes["sign-para"]}>Sign In</p>
          </div>
          <div className={classes["signup-container"]}>
            {/* <Link to ='/'>  */}
            <p
              style={{ color: "white" }}
              className={classes["sign-para"]}
              onClick={handleSignup}
            >
              Sign Up
            </p>
            {/* </Link> */}
          </div>
        </div>
        <div className={classes["signform-container"]}>
          <div className={classes["inputs"]}>
            <p>
              Username <span> *</span>
            </p>
            <input
              className={classes["input-tag"]}
              type="text"
              placeholder="Enter Username"
              {...register("username")}
            />
            <span className={classes["errorss"]}>
              {errors.username?.message}
            </span>
          </div>
          <div className={classes["inputs"]}>
            <p>
              Password <span> *</span>
            </p>
            <input
              className={classes["input-tag"]}
              type="text"
              placeholder="Enter Password"
              {...register("password")}
            />
            <span className={classes["errorss"]}>
              {errors.password?.message}
            </span>
          </div>
          <div>
            <Button className={classes["btn"]} type="submit">
              Sign in
            </Button>
          </div>
        </div>
        <div>
          <p className={classes["forgot"]}>
            Forgot Username? | Forgot Password?
          </p>
        </div>
        <div>
          <p className={classes["compulsory"]}>
            Fields marked with * are mandatory
          </p>
        </div>
      </form>
      <div>{/* footer */}</div>
    </div>
  );
};

export default Login;
