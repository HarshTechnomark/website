import React from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "../Comman.module.css";
import citybank from "../../../assets/citybank 1.png";

type Props = {};

const City = (props: Props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.first}>
        <div className={classes.left}>
          <span>City Bank</span>
          <span>83 XXXX XX 32</span>
        </div>
        <img className={classes.icon} src={citybank} alt="citybank" />
      </div>
      <p>1028.01 $</p>
    </Card>
  );
};

export default City;
