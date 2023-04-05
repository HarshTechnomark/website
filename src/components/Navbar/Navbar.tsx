import React from "react";
import classes from "./Navbar.module.css";
import { Bell } from "react-feather";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
// import Logo from "../../assets/logo.svg";
import Logo from "../../assets/logo-white 1.png"

const Navbar = (props: any) => {

  const navigate = useNavigate();

  const logOutHandler = () =>{
    localStorage.clear();
    navigate('/');
  }


  return (
    <div className={classes.mainContent}>
      <nav className={classes.nav}>
        <img src={Logo} className={classes.logo} alt="Logo" />
        {/* <h2 className={classes.logo}>NOVAS BANK</h2> */}
        <div className={classes.user}>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
            alt="Person"
          />
          <div className={classes.username}>
            <h4>Naveen</h4>
            <div className={classes['logout']} onClick={logOutHandler}>Logout</div>
          </div>
          <Bell className={classes.icon} />
        </div>
        <NavLink
          to="/navbar/overview"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/navbar/accounts"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Accounts
        </NavLink>
        <NavLink
          to="/navbar/payments"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Payments
        </NavLink>
        <NavLink
          to="/navbar/loans"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Loans
        </NavLink>
        <NavLink
          to="/navbar/investment"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Investments
        </NavLink>
        <NavLink
          to="/navbar/contact"
          className={({ isActive }) =>
            isActive ? `${classes["active"]}` : `${classes["inactive"]}`
          }
        >
          Contact Us
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
