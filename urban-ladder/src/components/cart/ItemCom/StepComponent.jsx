import React from "react";
import { Link } from "react-router-dom";
import { RightArrow } from "../iconsComponents/rArrow";
export const StepComponent = ({ color }) => {
  return (
    <div>
      <div className="step">
        <div className="borderBot onewala" style={{}}>
          1. Cart
        </div>

        <div>
          <RightArrow />
        </div>
        <div className="borderBot"> 2. Address</div>
        <div>
          <RightArrow />
        </div>
        <div className="borderBot">3. Payment</div>
      </div>
    </div>
  );
};
