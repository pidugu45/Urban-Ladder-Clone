import React from "react";
import "./itemCom.css";
import { Money } from "../iconsComponents/dollar";
import { Cross } from "../iconsComponents/cross";
export const ItemComp = ({ data, fn }) => {
  // let today = new Date().toLocaleDateString();
  // console.log("data", data);
  var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate()+7;
var year = dateObj.getUTCFullYear();

 const newdate = day + "/" + month + "/" + year;
  return (
    <div>
      {/* now component div */}
      {data?.map((elem, index) => {
        return (
          <div key="index" className="cart-item">
            <div className="img-title">
              <div className="banner">
                <img className="dp" src={elem.image} alt="logoofproduct" />
              </div>
              <div className="title">
                <p className="name">
                  {elem.name}
                </p>
                <p className="colour"> Colour: Lapis Blue</p>

                <div>
                  <p className="descript">
                    <span>
                      <Money fill="black" />
                    </span>{" "}
                    &nbsp; We are committed to giving you the best shopping
                    experience with on-time deliveries and quality products. We
                    provide swift installation within 48 hours from the day of
                    delivery. Happy shopping!
                  </p>
                </div>
              </div>
            </div>

            <div className="del-date">
              <p>{newdate}</p>
            </div>

            <div className="qty">
              <select name="cars" id="cars" className="qty-box">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            </div>

            <div className="tprice">
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  fn(index);
                }}
              >
                <p>
                  ₹ {elem.MRP_price} &nbsp; &nbsp;
                  <Cross fill="#ed7745" />
                </p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
