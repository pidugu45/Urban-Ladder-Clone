import React, { useEffect, useState } from "react";
import "./productDetails.css";
import SimpleImageSlider from "react-simple-image-slider";

import { Aside } from "./ProductsDetailComponents/Aside/Aside";
import { Slide } from "./ProductsDetailComponents/Slide/Slide";
import { Delhivery } from "../product-details-page/ProductsDetailComponents/iconsComponents/delhivery";
import { Tools } from "../product-details-page/ProductsDetailComponents/iconsComponents/tools";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Product_detail = () => {
  let [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/data/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  // console.log("product", product);
  const addToCart = () => {
    let md = JSON.parse(localStorage.getItem("cart_section")) || [];
    let cartItem = product;
    md.push(cartItem);
    localStorage.setItem("cart_section", JSON.stringify(md));
  };
  let product_dimensions = product?.product_dimensions;
  return (
    product && (
      <div className="main-product-cont">
        <hr />

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, id,
          perspiciatis esse eligendi similique necessitatibus voluptas beatae
          placeat explicabo, et perferendis. Asperiores provident commodi
          deleniti harum laborum, temporibus non excepturi totam, reprehenderit
          in amet, i eligendi sit ad explicabo, est iure non illo impedit ut
          fugit, porro molestiae quia, et amet aspernatur?
          <hr />
        </div>
        {/* display inline-items */}
        <div className="inline-list">
          <ul className="">
            <li className="inline-data">Furniture Home</li>{" "}
            <span>{">"} &nbsp;</span>
            <li className="inline-data">Bedroom Furniture</li>{" "}
            <span>{">"} &nbsp;</span>
            <li className="inline-data">Bed</li> <span>{">"} &nbsp;</span>
            <li className="inline-data">Beds with Storage</li>{" "}
          </ul>
        </div>
        <div className="product-title-cont">
          <h1 className="product-title">{product.name}</h1>
          <p>
            <span className="by-urban">{product.by}</span>
          </p>
        </div>
        <div className="product-details">
          <div className="product-slider">
            <Slide
              moreinfo={product.more_information}
              product_details={product.product_details}
              related_images={product.related_images}
            />
          </div>

          <div className="product-aside">
            <Aside
              disc={product.discount}
              emi={product.emi_from}
              title={product.name}
              MRP_price={product.MRP_price}
              func={addToCart}
            />
          </div>
        </div>
        {/* reason part */}
        <br />
        <br />
        <hr />

        <div className="story-telling">
          <p className="reason">
            {" "}
            Reasons <span className="strike">To Love</span> This Design
          </p>

          {product.length !== 0
            ? product.reasons_to_love_this_product.map((e, index) => {
                return index % 2 === 0 ? (
                  <div className="story-cont">
                    <div className="detail-info">
                      {" "}
                      <p className="detail-title">
                        {" "}
                        <span className="strike"> {e.title} </span>
                      </p>
                      <p className="detail-info">{e.description}</p>
                    </div>
                    <div className="poster-cont">
                      <img src={e.image} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="story-cont">
                    <div className="poster-cont">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="detail-info">
                      {" "}
                      <p className="detail-title">
                        {" "}
                        <span className="strike"> {e.title} </span>
                      </p>
                      <p className="detail-info">{e.description}</p>
                    </div>
                  </div>
                );
              })
            : []}
          {/* 2 */}

          {/* 2 */}
        </div>
        <div className="replace-cont">
          <p>"Replaced with the same ease and swiftness!"</p>
          <p className="subFont">
            Neha Chopra via Facebook{" "}
            <span className="knowMore"> Read More</span>
          </p>
        </div>

        <div className="service-cont ">
          <div className="delhivery">
            <div className="icon-div">
              <Delhivery height={"55px"} width={"45px"} fill={"#c0976f"} />
            </div>
            <p className="header-one">
              FREE <span className="strike"> HOME DELIV</span>ERY
            </p>
            <p className="header-sec">Available in select cities.</p>
          </div>

          <div className="install">
            <div className="icon-div">
              <Tools height={"55px"} width={"55px"} fill={"#c0976f"} />
            </div>
            <p className="header-one">
              {" "}
              FREE
              <span className="strike"> INSTALLATI</span>ON
            </p>
            <p className="header-sec">
              We assemble the product, and clear away the packaging.
            </p>
          </div>
        </div>

        <br />
        <br />
        <hr />

        <div className="product-dim">
          <h1>
            Prod<span className="strike">uct Dimensio</span>ns
          </h1>

          <div className="dimSlider">
            {product_dimensions ? (
              <SimpleImageSlider
                width={680}
                height={400}
                images={product_dimensions}
                showBullets={false}
                showNavs={true}
                bgColor={"red"}
                autoPlay={true}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  );
};
