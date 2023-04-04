import React from "react";
import Button from "../../../../uiComponents/Button/Button";
import classes from "./Form1.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RadioGroup } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import Form2 from "../Form2/Form2";
import { ToastContainer, toast } from "react-toastify";



type Props = {};

// const initialvalue ={
//   mobileNumber : '',
//   email : '',
//   acctype : ''
// }

const schema = yup
  .object({
    mobileNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile number should be 10 digits ")
      .required("Field can't be empty"),
    email: yup.string().email().required(),
    acctype: yup.string().required("please select one of the options"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Form1 = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  // const Form1Handler = (data : FormData) =>{
  //   console.log(data);
  // }

  const Form1Handler = async (data: FormData) => {
    let response =  await fetch("http://localhost:3434/identification", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      accountType: data.acctype,
      contactNumber: data.mobileNumber,
      emailId :data.email,
      // expiresInMins: 60, // optional
    }),
   
  })
    let resData = await response.json();
    if(response.status === 200){
      navigate("/onboarding/form2");
      console.log(resData);
    }
    else{
      toast.error(resData.message)
    }
  // navigate('/overview')
};

  // const radioOptions = [
  //   { label: "Self", value: "Self" },
  //   { label: "business", value: "business" },
  //   { label: "Family", value: "Family" },
  // ];


  return (
    <div className={classes['mainCont']}>
      {/* Main container div */}
      <div>
        {/* Heading section */}
        <h1 className={classes["heading"]}>Welcome - let's get started</h1>
        <p className={classes["para"]}>
          Tell us about your basic details and account requirements
        </p>
      </div>
      <form
        onSubmit={handleSubmit(Form1Handler)}
      >
        {/* Form container */}
        <p>Whom would you like to open an account ? <span className={classes.star}>*</span></p>
        <div className={classes["radio-ch"]}>
          {/* Radio group */}
          
          <div>
            <input type="radio"  id="Self" value="Self" {...register("acctype")} defaultChecked></input>
            <label htmlFor="Self">Self</label>
          </div>
          <div>
            <input type="radio"  id="Business" {...register("acctype")} value="Business"></input>
            <label htmlFor="Business">Business</label>
          </div>
          <div>
            <input type="radio"  id="Family" {...register("acctype")} value="Family"></input>
            <label htmlFor="Family">Family</label>
          </div>
          <span className={classes["errorss"]}>{errors.acctype?.message}</span>
        </div>
        <div className={classes["signform-container"]}>
          {/* Main form container where we giv padding from the sign in container */}
          <div>
            {/* Username field and input component */}
            <p>
              Mobile number <span className={classes.star}> *</span>
            </p>
            <input
              className={classes["input-tag"]}
              type="number"
              placeholder="Enter your number"
              {...register("mobileNumber")}
              // value={`${"ksd"}`}
            />
            <span className={classes["errorss"]}>
              {errors.mobileNumber?.message}
            </span>
          </div>
          {/* <input
              className={classes["input-tag"]}
              type="text"
              placeholder="Enter Username"
              {...register("username")}
            />
            <span className={classes['errorss']}>{errors.username?.message}</span> */}
          <div className={classes["inputs"]}>
            {/* Password  field and input component */}
            <p>
              Your Email Address<span className={classes.star}> *</span>
            </p>
            <input
              className={classes["input-tag"]}
              type="text"
              placeholder="Enter Email address"
              {...register("email")}
            />
            <span className={classes["errorss"]}>{errors.email?.message}</span>
          </div>
        </div>
        <div>
          {/* field marked with* are compulsory */}
          <p className={classes["compulsory"]}>
            Fields marked with * are mandatory
          </p>
        </div>
        <div className={classes["continue-cont"]}>
          <Button className={classes["continue"]} >Continue</Button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Form1;


// {
//   "accountType":"self",
//   "contactNumber":"1234563800",
//   "emailId":"abcd@gmail.com"
// }