import React from "react";
import { Link } from "react-router-dom";
import { StepComponent } from "../ItemCom/StepComponent";
import "./success.css";
export const PaySucces = () => {
  return (
    <section class="login-main-wrapper">
      <StepComponent />
      <div class="main-container">
        <div class="login-process">
          <div class="login-main-container">
            <div class="thankyou-wrapper">
              <h1>
                <img
                  src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                  alt="thanks"
                />
              </h1>
              <p>for Shopping..... </p>
              <Link to="/">Back to home</Link>
              <div class="clr"></div>
            </div>
            <div class="clr"></div>
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </section>
  );
};
