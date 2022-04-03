import React from "react";
import "./shipping.css";
export const Shipping = () => {
  return (
    <div>
      <div className="shippingAddress">
        <p className="shipTitle">Shipping Address </p>

        <div className="mainDetails">
          <div>
            <p>Email Id*</p>
          </div>
          <div>
            <input type="text" placeholder="Email Id" />
          </div>
          <div>
            <p>PIN Code*</p>
          </div>
          <div>
            <input type="Number" placeholder="PIN Code" />
          </div>
          <div>
            <p>Address*</p>
          </div>
          <div>
            <textarea
              padding="10px"
              className="delAddress"
              rows="6"
              cols="25"
              placeholder="Address"
            />
          </div>
          <div>
            <p>First Name*</p>
          </div>
          <div>
            <input type="text" placeholder="First Name*" />
          </div>
          <div>
            <p>Last Name*</p>
          </div>
          <div>
            <input type="text" placeholder="Last Name*" />
          </div>
          <div>
            <p> Mobile*</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile*
"
            />
          </div>
        </div>
      </div>
      <div className="shippingAddress">
        <p className="shipTitle"> Buying for your business?</p>

        <div className="mainDetails">
          <div>
            <p
              style={{
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              GSTIN
            </p>
          </div>
          <div>
            <input type="text" placeholder="Enter GSTIN (optional)" />
          </div>
        </div>
        <p className="noteGST">
          Note: GSTIN cannot be changed after placing order. Please provide a
          valid GSTIN - if you don't, we will not be able to pass the GST credit
          to you. GST Registration state must match either billing or shipping
          state. For any GSTIN belonging to a SEZ, please write to us at
          hello@urbanladder.com before placing the order and we will ensure
          appropriate processing of invoice(s).
        </p>
      </div>
    </div>
  );
};
