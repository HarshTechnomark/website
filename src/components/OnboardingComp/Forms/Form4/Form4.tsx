import React, { useRef, useState } from "react";
import Button from "../../../../uiComponents/Button/Button";
import vector from "../../../../assets/Vector(1).png";
import classes from "./Form4.module.css";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

type Props = {};

const Form4 = (props: Props) => {
  const [imgSrc, setImgSrc] = React.useState<any>();

  const navigate = useNavigate();
  const webcamRef = useRef<any>();


  const clkHandler = () => {
    navigate("/onboarding/form5");
    console.log("first");
  };
  const backHandler = () => {
    navigate("/onboarding/form3");
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  console.log(imgSrc);
  localStorage.setItem("selfie" , imgSrc);
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
      <div>
        <Webcam width={400} ref={webcamRef} />
      </div>
      <div>
        <button onClick={capture}>Take Selfie</button>
      </div>
      <div className={classes["btnCont"]}>
        <div className={classes["btn-cont"]}>
          <div>
            <button
              type="button"
              onClick={backHandler}
              className={classes["back"]}
            >
              Back
            </button>
          </div>
          <div className={classes["continue-cont"]}>
            <button
              type="button"
              onClick={clkHandler}
              className={classes["back"]}
            >
              Continue
            </button>
            <div>
              <img src={imgSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;
