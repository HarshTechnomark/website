import React from 'react'
import classes from './MySpending.module.css'
import barchart from "../../../assets/bar-chart.png";
import Card from "../../../uiComponents/Card/Card";
import Chart from '../../../uiComponents/Chart/Chart';

type Props = {}

const MySpending = (props: Props) => {
  return (
    <Card className={classes.spending}>
      <div className={classes.mainName}>
        <img className={classes.icon} src={barchart} alt="Insurance" />
        <span>My Spendings</span>
      </div>
      <div className={classes.spendingData}>
        <Chart />
      </div>
    </Card>
  )
}

export default MySpending