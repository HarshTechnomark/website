import React from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "../Comman.module.css";
import deutsche from "../../../assets/deutsche 1.png";

type Props = {};

const Deutsche = (props: Props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.first}>
        <div className={classes.left}>
          <span>Deutsche Bank</span>
          <span>83 XXXX XX 32</span>
        </div>
        <img className={classes.icon} src={deutsche} alt="deutsche" />
      </div>
      <p>228.32 $</p>
    </Card>
  );
};

export default Deutsche;
