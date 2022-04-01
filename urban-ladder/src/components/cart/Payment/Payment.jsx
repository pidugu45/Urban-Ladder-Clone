import React from "react";
import { StepComponent } from "../ItemCom/StepComponent";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import "./payment.css";
export const Payment = () => {
  const razroPay = () => {
    console.log("paymetn done");
  };
  return (
    <div className="paymentContAndDIv">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, animi
        dolor! Illo dolore quis delectus assumenda adipisci corporis error,
        dolorum id? Doloribus ipsum voluptas natus adipisci! Ad doloribus
        voluptate numquam quos vitae? Dolores, voluptas aspernatur! Quibusdam,
        beatae! Atque amet culpa quod labore at pariatur molestiae eos
        exercitationem repudiandae. Ex, earum?
      </div>
      <StepComponent />
      <div className="payAndOrder">
        <div className="cardsAndEmi">
          <p className="selectPay">Select payment method</p>
          <div>
            <p className="creditHead">
              {" "}
              <input type="radio" checked /> Cards & EMIs (Credit/Debit) / UPI
            </p>
            <p className="subHeadPay">
              Card EMI approval is at sole discretion of issuing Bank.
            </p>
            {/* <div className="logoDiv">
              <div className="emi-logo finLogo">
                <div className="sqr">
                  <p className="EMI">EMI</p>
                  <p className="FINANCE">FINANCE</p>
                </div>
              </div>
              <div>
                <p>
                  EMIs from ₹843
                  <span className="knowMore">Know More</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="orderSummart">
          <OrderSummary />
        </div>
        <button className="checkOut " onClick={() => razroPay()}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};
