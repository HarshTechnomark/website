import React from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "./AvailableBalance.module.css";

type Props = {};

const AvailableBalance = (props: Props) => {
  return (
    <Card className={classes.availablebalance}>
      <p>Available Balance</p>
      <h2>$1,000.99</h2>
    </Card>
  );
};

export default AvailableBalance;
