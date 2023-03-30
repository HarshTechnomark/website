import React from "react";
import Button from "../../../../uiComponents/Button/Button";
import selfie from "../../../../assets/selfie 1.png"
import classes from "./Form5.module.css"
import { useNavigate } from "react-router-dom";


type Props = {};

const Form5 = (props: Props) => {
const navigate = useNavigate();
  const backHandler =()=>{
    navigate("/onboarding/form4")
  }
  const contHandler =()=>{
    navigate("/onboarding/form10")
  }
  return (
    <div>
      {/* Main form container */}
      <div>
        <p>Take a selfie</p>
      </div>
      <div className={classes['imgCont']}>{/* Place to keep the image */}
        <img className={classes['image']} src={selfie} alt="place to keep camera"  />
      </div>
      <div>
        <p>Make sure your face is visible</p>
      </div>
      <div>
        <div className={classes['upCont']}>
          <button className={classes['gradient']}>Upload</button>
        </div>
        <div className={classes['upCont']}>
        <button className={classes['gradient']}>Retake Selfie</button>
        </div>
      </div>
      <div className={classes['backCont']}>
        {/* back and continue */}
        <div>
          <button className={classes['back']} onClick={backHandler}>Back</button>
        </div>
        <div>
          <button className={classes['continue']}  onClick={contHandler}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Form5;
