import React from 'react'
import Card from "../../../uiComponents/Card/Card";
import classes from "../Comman.module.css";
import credit from "../../../assets/credit 1.png";

type Props = {}

const Credit = (props: Props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.first}>
        <div className={classes.left}>
          <span>Credit Agricole</span>
          <span>83 XXXX XX 32</span>
        </div>
        <img className={classes.icon} src={credit} alt="credit" />
      </div>
      <p>1028.01 $</p>
    </Card>
  )
}

export default Credit