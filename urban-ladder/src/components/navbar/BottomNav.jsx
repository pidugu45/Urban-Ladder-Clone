

import "./Navbar.css";
// import {Dropdown} from "./Dropdown"

export const BottomNav = () => {

  const handleMouseOver=()=>{
    console.log("mouse over")
  }


  return (
    <>
    <div id="blackBottom">
      <div id="bottomNavbar">
        <span
        onMouseOver={handleMouseOver}
        
         >Sale</span>
        <span>Living</span>
        <span className="bedroom-dropdown-block" >
          <div>Bedroom</div>
          {/* <div className="bedroom-dropdown">
            <Dropdown />
          </div> */}
        </span>
        <span className="dining-block">
          <div>Dininig</div>
        {/* <div className="bedroom-dropdown">
            <Dropdown />
          </div> */}
        </span>
        <span>Storage</span>
        <span>Study</span>
        <span>Kids Room</span>
        <span>Mattresses</span>
        <span>Decor</span>
        <span>Collections</span>
      </div>
    </div>
     
    </>
  );
};
