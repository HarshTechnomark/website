import React from "react";
import classes from "./Navbar.module.css";
import { Bell } from "react-feather";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Accounts from "../../pages/Accounts/Accounts";
import Overview from "../../pages/Overview/Overview";
import Contact from "../../pages/Contact/Contact";
import Investments from "../../pages/Investments/Investments";
import Payments from "../../pages/Payments/Payments";
import Loans from "../../pages/Loans/Loans";

const Navbar = (props: any) => {
  return (
    <Router>
      <div className={classes.mainContent}>
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/accounts"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Accounts
          </NavLink>
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Payments
          </NavLink>
          <NavLink
            to="/loans"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Loans
          </NavLink>
          <NavLink
            to="/investment"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Investments
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${classes["active"]}` : `${classes["inactive"]}`
            }
          >
            Contact Us
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/investment" element={<Investments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
