import { useState } from "react";
import "./Navbar.css";
import { Dropdown } from "./Dropdown";

export const BottomNav = () => {
  const [openSale, setOpenSale] = useState(false);
  const [openLiving, setOpenLiving] = useState(false);
  const [openBedroom, setOpenBedroom] = useState(false);
  const [openDininig, setOpenDininig] = useState(false);
  const [openStorage, setOpenStorage] = useState(false);
  const [openStudy, setOpenStudy] = useState(false);
  const [openKidsRoom, setOpenKidsRoom] = useState(false);
  const [openMattresses, setOpenMattresses] = useState(false);
  const [openDecor, setOpenDecor] = useState(false);
  const [openCollections, setOpenCollections] = useState(false);

  return (
    <>
      <div id="blackBottom">
        <div id="bottomNavbar">

        <span className="dropdown">
            <div>Sales</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>
          
          <span className="dropdown">
            <div>Living</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Bedroom</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Dining</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Storage</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>


          <span className="dropdown">
            <div>Study</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Kids Room</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Mattresses</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Decor</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>

          <span className="dropdown">
            <div>Collections</div>
            <div className="bedroom-dropdown">
              <Dropdown />
            </div>
          </span>
        </div>
      </div>

     
    </>
  );
};
