import React, { useState } from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "./AccountSummary.module.css";
import AccountSum from "../../../assets/accountsummary.svg";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";

type Props = {};

const AccountSummary = (props: Props) => {
  // ** State
  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Card className={classes.accountSummary}>
      <div className={classes.fdiv}>
        <img className={classes.icon} src={AccountSum} alt="" />
        <span>Account Summary</span>
      </div>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          className={classes.sdiv}
          aria-label="simple tabs example"
        >
          <Tab value="1" label="Accounts" />
          <Tab value="2" label="Deposit" />
          <Tab value="3" label="Loan" />
        </TabList>
        <TabPanel value="1">
          <Typography>
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
          </Typography>
        </TabPanel>
        <TabPanel value="2">
          <Typography>
            <div className={classes.tdiv}>
              <ul className={classes.first}>
                <li>Account Number</li>
                <li>123456789</li>
                <li>987654321</li>
              </ul>
              <ul className={classes.second}>
                <li>Account Balance</li>
                <li>$500.00</li>
                <li>$450.00</li>
              </ul>
            </div>
          </Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography>
            <div className={classes.tdiv}>
              <ul className={classes.first}>
                <li>Account Number</li>
                <li>123456789</li>
                <li>987654321</li>
                <li>987654321</li>
              </ul>
              <ul className={classes.second}>
                <li>Account Balance</li>
                <li>$12000.00</li>
                <li>$900.00</li>
                <li>$4500.00</li>
              </ul>
            </div>
          </Typography>
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default AccountSummary;
