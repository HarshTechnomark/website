import React from "react";
import Card from "../../../uiComponents/Card/Card";
import ManagerPhoto from "../../../assets/manager.png";
import classes from "./Manager.module.css";

type Props = {};

const Manager = (props: Props) => {
  return (
    <Card className={classes.manager}>
      <div className={classes.mainName}>
        <img className={classes.icon} src={ManagerPhoto} alt="Manager" />
        <span>Relationship Manager</span>
      </div>
      <div className={classes.managerData}>
        <p>John Doe</p>
        <p>+91 1023456789</p>
        <p>jonhdoe@gmail.com</p>
      </div>
    </Card>
  );
};

export default Manager;
