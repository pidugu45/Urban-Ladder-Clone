import "./Slide.css";
import SimpleImageSlider from "react-simple-image-slider";
// import { SubTitle } from "../SmallParts/SubTitle";
import { useState } from "react";

export const Slide = ({ moreinfo, product_details, related_images }) => {
  const images = related_images;
  const [more, setMore] = useState(false);

  return (
    <div>
      <div className="slide-image slide">
        {images ? (
          <SimpleImageSlider
            width={680}
            height={400}
            images={images}
            showBullets={false}
            showNavs={true}
            bgColor={"red"}
            autoPlay={true}
            // navMargin={"5px"}
          />
        ) : null}
      </div>

      <div className="product-tumb">
        {images?.map((ele) => {
          return <img className="thumbnail" src={ele} alt="" />;
        })}
      </div>

      <div className="product-prpty">
        <p className="product-detail productTitle">PRODUCT DETAILS</p>

        <div className="item-qlty">
          <ul>
            <li>
              Net Quantity : <span>{product_details?.net_quantity}</span>
            </li>
            <li>
              Product Dimensions : <span>{product_details?.dimensions}</span>
            </li>
            <li>
              Sub Category : <span> Beds</span>
            </li>
            <li>
              Country of Origin :{" "}
              <span>{product_details?.country_of_region}</span>
            </li>
          </ul>
        </div>

        <details>
          <summary>
            <p
              className="product-detail productTitle"
              onClick={() => {
                setMore(!more);
              }}
            >
              {" "}
              {more ? <span>More</span> : <span>Less</span>} Information{" "}
              {more ? <span>▲</span> : <span>▼</span>}
            </p>
          </summary>

          <div className="item-qlty">
            <ul>
              <li>
                MRP : &nbsp;
                <span>₹{moreinfo?.MRP.toFixed(2)} (Incl. of all taxes)</span>
              </li>

              <li>
                Consumer Care Details : &nbsp;
                <span>{moreinfo?.Consumer_Care_Details}</span>
              </li>

              <li>
                Sold By : &nbsp;
                <span>{moreinfo?.Sold_By}</span>
              </li>

              <li>
                Marketed By :{" "}
                <span>
                  {moreinfo?.MarketedBy}
                  Reliance Retail Limited, 3rd Floor, Court House, Lokmanya
                  Tilak Marg, Dhobi Talao, Mumbai-400002
                </span>{" "}
              </li>

              <li>
                Imported By : &nbsp; <span>{moreinfo?.Imported_By}</span>
              </li>
              <li>
                Manufactured By :
                <span>
                  {moreinfo?.ManufacturedBy}
                  Urban Ladder Home Decor Solutions Private Limited, Block C &
                  D, Plot No. 1, 2nd Phase,Industrial Area, Sector -
                  Bidadi,Bangalore-562109
                </span>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};
