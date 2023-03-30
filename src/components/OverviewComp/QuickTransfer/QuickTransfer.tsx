import React from "react";
import classes from "./QuickTransfer.module.css";
import Quick from "../../../assets/quicktransfer.png";
import Arrow from "../../../assets/arrow.png";
import Vector from "../../../assets/Vector.png";
import Card from "../../../uiComponents/Card/Card";
import Button from "../../../uiComponents/Button/Button";

type Props = {};

const QuickTransfer = (props: Props) => {
  return (
    <Card className={classes.quicktransfer}>
      <div className={classes.mainName}>
        <div className={classes.left}>
          <img className={classes.icon} src={Quick} alt="Insurance" />
          <span>Quick Transfer</span>
        </div>
        <span className={classes.more}>view all</span>
      </div>
      <div className={classes.mainName}>
        <div>
          <label htmlFor="Pay From">Pay From *</label>
          <br />
          <select name="from" id="from" className={classes.select}>
            <option value="Select">Select</option>
            <option value="456321">456321</option>
            <option value="789321">789321</option>
            <option value="123987">123987</option>
          </select>
        </div>
        <div>
          <label htmlFor="Pay To">Pay To *</label>
          <br />
          <select name="to" id="to" className={classes.select}>
            <option value="Select">Select</option>
            <option value="456321">456321</option>
            <option value="789321">789321</option>
            <option value="123987">123987</option>
          </select>
        </div>
      </div>
      <span className={classes.amount}>$ 0</span>
      <label className={classes.label} htmlFor="remarks">
        Remarks
      </label>
      <input
        type="text"
        name="remarks"
        id="remarks"
        className={classes.remarks}
      />
      <Button className={classes.btn}>Make a Payment</Button>
      <span className={classes.fields}>
        Fields marked with * are mandatory.
      </span>
      <div className={classes.recent}>
        <img className={classes.icon} src={Arrow} alt="Arrow" />
        <span>Recent Transactions</span>
      </div>
      <div className={classes.coresol}>
        <div className={classes.item}>
          <img className={classes.icon} src={Vector} alt="Vector" />
          <span>13 feb 22</span>
          <span>$0.04</span>
        </div>
        <div className={classes.item}>
          <img className={classes.icon} src={Vector} alt="Vector" />
          <span>13 feb 22</span>
          <span>$0.04</span>
        </div>
        <div className={classes.item}>
          <img className={classes.icon} src={Vector} alt="Vector" />
          <span>13 feb 22</span>
          <span>$0.04</span>
        </div>
        <div className={classes.item}>
          <img className={classes.icon} src={Vector} alt="Vector" />
          <span>13 feb 22</span>
          <span>$0.04</span>
        </div>
      </div>
    </Card>
  );
};

export default QuickTransfer;
