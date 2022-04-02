import "./Navbar.css";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import { Profile } from "./Profile";
import {Link} from "react-router-dom"

export const MiddNav = () => {

  let data = JSON.parse(localStorage.getItem("cart_section"))||[];
  console.log(data.length)
  // VscAccount
  return (
    <div id="blackMiddle">
      <div id="middleNavbar">
          <Link to="/" id="urbanLadderLogo" className="cart-link-decoration-change">
        
          <img
            src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/609978aa1b1c68da16b8e8e5bf8fc606/a7208869-525f-4cb8-97b6-904a2cdfed70_rw_1200.png?h=0fcaced8bf91526fb853122d973668b9"
            alt="Urban Ladder"
          />
       
          </Link>
        <div id="inputAndSearch">
          <input type="text" placeholder="Search" />
          <div className="tooltipHoverColorChange">
            <span className="material-icons">search</span>
          </div>
        </div>
        <div id="profileIcons">
          <Tooltip
            className="tooltipHoverColorChange"
            title="Track Order"
            arrow
          >
            {/* <span class="material-icons">arrow_drop_down</span> */}
            <span className="material-icons">local_shipping</span>
          </Tooltip>

          <div id="profile-drop-down">
            <div>
            <Tooltip className="tooltipHoverColorChange" title="" arrow>
              <span className="material-icons">person</span>
              </Tooltip>
            </div>
            <div className="profile-drop-down-chiled"><Profile /></div>
          </div>

          <Tooltip className="tooltipHoverColorChange" title="Wishlist" arrow>
            <Badge badgeContent={0} color="error" showZero>
              <span className="material-icons">favorite_border</span>
            </Badge>
          </Tooltip>

          <Link to="/cart" className="cart-link-decoration-change">
          <Tooltip className="tooltipHoverColorChange" title="Cart" arrow>
            <Badge badgeContent={data.length} color="error" showZero>
              <span className="material-icons">shopping_cart</span>
            </Badge>
          </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
};
