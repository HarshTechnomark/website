import React, { useState } from "react";
import Card from "../../../uiComponents/Card/Card";
import classes from "./Transaction.module.css";
import Activity from "../../../assets/activity.png";
import Calendar from "../../../assets/calendar.png";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";

type Props = {};

const Transaction = (props: Props) => {
  // ** State
  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Card className={classes.accountSummary}>
      <div className={classes.fdiv}>
        <div>
          <img className={classes.icon} src={Activity} alt="Activity" />
          <span>Transaction Feed</span>
        </div>
        <div>
          <img className={classes.icon} src={Calendar} alt="Calendar" />
          <span>Calendar</span>
        </div>
      </div>
      <div className={classes.accountdiv}>
        <span>Account Number</span>
        <select name="accountno" className={classes.select}>
          <option value="654321">654321</option>
          <option value="123456">123456</option>
          <option value="789123">789123</option>
          <option value="123987">123987</option>
        </select>
        <select name="year" className={classes.select}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <span>Total Amount Spent $10000.00 in 2023</span>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          className={classes.sdiv}
          aria-label="simple tabs example"
        >
          <Tab value="1" label="Outflow" />
          <Tab value="2" label="Inflow" />
        </TabList>
        <TabPanel value="1">
          <Typography>
            <div className={classes.tdiv}>
              <ul className={classes.first}>
                <li>Rent Paid</li>
                <li>Supermarkets</li>
                <li>Home Insurance</li>
                <li>Children's Education</li>
                <li>Babysitting</li>
                <li>Public Transport</li>
              </ul>
              <ul className={classes.second}>
                <li>$1000.00</li>
                <li>$900.30</li>
                <li>$450.56</li>
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
                <li>Rent Paid</li>
                <li>Supermarkets</li>
                <li>Home Insurance</li>
                <li>Children's Education</li>
                <li>Babysitting</li>
                <li>Public Transport</li>
              </ul>
              <ul className={classes.second}>
                <li>$1000.00</li>
                <li>$900.30</li>
                <li>$450.56</li>
                <li>$1000.00</li>
                <li>$900.30</li>
                <li>$450.56</li>
              </ul>
            </div>
          </Typography>
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default Transaction;
