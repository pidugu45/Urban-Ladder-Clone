

import "./Navbar.css";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

export const MiddNav = () => {
  // VscAccount
  return (
    <div id="blackMiddle">
      <div id="middleNavbar">
        <div id="urbanLadderLogo">
          <img
            src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/609978aa1b1c68da16b8e8e5bf8fc606/a7208869-525f-4cb8-97b6-904a2cdfed70_rw_1200.png?h=0fcaced8bf91526fb853122d973668b9"
            alt="Urban Ladder"
          />
        </div>
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

          <Tooltip className="tooltipHoverColorChange" title="Add" arrow>
            <span className="material-icons" >person</span>
          </Tooltip>

          <Tooltip className="tooltipHoverColorChange" title="Wishlist" arrow>
            <Badge badgeContent={0} color="error" showZero>
              <span className="material-icons">favorite_border</span>
            </Badge>
          </Tooltip>
          <Tooltip className="tooltipHoverColorChange" title="Cart" arrow>
            <Badge badgeContent={0} color="error" showZero>
              <span className="material-icons">shopping_cart</span>
            </Badge>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
