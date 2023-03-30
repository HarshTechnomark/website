import React from "react";
import classes from "./From11.module.css";
import whatsapp from "../../../../assets/Vector(2).png";
import Button from "../../../../uiComponents/Button/Button";
import { useNavigate } from "react-router-dom";
type Props = {};

const Form11 = (props: Props) => {

    const navigate =useNavigate();
    const backHandler =()=>{
        navigate('/onboarding/form10')
      }
      const form11Handler =()=>{
        navigate('/onboarding/form12')
      }
  return (
    <div>
      {/* main container div */}
      <div>
        <div>
          <p>Tell us about your basic details and account requirements</p>
        </div>
        <div>
          <form onSubmit={form11Handler}>
            <div>
              <label htmlFor="UID">
                New User ID <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="UID"
                placeholder="Enter user ID"
                //   {...register("otp")}
              />
              <br />
              <label htmlFor="password">
                New Password <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="password"
                placeholder="Enter Password"
                //   {...register("otp")}
              />
              <br />
              <label htmlFor="conPassword">
                Confirm Password <span>*</span>
              </label>
              <br />
              <input
                className={classes["input-tag"]}
                type="text"
                id="conPassword"
                placeholder="Confirm Password"
                //   {...register("otp")}
              />
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
