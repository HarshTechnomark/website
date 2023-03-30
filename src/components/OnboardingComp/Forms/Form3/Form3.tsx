import React from "react";
import classes from "./Form3.module.css";
import Selfie from "../../../../assets/Group 9.svg";
import Video from "../../../../assets/Group 10.svg";
import Button from "../../../../uiComponents/Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Form3 = (props: Props) => {
  
  const navigate = useNavigate();    
  const backHandler=()=>{
    navigate('/onboarding/form2')
  }
  const selfiehandler =()=>{
    navigate('/onboarding/form4')
  }
  return (
    <div>
      Form3
      {/* Main form div */}
      <div>
        <p className={classes["heading"]}>select an option</p>
      </div>
      <div className={classes["selfieCont"]}>
        {/* contains selfie */}
        <div>
          {/* selfir text */}
          <p>Take a selfie</p>
        </div>
        <div className={classes["Image"]} onClick={selfiehandler}>
          {/* selfie image */}
          <img src={Selfie} alt="selfie" />
        </div>
      </div>
      <div  className={classes['or']}>
      <p className={classes["hr-lines"]}>OR </p>

      </div>
      <div className={classes["selfieCont"]}>
        {/* contains selfie */}
        <div>
          {/* video text */}
          <p className={classes["text"]}>Record a video</p>
        </div>
        <div className={classes["Image"]}>
          {/* video image */}
          <img src={Selfie} alt="Video" />
        </div>
        <div className={classes["btn-cont"]}>
          <div>
            <button type="button" onClick={backHandler} className={classes["back"]}>
              Back
            </button>
          </div>
          <div className={classes["continue-cont"]}>
            <Button type="submit" className={classes["continue"]}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
