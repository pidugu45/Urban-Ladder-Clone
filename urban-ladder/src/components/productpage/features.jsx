import { Button } from "./button";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowDownSFill } from 'react-icons/ri';
import { GetProducts } from "../../Redux/products/action";
export const Features = () => {
  const products = useSelector((store) => store.products.products);
  const dispatch = useDispatch();
  const applySort = (e) => {
    const { value } = e.target;
    if (value == "low") {
      products.sort((a, b) => (a.MRP_price - b.MRP_price));
    }
    else if (value == "high") {
      products.sort((a, b) => (b.MRP_price - a.MRP_price));
    }
    
    dispatch(GetProducts(products));
  }
 
  return (
    <>
      <div id="features">
        <div className="flexbox">
          <div id="filters">Filters</div>
          <div id="sort">Sort By</div>
         </div>
        <div id="buttons">
                  <Button>
                      <p>Price</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <Button>
                      <p>Features</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <Button>
                      <p>Material</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <Button>
                      <p>Finish</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <Button>
                      <p>Size</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <Button>
                      <p>Brand</p>
                       <RiArrowDownSFill style={ {marginTop:"8px"}}/>
                  </Button>
                  <div id="exclude"> <input type="checkbox" /> <label > Exclude Out Of Stock</label></div>
                 
                  <select onChange={applySort}>
                      <option value="Recommended" >Recommended</option>
                      <option value="low">Price:Low to High</option>
                      <option value="high">Price:High to Low</option>
                  </select>
              </div> 
        <hr />      
      </div>
    </>
  );
};
// BiDownArrow
