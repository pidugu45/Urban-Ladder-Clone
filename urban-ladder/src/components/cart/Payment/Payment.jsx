import React from "react";
import { Link } from "react-router-dom";
import { StepComponent } from "../ItemCom/StepComponent";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import "./payment.css";
export const Payment = () => {
  const razroPay = () => {
    console.log("paymetn done");
  };
  return (
    <div className="paymentContAndDIv">
      <StepComponent />
      <div className="payAndOrder">
        <div>
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
            </div>
          </div>
          {/* <div className="cardsAndEmi redem">
            <p className="selectPay">Redeem Gift Card</p>
            <div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <button>REDEEM GIFT CARD</button>
              </div>
            </div>
          </div> */}

          <div
            style={{
              paddingTop: "100px",
            }}
          >
            <Link to="/checkout/address/payment/paySuccess">
              <button
                padding="10px"
                className="checkOut"
                onClick={() => razroPay()}
              >
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>

        <div className="orderSummart">
          <OrderSummary />
        </div>
      </div>

      {/* <button className="checkOut" onClick={() => razroPay()}>
        PLACE ORDER
      </button> */}
    </div>
  );
};
