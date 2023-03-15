import React from "react";
import classes from "./Navbar.module.css";
import { Bell } from "react-feather";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={classes.nav}>
      <h2 className={classes.logo}>NOVAS BANK</h2>
      <div className={classes.user}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt="Person"
        />
        <div className={classes.username}>
          <h4>Naveen</h4>
          <h6>Logout</h6>
        </div>
        <Bell className={classes.icon} />
      </div>
      <ul>
        <li className={classes.active}>Overview</li>
        <li>Accounts</li>
        <li>Payments</li>
        <li>Loans</li>
        <li>Investments</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
