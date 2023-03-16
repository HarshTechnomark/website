import React from "react";
import Card from "../../../uiComponents/Card/Card";
import investment from "../../../assets/investment.png";
import classes from "./Investments.module.css";

type Props = {};

const Investments = (props: Props) => {
  return (
    <Card className={classes.investment}>
      <div className={classes.mainName}>
        <img className={classes.icon} src={investment} alt="Investment" />
        <span>Investment</span>
      </div>
      <div className={classes.investmentData}>
        <p>Mutual Funds</p>
        <p>$1000 @12/months</p>
        <p>Public Provident Funds</p>
        <p>$1000 @12/months</p>
      </div>
      <span className={classes.more}>more</span>
    </Card>
  );
};

export default Investments;
