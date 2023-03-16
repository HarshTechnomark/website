import React, { Fragment } from "react";
import AccountSummary from "../../components/OverviewComp/AccountSummary/AccountSummary";
import AvailableBalance from "../../components/OverviewComp/AvailableBalance/AvailableBalance";
import Investments from "../../components/OverviewComp/Investments/Investments";
import Manager from "../../components/OverviewComp/Manager/Manager";
import MyInsurance from "../../components/OverviewComp/MyInsurance/MyInsurance";
import MySpending from "../../components/OverviewComp/MySpending/MySpending";
import QuickLinks from "../../components/OverviewComp/QuickLinks/QuickLinks";
import QuickTransfer from "../../components/OverviewComp/QuickTransfer/QuickTransfer";
import Transaction from "../../components/OverviewComp/Transactions/Transaction";
import classes from "./Overview.module.css";

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

type Props = {};

const Overview = (props: Props) => {
  return (
    <Fragment>
      {/* <Manager /> */}
      {/* <MyInsurance /> */}
      {/* <Investments /> */}
      {/* <MySpending /> */}
      {/* <Transaction /> */}

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <AvailableBalance />
          </Grid>
          <Grid item lg={4}>
            <AccountSummary />
          </Grid>
          <Grid item lg={4}>
            <QuickLinks />
          </Grid>
          <Grid item lg={4}>
            <QuickTransfer />
          </Grid>
        </Grid>
      </Box> */}
      <div className={classes.layout1}>
        <div className={classes.columnn1}>
          <AvailableBalance />
        </div>
        <div className={classes.columnn2}>
          <QuickTransfer />
        </div>
      </div>
      <div className={classes.layout2}>
        <div className={classes.columnn3}>
          <AccountSummary />
        </div>
        <div className={classes.columnn4}>
          <Transaction />
        </div>
        <div className={classes.columnn5}>
          <MySpending />
        </div>
      </div>
      <div className={classes.layout3}>
        <div className={classes.columnn6}>
          <QuickLinks />
        </div>
        <div className={classes.columnn7}>
          <Manager />
        </div>
        <div className={classes.columnn8}>
          <MyInsurance />
        </div>
        <div className={classes.columnn9}>
          <Investments />
        </div>
      </div>
    </Fragment>
  );
};

export default Overview;
