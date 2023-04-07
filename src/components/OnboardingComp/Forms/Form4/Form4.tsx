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

  const group ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAadSURBVHgBpVhNbFRVFP7OfTNTW34cgmJITBwNJIoxnRiKbgytJbFgomCiG5Nq2LgxtNWNKNKpkuBGaaNLUOPChTGKqImLVsrOgIt2xwLjLIygQlt0Cu1M5x3Pvefe917/pMTbvr53f9493znnO+eeV8LttCM7O2HMbhDK0rNXKTNbBbgKpnOI43Ec+3kca2x0yxWVchFxoQ/E/dREkWIgWogZTSJiTjZgQyIfaOblHrl+FTEP4d0Ln/4/EEd27UeEE9TkUm4BME2GyA1iM6+nowTBJn0BQRZQnLs1GFpVe84Pimr9uTrDiPZEWVHLQPhnTra1QCwgGKBecEPDGLowsDYQDkDhrIm5HC2QLrDSAwq9Wcv7ScrOO5ziKAIzZ4yDprhIrglQvQuViZmsSLMMhACIYpRzTXlXZtk63pAqZ8TSVpj1v3KAM/NujIxqH9bYdyziKHZX2e7vFF0VxGDHCcMoy8WIVBhF8ieyG8p8RKTjIjPyc0akWLA6rmstOA+G/Vq5C19liC0QcfWK7ni742UR+knevZn42D84i6qhmJcSAFhKCAklOI8h+AneQ67fsCHWxAEcO396sSUMDeaNcdrr5cYoPFtNMpZhPyfPailvORJ12VnE+LFI3/PvO+vkrJ8l6oJbTLCC+PI+9bf3p385bMa6kepnKAgWs7NyRceYjKFUEVr87MGSVYaoJPmnPwUhVjBBGDnf62ZRGEvBwSclWM3I+YmYfKQY96wKeB5wUMqOU7I/osiSBX3qv8rOTqLobK4QBQZwiKsQZSHi3N3LBjhZT0gjOfRPPv0W2rdsx57PX8X1+dmwOt1X1jXrTeJGs8sgNp1kvLZWc1JfazQYZbZH77Vip6Fdn7MWs9o7d3HgigXQ+8g+tN+zHaMvfuQsEtzkEHo55CxrOnPS2U15owCW0T61hXahxE8zF3EIItI1p/YeRu/D+zJx4wkbOvIQOz3khVjkNuJyTnYoOYKRT3TBrlYzTgITPuY8y9LI1PRsXBieeupNAbA3mZ386xL2fHFILeEAsOYYd744S9pOuzVwCTlrdhNC0bsFPvMBxdaNGHvhQ3q/65APtZSE5O8ne1YA8OUhzDRm0yyasybwrrP9vIuLUi4wjxOD6ymYPbJGnx+h9ru2Yfe9ZRRbNtDB0ePObcEkp/a8gZd2ZABcvYTur/ocAK95IK23NmdkCDb3VhSYoGYl5wskyW5mvpYI6N3R46QfHDvuQH/cfZh6H+pZDOB0P19vzKqXfFyFkzacrhxI5EYHd/0abb6jZCPBez8JOX2HqNiyDmPPDsNaI7TPLv6goB5cAuCbAczM/4Msb1Zs1jiNJsVT81UB8djXpljYj9ZIPcJJ4ieEtCCt2LIeY8+cQPvmbSvuOXlNAJwZwLRYLWQR8pbEKo3rTcRTc+PCSJ4URBpiRJRN044rkeaF6UaNu799zQlbBmDqF9i5accBf/oak+zn9hJLcygBIihB67ZUo3Pig3icFzhzRijjyYTkZC+XaGh6oYbu719fBGRy6hKe/E4sIHNurRXgr0QZt5c9YzSyLECXBOdjskWxmmqwY5q2tBXpjsi7y/shm65DoSSPxcJ6/Lj3A5qp1/Dc6FHYuzMvOdovyiNJ6WeLH85wTQDEV25UMXT+/hCiI/x3fZDa2pQwDEoOEUPat8c8dCMbeo+eeSWVZZJsS+zznve6AxYAZZItxbWGXT0EJPVEfRhzzSqEKOHITY5yQqgp1CTR4mNeTU/s3ZlUZOoCm5ytb7UlZaB8MaDWqKKiFbiCsIUnNQfiP+d8Ugl1hBLIH/FarpH6NPjbkccDdRwKZIx8ZvU8Szhif36/kVgBjkahjV++iCe2bpI1j2NjXrNZsilYU69BkiozNYWA0pNWAXBqPZ8iKd0H1+YJs40RKf/fWw7Ctq4tP2EOPfLCVlqfV4uQBwMKhQsnFVMqFP74998a5DOyffbMtn0BwFPzE3jnwoGs2MXVtnOLfBdcnZvgP25qonE+9lVWKtgDVOFBc8rOhXLOKNP58g2w7Atq68KStmo2w9GOYRSiPnpgg3wqmBCxSD52fEvZDy2qQ1jqQcWoyRfUb5LE6s0RmHUVVMZn1g7CWUY+A5gGsamlRHe3AK25JSVgpqxDOO/8b02+nq4IAWcXqrJqABUt71dq/w1iKZjWqATLlTsLyqa2nJ6IFkRdviVuLtjQk7uEeq0+Y/OPLBpeSfvbB5GAkf9PSE1qS0JXkdmCKG1VucTnmLRHASpr///Ev074/XdiPOwUAAAAAElFTkSuQmCC'
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
        <img src={group} alt="sd;fds"/>
        <p>clearly visible Remove your glasses, if necessary.</p>
      </div>
      <div>
        <Webcam width={400} ref={webcamRef} />
      </div>
      <div>
        <button className={classes["selfie"]} onClick={capture}>Take Selfie</button>
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
              className={classes["continue"]}
            >
              Continue
            </button>
            <div>
              {/* <img src={imgSrc} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;
