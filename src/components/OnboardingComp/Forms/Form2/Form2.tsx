import React from "react";
import classes from "./Form2.module.css";
import Button from "../../../../uiComponents/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type Props = {};

// Yup.object().shape({
//   file: Yup.object().shape({
//     name: Yup.string().required()
// }).required('File required')

const schema = yup
  .object({
    otp: yup
      .string()
      .matches(/^[0-9]{6}$/, "OTP should be 6 digits ")
      .required("Field can't be empty"),
    verifyProcess: yup.string().required("please select one of the options"),
    verifyDoc: yup.string().required("please select one of the options"),
    //   file : yup.object().shape({
    //     name: yup.string().required("File required")
    // })

    file : yup.string().required("File is required"),
    

  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Form2 = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const backHandler =()=>{
    navigate('/onboarding/form1')
  }

  const Form2Handler = (data: FormData) => {
    navigate("/onboarding/form3");
    console.log(data);
  };
  return (
    <div>
      {/* Main container div */}
      <div>
        {/* Heading section */}
        <p className={classes["para"]}>
          Tell us about your basic details and account requirements
        </p>
      </div>
      <form onSubmit={handleSubmit(Form2Handler)}>
        {/* Form container */}
        <div>
          {/* Contains  Input fields  Verification process choice */}
          <label htmlFor="Process">
            Choose a verification process <span className={classes.star}>*</span>
          </label>
          <br />
          <select
            id="verifyProcess"
            placeholder="Please select a option"
            {...register("verifyProcess")}
            className={classes["selectt"]}
          >
            <option selected disabled >Select </option>
            <option value="OTP">OTP on your mobile number </option>
            <option value="Email">OTP on your Email address </option>
            <option value="Email">OTP on your Email address </option>
          </select>
          <span className={classes["errorss"]}>
            {errors.verifyProcess?.message}
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
            {...register("otp")}
          />
          <span className={classes["errorss"]}>{errors.otp?.message}</span>
        </div>
        <div>
          {/* Contains  Input fields  enter the otp vala field */}
          <label htmlFor="verify">How would you like to verify</label><span className={classes.star}>*</span>
          <br />
          <select
            {...register("verifyDoc")}
            id="verifyDoc"
            className={classes["selectt"]}
          >
            <option value="Passport" defaultChecked>
              Passport{" "}
            </option>
            <option value="Passport">aadhar </option>
            <option value="Passport">Passpdsfsdfdsrt </option>
          </select>
          <span className={classes["errorss"]}>
            {errors.verifyDoc?.message}
          </span>
        </div>
        <div>
          {/* Contains  Input fields  input document field*/}
          <label htmlFor="document">
            Attach your identity documents <span className={classes.star}>*</span>
          </label>
          <br />
          <input required type="file" id="file" {...register("file")} />
          <span className={classes["errorss"]}>{errors.file?.message}</span>
        </div>
        <div>
          <p className={classes["compulsory"]}>
            Fields marked with * are mandatory
          </p>
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
      </form>
    </div>
  );
};

export default Form2;
