import React from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "../Comman.module.css";
import santander from "../../../assets/santander 1.png";

type Props = {};

const Santander = (props: Props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.first}>
        <div className={classes.left}>
          <span>Santander</span>
          <span>83 XXXX XX 32</span>
        </div>
        <img className={classes.icon} src={santander} alt="santander" />
      </div>
      <p>1028.01 $</p>
    </Card>
  );
};

export default Santander;
