import React from "react";
import classes from "./Footer.module.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={classes["mainDiv"]}>
      {/* Main wrapping div */}
      <div>
        <p className={classes['p1']}>© All Rights Reserved. HCL Technologies</p>
      </div>
      <div>
        <p className={classes['p2']}>
          Privacy Policy | Terms of Use | Cookies Policy | Legal Statement |
          Careers | Corporate Social Responsibility
        </p>
      </div>
    </div>
  );
};

export default Footer;
