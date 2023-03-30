import React from "react";
import { useNavigate } from "react-router-dom";
import tick from "../../../../assets/Group 11.png";
import classes from "./Form12.module.css"
type Props = {};

const Form12 = (props: Props) => {

    const navigate = useNavigate();

    const contHandler = ()=>{
        navigate('/')
    }

  return (
    <div>
      {/* main container div */}
      <div>
        {/* Heading 1 */}
        <h1 className={classes['header']} >Signing up for Online Banking</h1>
      </div>
      <div>
        {/* para 1 */}
        <p className={classes['para']}>
          Your Novus Online and Mobile Banking Credential has been Successfuly
          Created.
        </p>
      </div>
      <div>
        {/* para 2 */}
        <p>
          Please now use your new Online and Mobile Banking credential and
          password to log into Online Banking.
        </p>
      </div>
      <div>{/* button */}
      <button className={classes['continue']} onClick={contHandler}>Login to Online Banking</button>
      </div>
    </div>
  );
};

export default Form12;
