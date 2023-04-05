import React, { useState } from "react";
import classes from "./Form2.module.css";
import Button from "../../../../uiComponents/Button/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {};

const Form2 = (props: Props) => {
  const [otp, setOtp] = useState("");
  const [verDoc, setVerDoc] = useState("");
  const [verProc, setVerProc] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [imageUrl, setImageUrl] = useState<any>('');
  const [verDocErr, setVerDocErr] = useState("");
  const [verProcErr, setVerProcErr] = useState("");
  const [fileErr, setFileErr] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
  });
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/onboarding/form1");
  };

  const verDocHandler = (e: any) => {
    if(e.target.value === ""){
      setVerDocErr("Please select a document type")
    }else{
      setVerDocErr("");
      setVerDoc(e.target.value);
    }
  }

  const otpHandler = (e: any) => { 
    if (e.target.value === "") {
      setOtpErr("otp can't be empty field");
    } else if (e.target.value.length !== 6) {
      setOtpErr("otp must 6 digits");
    } else {
      setOtpErr(""); 
      setOtp(e.target.value);
    }
  }
  const verProcHandler = (e: any) => {
    if(e.target.value === ""){
      setVerProcErr("Please select the process type")
    }else{
      setVerProcErr("")
      setVerProc(e.target.value);
    }
  }
  const fileHandler = (e: any) => {
    if(e.target.files === ""){
      return(

        setFileErr("Please select a file")
      )
    }else{
      setFileErr("")
      const file1 = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file1);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    }
  }
  console.log(otp, verDoc, verProc ,imageUrl);
  const Form2Handler = async (e : any) => {
    if(otp === ""){
      setOtpErr("otp can't be empty field")
    }
    if(verDoc === ""){
      setVerDocErr("Please select a document type")
    }
    if(verProc === ""){
      setVerProcErr("Please select the process type")
    }
    if(imageUrl == null){
      setFileErr("Please select a file")
    }
    else{
      let response = await fetch("http://localhost:3434/verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            otpEntered : otp,
            imageData1 : imageUrl
        }),
      });
      let resData = await response.json();
      if (response.status === 200) {
        console.log(resData);
        navigate("/onboarding/form3");
      }
    };
  }
  return (
    <div>
      {/* Main container div */}
      <div>
        {/* Heading section */}
        <p className={classes["para"]}>
          Tell us about your basic details and account requirements
        </p>
      </div>
      <form onSubmit={handleSubmit(Form2Handler)} encType="multipart/form-data">
        {/* Form container */}
        <div>
          {/* Contains  Input fields  Verification process choice */}
          <label htmlFor="Process">
            Choose a verification process{" "}
            <span className={classes.star}>*</span>
          </label>
          <br />
          <select
            id="verifyProcess"
            placeholder="Please select a option"
            // {...register("verifyProcess")}
            className={classes["selectt"]}
            onChange={verProcHandler}
          >
            <option selected disabled>
              Select
            </option>
            <option value="OTP">OTP on your mobile number </option>
            <option value="Email">OTP on your Email address </option>
          </select>
          <span className={classes["errorss"]}>
            {verProcErr}
          </span>
        </div>
        <div>
          {/*  */}
          <label htmlFor="otp">
            Enter your OTP <span className={classes.star}>*</span>
          </label>
          <br />
          <input
            className={classes["input-tag"]}
            type="number"
            id="otp"
            placeholder="Enter your OTP"
            // {...register("otp")}
            onChange={otpHandler}
          />
          <span className={classes["errorss"]}>{otpErr}</span>
        </div>
        <div>
          {/* Contains  Input fields  enter the otp vala field */}
          <label htmlFor="verify">How would you like to verify</label>
          <span className={classes.star}>*</span>
          <br />
          <select
            // {...register("verifyDoc")}
            id="verifyDoc"
            className={classes["selectt"]}
            onChange={verDocHandler}
          >
            <option value="Passport" defaultChecked>
              Passport
            </option>
            <option value="aadhar">aadhar </option>
            <option value="asdaksdhasd">Passpdsfsdfdsrt </option>
          </select>
          <span className={classes["errorss"]}>
            {verDocErr}
          </span>
        </div>
        <div>
          {/* Contains  Input fields  input document field*/}
          <label htmlFor="document">
            Attach your identity documents{" "}
            <span className={classes.star}>*</span>
          </label>
          <br />
          <input
            type="file"
            id="file"
            onChange={fileHandler}
            // {...register("file")}
          />
          <span className={classes["errorss"]}>{fileErr}</span>
        </div>
        <div>
          <p className={classes["compulsory"]}>
            Fields marked with * are mandatory
          </p>
        </div>
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
            <Button type="submit" className={classes["continue"]}>
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;
