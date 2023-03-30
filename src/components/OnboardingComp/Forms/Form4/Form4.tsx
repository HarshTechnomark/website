import React from "react";
import Button from "../../../../uiComponents/Button/Button";
import vector from "../../../../assets/Vector(1).png";
import classes from "./Form4.module.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Form4 = (props: Props) => {

  const navigate = useNavigate();

  const clkHandler = () =>{
    navigate('/onboarding/form5')
    console.log("first")
  }

  return (
    <div>
      {/* main container div */}
      <div className={classes["selfieCont"]}>
        <p>take a selfie</p>
      </div>
      <div className={classes["selfieCont"]}>
        <div className={classes["logoCont"]}>
          <p>We'll compare it with your document.</p>
          <span>
            <img className={classes["imgg"]} src={vector} alt="info" />
          </span>
        </div>
      </div>
      <div className={classes["selfieCont"]}>
        <p>Face forward and make sure your eyes are</p>
        <p>clearly visible Remove your glasses, if necessary.</p>
      </div>
      <div className={classes["btnCont"]}>
        <form onSubmit={clkHandler}>
        <Button className={classes["butt"]} >Take Selfie</Button>
        </form>
      </div>
    </div>
  );
};

export default Form4;
