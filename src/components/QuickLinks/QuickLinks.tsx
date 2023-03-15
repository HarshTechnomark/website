import React from "react";
import Card from "../../uiComponents/Card/Card";
import classes from "./QuickLinks.module.css";
import Quicklink from "../../assets/quicklink.png";

type Props = {};

const QuickLinks = (props: Props) => {
  return (
    <Card className={classes.quicklinks}>
      <div className={classes.mainName}>
        <img className={classes.icon} src={Quicklink} alt="Quicklink" />
        <span>Quick Links</span>
      </div>
      <div className={classes.links}>
        <p>Account Statement</p>
        <p>Block Debit Card</p>
        <p>Download TDS Certificate</p>
        <p>initiate NEFT/RTGS</p>
        <p>Applu Car Loan</p>
        <p>Apply Home Loan</p>
        <p>Play Your Bills</p>
      </div>
    </Card>
  );
};

export default QuickLinks;
