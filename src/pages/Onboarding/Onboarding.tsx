import React from "react";
import Sidebar from "../../components/OnboardingComp/Sidebar/Sidebar";
import Card from "../../uiComponents/Card/Card";
import logo from "../../assets/logo.svg";
import classes from "./Onboarding.module.css";
import Form1 from "../../components/OnboardingComp/Forms/Form1/Form1";
import Button from "../../uiComponents/Button/Button";
import Footer from "../../uiComponents/Footer/Footer";
import Form2 from "../../components/OnboardingComp/Forms/Form2/Form2";
import Form3 from "../../components/OnboardingComp/Forms/Form3/Form3";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Form10 from "../../components/OnboardingComp/Forms/Form10/Form10";
import Progress from "../../components/OnboardingComp/Progress/Progress";

type Props = {};

const Onboarding = (props: Props) => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes["main-cont"]}>
      {/* Main Background
      contains Logo login and footer and the card component */}
      <div className={classes["logo-login-container"]}>
        {/* contains logo and the login btn */}
        <div className={classes["logo-cont"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["login-cont"]} onClick={loginHandler}>
          <p className={classes["login"]}>Login</p>
        </div>
      </div>
      <Card className={classes["cont"]}>
        {/* Contains Progress bar 
        form and the sidebar */}
        <div>
          {/* <Progress/> */}
          <p>Progress bar</p>
          {/* Progress bar */}
        </div>
        <div className={classes["form-sidebar-container"]}>
          {/* 
          form and sidebar */}
          <div className={classes['formCont']}>
            <Outlet />
            {/* form component */}
            {/* <Form2/> */}
            {/* <Form3/> */}
            {/* <Form10/> */}
          </div>
          <div className={classes.a}>
            <Sidebar />
          </div>
        </div>
      </Card>
      <div>
        {/* <Footer/> */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Onboarding;
