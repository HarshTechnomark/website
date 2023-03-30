import React, { Fragment } from "react";
import CreateAccount from "../../components/AccountsComp/CreateAccount/CreateAccount";
import MainAccount from "../../components/AccountsComp/MainAccount/MainAccount";
import City from "../../components/AccountsComp/Middle/City";
import Credit from "../../components/AccountsComp/Middle/Credit";
import Deutsche from "../../components/AccountsComp/Middle/Deutsche";
import Santander from "../../components/AccountsComp/Middle/Santander";
import MySpending from "../../components/AccountsComp/MySpending/MySpending";
import Transaction from "../../components/AccountsComp/Transactions/Transaction";
import classes from "./Accounts.module.css";

type Props = {};

const Accounts = (props: Props) => {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.layout}>
          <MainAccount />
          <CreateAccount />
        </div>
        <div className={classes.layout}>
          <Santander />
          <Deutsche />
          <Credit />
          <City />
        </div>
        <div className={classes.layout}>
          <Transaction />
          <MySpending />
        </div>
      </div>
    </Fragment>
  );
};

export default Accounts;
