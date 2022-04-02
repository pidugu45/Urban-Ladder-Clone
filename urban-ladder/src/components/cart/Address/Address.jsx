import React from "react";
import "./address.css";
import { StepComponent } from "../ItemCom/StepComponent";
import { Shipping } from "./Shipping/Shipping";
import { useNavigate } from "react-router-dom";
import { OrderSummary } from "../OrderSummary/OrderSummary";


export const Address = () => {
  const navigate = useNavigate();
  return (
 
    <div className="TotalAddressPage">
      <StepComponent />
      <div className="addCont">
        <div className="leftShopDetail">
          <Shipping />
          <button
            className="saveCont"
            onClick={() => {
              navigate("/checkout/address/payment");
            }}
          >
            SAVE AND CONTINUE
          </button>
        </div>

        <div className="mid">
          <h1></h1>
        </div>
        <div className="right">
          <OrderSummary />
        </div>
      </div>
    </div>
    
  );
};
