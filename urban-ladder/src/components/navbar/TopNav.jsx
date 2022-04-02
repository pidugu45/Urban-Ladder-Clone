

import "./Navbar.css";

import * as React from "react";
import { styled } from "@mui/material/styles";

export const TopNav = () => {


  return (
    <div id="black">

    
    <div id="topNavbar">

      <div className="topNavbarLeft">
        <div>
        <span className="material-icons">help_outline</span>
              <span> Help </span>
        </div>
        <div>
        <span className="material-icons">local_shipping</span>
              <span> Track Order </span>
        </div>
      </div>


      <div className="topNavbarRight">
        <div>Stores</div>
        <div>Bulk Orders</div>
        <div>Gift Cards</div>
      </div>
      </div>

    </div>
  );
};
