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
    dob: yup.date().required("please enter a date"),
    address1: yup.string().required(),
    address2: yup.string(),
    country: yup.string().required("please select one of the options"),
    state: yup.string().required(),
    city: yup.string().required(),
    pin: yup
      .string()
      .matches(/^[0-9]{6}$/, " should be 6 digits ")
      .required("Field can't be empty"),
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

  const navigate = useNavigate();

  const form10Handler = async (data: FormData) => {
    let response =  await fetch("http://localhost:3434/creation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: data.title,
      firstName: data.fName,
      lastName: data.lName,
      gender: data.gender,
      dateOfBirth: data.dob,
      address1: data.address1,
      address2: data.address2,
      country: data.country,
      state: data.state,
      city: data.city,
      pin: data.pin
    }),
  })
    let resData = await response.json();
    if(response.status === 200){
      console.log(resData);
      navigate("/onboarding/form11");
    }
  // navigate('/overview')
};

  const backHandler = () => {
    navigate("/onboarding/form5");
  };

  return (
    <div className={classes["mainCont"]}>
      {/* Main container div */}
      <div>
        {/* Main header */}
        <p className={classes["para"]}>
          Tell us about your basic details and account requirements
        </p>
      </div>
      <form onSubmit={handleSubmit(form10Handler)}>
        <div>
          {/* form fields div */}
          <div>
            {/* title div */}
            <label htmlFor="Process">
              Title * <span className={classes.star}>*</span>
            </label>
            <br />
            <select
              id="title"
              placeholder="Please select a option"
              {...register("title")}
              className={classes["selecttt"]}
            >
              <option value="Select" selected disabled>
                {" "}
                Select{" "}
              </option>
              <option value="Mr">Mr </option>
              <option value="Mrs">Mrs</option>
            </select>
            <span className={classes["errorss"]}>{errors.title?.message}</span>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 1  container*/}
            <div>
              {/*  */}
              <label htmlFor="fName">
                First Name <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="Fname"
                placeholder="Enter First Name"
                {...register("fName")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.fName?.message}
              </span>
            </div>
            <div>
              {/*  */}
              <label htmlFor="lName">
                Last Name <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="lName"
                placeholder="Enter your Last Name"
                {...register("lName")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.lName?.message}
              </span>
            </div>
          </div>
          <div className={classes["rowCont"]}>
            <div>
              <label htmlFor="gender">
                Gender <span className={classes.star}>*</span>
              </label>
              <br />
              <select
                id="gender"
                placeholder="Please select a option"
                {...register("gender")}
                className={classes["selectt"]}
              >
                {/* <option value="select" selected disabled>Select </option> */}
                <option value="male">Male </option>
                <option value="female">Female </option>
              </select>
              <span className={classes["errorss"]}>
                {errors.gender?.message}
              </span>
            </div>
            <div>
              <label htmlFor="DOB">
                Date of Birth <span className={classes.star}>*</span>
              </label>
              <br />
              <input type="date"  id="DOB" min="2022-01-02"
                {...register("dob")}
              />
              <br />
              <span className={classes["errorss"]}>{errors.dob?.message}</span>
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 3 */}
            <div>
              {/*  */}
              <label htmlFor="address1">
                Address 1 <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="address1"
                placeholder="Enter Address 1"
                {...register("address1")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.address1?.message}
              </span>
            </div>
            <div>
              {/*  */}
              <label htmlFor="address2">Address 2</label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="address2"
                placeholder="Enter Address 2"
                {...register("address2")}
              />
              <span className={classes["errorss"]}>
                {errors.address2?.message}
              </span>
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 4 */}
            <div>
              <label htmlFor="Country">
                Country <span className={classes.star}>*</span>
              </label>
              <br />
              <select
                id="Country"
                placeholder="Please select a option"
                {...register("country")}
                className={classes["selectt"]}
              >
                <option value="ind">Indiasadfcsdfsd </option>
                <option value="jap">Japan </option>
                <option value="korea">Korea </option>
              </select>
              <br />
              <span className={classes["errorss"]}>
                {errors.country?.message}
              </span>
            </div>
            <div>
              {/*  */}
              <label htmlFor="state">
                State <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="state"
                placeholder="Enter State"
                {...register("state")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.state?.message}
              </span>
            </div>
          </div>
          <div className={classes["rowCont"]}>
            {/* row 5 */}
            <div>
              {/*  */}
              <label htmlFor="city">
                City <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="city"
                placeholder="Enter your City"
                {...register("city")}
              />
              <br />
              <span className={classes["errorss"]}>{errors.city?.message}</span>
            </div>
            <div>
              {/*  */}
              <label htmlFor="zip">
                PIN/ZIP <span className={classes.star}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="zip"
                placeholder="Enter PIN/ZIP"
                {...register("pin")}
              />
              <br />
              <span className={classes["errorss"]}>{errors.pin?.message}</span>
            </div>
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
        </div>
      </form>
    </div>
  );
};

export default Form10;
