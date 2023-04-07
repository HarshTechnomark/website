import React from "react";
import Button from "../../../../uiComponents/Button/Button";
import selfie from "../../../../assets/selfie 1.png"
import classes from "./Form5.module.css"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


type Props = {};

const Form5 = (props: Props) => {
  const navigate = useNavigate();
  const backHandler =()=>{
    localStorage.removeItem('selfie');
    navigate("/onboarding/form4")
  }
  const contHandler =()=>{
    navigate("/onboarding/form10")
  }
  
  const selfie : any= localStorage.getItem('selfie');
  console.log(selfie)
  const uploadHandler = async (e : any) => {
    if(selfie == null){
     toast.error("image can't be empty");
    }
    else{
      let response = await fetch("http://localhost:3434/verificationSelfieUpload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            imageData2 : selfie
        }),
      });
      let resData = await response.json();
      if (response.status === 200) {
        console.log(resData);
        navigate("/onboarding/form10");
      }
    };
  }

  return (
    <div>
      {/* Main form container */}
      <div>
        <p>Take a selfie</p>
      </div>
      <div className={classes['imgCont']}>{/* Place to keep the image */}
        <img className={classes['image']} src={selfie} alt="Photo"  />
      </div>
      <div>
        <p>Make sure your face is visible</p>
      </div>
      <div>
        <div className={classes['upCont']}>
          <button onClick={uploadHandler} className={classes['gradient']}>Upload</button>
        </div>
        <div className={classes['upCont']}>
        <button  onClick={backHandler} className={classes['gradient']}>Retake Selfie</button>
        </div>
      </div>
      <div className={classes['backCont']}>
        {/* back and continue */}
        <div>
          <button className={classes['continue']}  onClick={contHandler}>Continue</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Form5;
