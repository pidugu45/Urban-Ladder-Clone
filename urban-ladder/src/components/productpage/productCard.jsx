import { View_product } from "./view_product";
import "./product.css";
import { useNavigate } from "react-router-dom";
export const Card = ({ e }) => {
  //console.log(e);
  const navigate = useNavigate();
  function numberWithCommasDecimal(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  function applyDiscount(discount, actual_price) {
    const dis_price = (actual_price / 100) * discount;
    return numberWithCommasDecimal(actual_price - dis_price);
  }
  function go_to_details(id) {
    console.log("its id", id);
    navigate(`/products/${id}`);
  }
  return (
    <>
      <div>
        <div className="prodImgDivya">
          <img id="p_img" src={e.image} alt="" height="300px" width="300px" />
        </div>
        <p id="pname">{e.name}</p>
        <p className="psize_by">{e.size_finish}</p>
        <p className="psize_by">{e.by}</p>
        <p id="pcenter" style={{
          padding:"9px"
        }}>
          {!e.discount ? (
            <span className="price_p,pblock">{`₹${numberWithCommasDecimal(
              e.MRP_price
            )}`}</span>
          ) : (
            <span
              id="linethrough"
              className="price_p"
            >{`₹${numberWithCommasDecimal(e.MRP_price)}`}</span>
          )}{" "}
          <span className="price_p,pblock">
            {e.discount ? ` ₹${applyDiscount(e.discount, e.MRP_price)}` : null}
          </span>
          <span className="price_p">{` | EMI From ₹${numberWithCommasDecimal(
            e.emi_from
          )}`}</span>
        </p>
        <View_product id="unset" onClick={() => go_to_details(e._id)}>
          View Product
        </View_product>
      </div>
    </>
  );
};
