import React from "react";
import Button from "../../../uiComponents/Button/Button";
import Card from "../../../uiComponents/Card/Card";
import classes from "./MainAccount.module.css";

type Props = {};

const MainAccount = (props: Props) => {
  return (
    <Card className={classes.mainAccount}>
      <div className={classes.top}>
        <span>Main Account</span>
        <span>Available Funds</span>
      </div>
      <div className={classes.middle}>
        <div className={classes.left}>
          <span>Novas Bank Account</span>
          <span>83 4222 4222 4222 4222</span>
        </div>
        <span className={classes.right}>10000.20$</span>
      </div>
      <div className={classes.bottom}>
        <Button className={classes.btn}>Tranfer Funds</Button>
        <Button className={classes.btn}>Link Accounts</Button>
      </div>
    </Card>
  );
};

export default MainAccount;
