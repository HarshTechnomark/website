import React from "react";
import classes from "./From11.module.css";
import whatsapp from "../../../../assets/Vector(2).png";
import Button from "../../../../uiComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
type Props = {};

const schema = yup
  .object({
    username: yup.string().min(4).max(16).required("Username can't be empty"),
    password: yup.string().min(8).max(16).required(),
    Confpassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Form11 = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/onboarding/form10");
  };
  const form11Handler = () => {
    navigate("/onboarding/form12");
  };

  return (
    <div>
      {/* main container div */}
      <div>
        <div>
          <p>Tell us about your basic details and account requirements</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(form11Handler)}>
            <div>
              <label htmlFor="UID">
                New User ID <span className={classes['star']}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="UID"
                placeholder="Enter user ID"
                {...register("username")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.username?.message}
              </span>
              <br />
              <label htmlFor="password">
                New Password <span className={classes['star']}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="password"
                placeholder="Enter Password"
                {...register("password")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.password?.message}
              </span>

              <br />
              <label htmlFor="conPassword">
                Confirm Password <span className={classes['star']}>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="conPassword"
                placeholder="Confirm Password"
                {...register("Confpassword")}
              />
              <br />
              <span className={classes["errorss"]}>
                {errors.Confpassword?.message}
              </span>
              <br />
              <input type="checkbox" name="whatsapp" id="whatsapp" />
              <label htmlFor="whatsapp">
                I agree to enable whatsApp alerts.{" "}
                <span>
                  {" "}
                  <img src={whatsapp} alt="whatsapp" />
                </span>{" "}
              </label>
              <br />
              <input type="checkbox" name="promotions" id="promotions" />
              <label htmlFor="promotions">
                I agree to enable promotion emails from Novus Bank and partners.
              </label>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form11;
