import { useEffect, useState } from "react";
import axios from "axios";
import { GetProducts } from "../../Redux/products/action";
import { useSelector, useDispatch } from "react-redux";
import "./product.css";
import { Top_div } from "./top";
import { Title_div } from "./title";
import { Ad } from "./ad";
import { Features } from "./features";
import { Card } from "./productCard";
export const Product_page = () => {
  const products = useSelector((store) => store.products.products);

  const [allProducts, setAllProducts] = useState([]);
 
  const dispatch = useDispatch();
  function getProducts() {
    axios.get("https://urban-database.herokuapp.com/products").then(({ data }) => {
      console.log("data", data);
      dispatch(GetProducts(data));
    
    });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div id="pmain">
        <Top_div />
        <Title_div />
        <Ad />
        <hr />
        <Features />
        <div id="pgrid">
          {products.map((e) => (
              <Card e={e} key={e.id} /> 
          ))}
        </div>
      </div>
    </>
  );
};
