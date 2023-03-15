import React from "react";
import Card from "../../uiComponents/Card/Card";
import classes from "./AccountSummary.module.css";
import AccountSum from "../../assets/accountsummary.svg";

type Props = {};

const AccountSummary = (props: Props) => {
  return (
    <Card className={classes.accountSummary}>
      <div className={classes.fdiv}>
        <img className={classes.icon} src={AccountSum} alt="" />
        <span>Account Summary</span>
      </div>
      <div className={classes.sdiv}>
        <span>
          <p>Accounts</p>
          <p>Saving(3) Current(2)</p>
        </span>
        <span>
          <p>Deposit(2)</p>
        </span>
        <span>
          <p>Loan(2)</p>
        </span>
      </div>
      <hr />
      <div className={classes.tdiv}>
        <ul className={classes.first}>
          <li>Account Number</li>
          <li>123456789</li>
          <li>987654321</li>
          <li>987654321</li>
        </ul>
        <ul className={classes.second}>
          <li>Account Balance</li>
          <li>$1000.00</li>
          <li>$900.30</li>
          <li>$450.56</li>
        </ul>
      </div>
    </Card>
  );
};

export default AccountSummary;
