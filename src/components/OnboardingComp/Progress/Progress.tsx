import React from "react";
import classes from "./Progress.module.css";

type Props = {};

const Progress = (props: Props) => {
  return (
    <div>
      <div>Signing up for Online Banking</div>
      <div className={classes['listCont']}>
        <ul className={classes["progress_bar"]}>
          <li>Identification</li>
          <li>Verification</li>
          <li>Creation</li>
          <li>Success</li>
        </ul>
      </div>
    </div>
  );
};

export default Progress;
