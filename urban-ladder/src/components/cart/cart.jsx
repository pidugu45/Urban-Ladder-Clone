import { useEffect, useState } from "react";
import "./cart.css";
import { ItemComp } from "./ItemCom/ItemComp";
import { useNavigate } from "react-router-dom";
import { StepComponent } from "./ItemCom/StepComponent";

export const Cart = () => {
  let [cart, setCart] = useState(null);
  let [call, setCall] = useState(false);
  const [apply, setApply] = useState(false);
  let [tPrice, settPrice] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart_section"));
    setCart(data);
  }, []);

  useEffect(() => {
    const sumall = cart
      ?.map((item) => item.MRP_price)
      .reduce((prev, curr) => prev + curr, 0);
    settPrice(sumall);
  }, [cart, call]);
  localStorage.setItem("totalPr", JSON.stringify(tPrice));

  const remove = (index) => {
    setCall(!call);
    cart.splice(index, 1);

    localStorage.setItem("totalPr", JSON.stringify(tPrice));
    localStorage.setItem("cart_section", JSON.stringify(cart));
  };
  let pay = [
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/VISA-verified-gray-071bc1fbd8561b3bf044e3ac3037eca5.png",
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/mastercard-gray-ada104aa6eb18055113b049ae1994f11.png",
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/norton-secured-gray-9525120b9e171ac18de6eb9dd6143106.png",
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/rupay-gray-d3669859faa810034818f90a821ccbf2.png",
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/Bhim-upi-gray-52fb6904f152e87013c3da2352997f90.png",
    "https://www.ulcdn.net/assets/spree/frontend/paymentMode/amex-safekey-gray-66917d54dd2e4f3ce9ac62fd8f6a9e6e.png",
  ];

  return (
    <div className="cart">
      <StepComponent />

      <div className="checkout-btn-cont">
        <div>
          <p
            style={{
              cursor: "pointer",
            }}
            className="continue"
            onClick={() => {
              navigate("/");
            }}
          >
            Conitnue Shopping
          </p>
        </div>
        <div>
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/checkout/address");
            }}
            className="checkOut "
          >
            CHECKOUT
          </button>
        </div>
      </div>

      <div className="noCost">
        <ul className="tandc">
          <li>
            {" "}
            No Cost EMIs on Credit Cards{" "}
            <a href="$" className="knowMore">
              Know More !
            </a>{" "}
          </li>
          <li>
            {" "}
            Purchase a mattress along with bed & get extra 10%OFF upto Rs.1000.
            Use code: HAPPYSLEEP
          </li>
          <li>
            Due to high demand, our deals may change anytime during sale. Grab
            all you want before it's gone!
          </li>
        </ul>
      </div>

      <div className="itemHead">
        <div>PRODUCTS</div>
        <div>DELIVERY DATE</div>
        <div>QUANTITY</div>
        <div>TOTAL</div>
      </div>
      <hr />
      <div>
        <ItemComp data={cart} fn={remove} />
      </div>

      <div className="pay-cont">
        <div className="payImg">
          {pay.map((ele) => {
            return (
              <div className="payLogo">
                <img className="payLogoImg" src={ele} alt="" />
              </div>
            );
          })}
        </div>
        <div className="apply-coupon">
          <span className="apply-cont">
            <p
              className="voucher"
              onClick={() => {
                setApply(!apply);
              }}
            >
              Apply Coupon/Vouchers
            </p>
            {apply ? (
              <h1>
                <div className="hiddenCont">
                  <input type="text" placeholder="Coupon Code" />

                  <button>APPLY</button>
                </div>
              </h1>
            ) : null}
          </span>

          <div className="paySummary">
            <div className="priceDatacont">
              <div>Cart Total </div>
              <div>₹{tPrice}</div>
            </div>
            <div className="priceDatacont">
              <div>Discounts </div>
              <div>-₹{0}</div>
            </div>
            <div className="priceDatacont">
              <div>Delivery Charges </div>
              <div
                style={{
                  color: "#359d40",
                  fontWeight: "bold",
                }}
              >
                FREE
              </div>
            </div>
            <div className="priceDatacont">
              <div>Total Payable Amount </div>
              <div>₹{tPrice}</div>
            </div>
            <div className="priceDatacont">
              <div className="makeBold">Booking Amount (Pay Now) </div>

              <div className="makeBold">₹{tPrice}</div>
            </div>

            <div className="checkout-btn-cont">
              <div>
                <p
                  style={{
                    cursor: "pointer",
                  }}
                  className="continue"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Conitnue Shopping
                </p>
              </div>
              <div>
                <button
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/checkout/address");
                  }}
                  className="checkOut"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
