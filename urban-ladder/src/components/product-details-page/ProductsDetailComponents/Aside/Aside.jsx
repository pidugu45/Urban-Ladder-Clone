import React from "react";
import "./Aside.css";
// import compare from "./icons/compare.svg";
import SVGComponent from "../iconsComponents/compare";

import SVGComponentHeart from "../iconsComponents/heart";
import { Button } from "../SmallParts/Button";

import { SubTitle } from "../SmallParts/SubTitle";
import { ShieldIcon } from "../iconsComponents/Shield";
import { Location } from "../iconsComponents/location";
export const Aside = ({ title, disc, emi, MRP_price }) => {
  return (
    <div className="aside-cont">
      <div className="product-action">
        <div className="wishlist">
          <div className="icon-div">
            <SVGComponentHeart fill={"#ed7745"} /> &nbsp;
          </div>
          <div className="title-div">Add to Wishlist &nbsp;</div>
        </div>

        <div className="compare">
          <div className="icon-div">
            <SVGComponent fill={"#ed7745"} />
          </div>
          <div className="title-div">Add to Compare</div>
          &nbsp;
        </div>
      </div>

      <div className="sale-cont">
        <img
          src="https://www.ulcdn.net/media/sale/product-page-tag-bg/unnamed.jpg?1572547689"
          className="sale"
          alt=""
        />
        <p className="off">{disc} % OFF</p>
        <p className="note">
          * All discounts are dynamic and can change at any time.
        </p>
      </div>

      <div className="variant-option-cont">
        <div className="finish">
          <SubTitle className="subtitle">FINISH</SubTitle>
          <Button>Californian Walnut</Button>
          <Button borC={"#ed7745"} bg={"#fefcfe"}>
            Californian Walnut
          </Button>
        </div>
        <div
          className="BED SIZE
  "
        >
          <SubTitle className="subtitle">BED SIZE</SubTitle>
          <Button borC={"#ed7745"} bg={"#fefcfe"}>
            {" "}
            Queen
          </Button>
          <Button>King</Button>
        </div>
        <div
          className="STORAGE TYPE
  "
        >
          <SubTitle className="subtitle">STORAGE TYPE</SubTitle>
          <Button borC={"#ed7745"} bg={"#fefcfe"}>
            Box
          </Button>
        </div>
      </div>

      <div className="price-cont">
        <div className="strike-price-cont">
          <span className="price-name">MRP</span>
          &nbsp;
          <div className="strike-price price-name"> ₹26,999</div>
        </div>

        <div className="discounted-price  ">
          {" "}
          <span className="price">₹</span>
          <span className="real-price">{MRP_price}</span>
          <p class="incl-all-taxes">(inclusive of all taxes)</p>
        </div>
      </div>

      <div className="emi-cont">
        <div className="emi-logo">
          <div className="sqr">
            <p className="EMI">EMI</p>
            <p className="FINANCE">FINANCE</p>
          </div>
        </div>

        <div className="emi-text">
          <ul className="emi-li">
            <li>
              <span>No Cost</span> EMIs from <span>₹{emi}</span>
            </li>
            <li>
              Other EMIs from <span>₹973 </span>
              <a href="#" className="link-title  knowMore">
                {" "}
                Know More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="addToCart">
        <Button
          height={"50px"}
          width={"100%"}
          color={"white"}
          bg={"#ed7745"}
          fontSize={"20px"}
          borderRadius={"5px"}
          hbg={"#ed7740"}
          l
        >
          ADD TO CART
        </Button>
      </div>

      <div className="wrnty-cont">
        <div className="wrnty-logo">
          <ShieldIcon />
        </div>
        <div className="wrnty-tex">
          <span className="bold-one">12 month warranty</span> on this product{" "}
          <p>
            <a href="#" className="knowMore">
              {" "}
              Know More
            </a>
          </p>
        </div>
      </div>

      <div className="wrnty-cont locCont">
        <div className="wrnty-logo">
          <Location />
        </div>
        <div className="wrnty-tex">
          <span className="bold-one">New Delhi - 110001</span>
        </div>
        <div className="changeLoc">
          <a href="#" className="knowMore change-loc">
            Change
          </a>
        </div>
      </div>

      <div className="be-first">
        <p>
          Be the first to know when we start delivering in your neighbourhood.
        </p>
      </div>

      <div className="FrequentlyBoughtTogether">
        <p>FrequentlyBoughtTogether</p>
        <div className="freqImg">
          <img
            src="https://www.ulcdn.net/images/products/121719/cart/Cloud_Cocoon_Mattress_78_x_72_x_10_00_LP.jpg?1477488186"
            alt=""
          />
          <img
            src="https://www.ulcdn.net/images/products/79662/cart/Siesta_Bedside_Table_Teak_00_replace_LP.jpg?1571311233"
            alt=""
          />
        </div>

        <div className="combo-btn">
          <button> Explore Combos @ 5% Off</button>
        </div>
      </div>
    </div>
  );
};
