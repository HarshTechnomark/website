import React from "react";
import classes from "./Form10.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../uiComponents/Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const schema = yup
  .object({
    title: yup.string().required("please select one of the options"),
    fName: yup.string().required("please enter your name"),
    lName: yup.string().required("please enter your name"),
    gender: yup.string().required("please select one of the options"),

  })
  .required();
  type FormData = yup.InferType<typeof schema>;

const Form10 = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });


  const navigate =useNavigate();

  const form10Handler = () =>{
    navigate('/onboarding/form11')
  }

  const backHandler =()=>{
    navigate('/onboarding/form5')
  }

  return (
    <div>
      {/* Main container div */}
      <div>
        {/* Main header */}
        <p className={classes["para"]}>
          Tell us about your basic details and account requirements
        </p>
      </div>
      <form onSubmit={form10Handler}>
        <div>
          {/* form fields div */}
          <div>
            {/* title div */}
            <label htmlFor="Process">
              Title * <span>*</span>
            </label>
            <br />
            <select
              id="title"
              placeholder="Please select a option"
              {...register("title")}
              className={classes["selecttt"]}
            >
              <option value="Select" selected disabled> Select </option>
              <option value="Mr">Mr </option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 1  container*/}
            <div>
              {/*  */}
              <label htmlFor="fName">
                First Name <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="Fname"
                placeholder="Enter First Name"
                {...register('fName')}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
            <div>
              {/*  */}
              <label htmlFor="lName">
                Last Name <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="lName"
                placeholder="Enter your Last Name"
                {...register("lName")}
              />
              <span className={classes['errorss']}>{errors.lName?.message}</span>
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 2 */}
            <div>
              <label htmlFor="gender">
                Gender <span>*</span>
              </label>
              <br />
              <select
                id="gender"
                placeholder="Please select a option"
                {...register("gender")}
                className={classes["selectt"]}
              >
                <option value="select" selected disabled>Select </option>
                <option value="male">Male </option>
                <option value="female">Female </option>
              </select>
            </div>
            <div>
              <label htmlFor="Process">
                Date of Birth <span>*</span>
              </label>
              <br />
              <input type="date" name="DOB" id="DOB" />
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 3 */}
            <div>
              {/*  */}
              <label htmlFor="address1">
                Address 1 <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="address1"
                placeholder="Enter Address 1"
                // {...register("otp")}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
            <div>
              {/*  */}
              <label htmlFor="address2">
                Address 2 
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="address2"
                placeholder="Enter Address 2"
                // {...register("otp")}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 4 */}
            <div>
              <label htmlFor="Country">
                Country <span>*</span>
              </label>
              <br />
              <select
                id="Country"
                placeholder="Please select a option"
                // {...register("verifyProcess")}
                className={classes["selectt"]}
              >
                <option value="ind">Indiasadfcsdfsd </option>
                <option value="jap">Japan </option>
                <option value="korea">Korea </option>
              </select>
            </div>
            <div >
              {/*  */}
              <label htmlFor="state">
                State <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="state"
                placeholder="Enter State"
                // {...register("otp")}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 5 */}
            <div>
              {/*  */}
              <label htmlFor="city">
               City <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="city"
                placeholder="Enter your City"
                // {...register("otp")}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
            <div>
              {/*  */}
              <label htmlFor="zip">
                PIN/ZIP <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="zip"
                placeholder="Enter PIN/ZIP"
                // {...register("otp")}
              />
              {/* <span className={classes['errorss']}>{errors.otp?.message}</span> */}
            </div>
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
      </form>
    </div>
  );
};

export default Form10;
