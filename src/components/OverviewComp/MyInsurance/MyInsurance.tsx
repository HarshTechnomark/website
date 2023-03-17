import React from "react";
import classes from './MyInsurance.module.css'
import insurance from "../../../assets/icons-05 1.png";
import Card from "../../../uiComponents/Card/Card";

type Props = {};

const MyInsurance = (props: Props) => {
  return (
    <Card className={classes.insurance}>
      <div className={classes.mainName}>
        <img className={classes.icon} src={insurance} alt="Insurance" />
        <span>My Insurance</span>
      </div>
      <div className={classes.insuranceData}>
        <p>Term Life Insurance</p>
        <p>$1000 @12/month</p>
      </div>
      <p className={classes.more}>more</p>
    </Card>
  );
};

export default MyInsurance;
