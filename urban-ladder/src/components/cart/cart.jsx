import "./cart.css";
import { RightArrow } from "./iconsComponents/rArrow";

import { ItemComp } from "./ItemCom/ItemComp";

export const Cart = () => {
  let ali = [];
  return (
    <div className="cart">
      <div className="step">
        <div> 1. Cart</div>
        <div>
          <RightArrow />
        </div>
        <div>2. Address</div>
        <div>
          <RightArrow />
        </div>
        <div>3. Payment</div>
      </div>

      <div className="btn-input">
        <div className="mCenter">
          <p>ja fkjad fkjads</p>
        </div>
        <div className="checkout">
         <button>CheckOut</button>
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
        <ItemComp data={ali} />
      </div>
    </div>
  );
};
