
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Dropdown=()=>{

    return (<div className="dropdown-content">
    <div className="change-color-onHover">
      <h3>Beds</h3>
      <div><Link to="/products" className="anchore-tag-text-decoration-changing">Beds with Storage</Link></div>
      <div>Beds without Storage</div>
      <div>Double Beds</div>
      <div>King Size Beds</div>
      <div>Queen Size Beds</div>
      <div>Single Beds</div>
      <div>Bedroom Sets</div>
      <div>Hydraulic Storage Beds</div>
      <div>Upholstered Beds</div>
      <div>Four Poster Beds</div>
      <div>Trundle Beds</div>
      <div>Platform Beds</div>
    </div>

    <div className="change-color-onHover">
      <h3>Mattresses</h3>
      <div>King Size Mattress</div>
      <div>Queen Size Mattress</div>
      <div>Double Bed Mattress</div>
      <div>Single Bed Mattress</div>
      <div>All Mattresses</div>
      <div>Mattress By Type</div>
      <div>Mattress By Range</div>
      <div>Mattress By Brand</div>
    </div>

    <div className="change-color-onHover">
      <h3>Storage & Accessories</h3>
      <div>Wardrobes</div>
      <div>Chest of Drawers</div>
      <div>Bedside Tables</div>
      <div>Dressers & Mirrors</div>
      <div>Bedroom Benches</div>
      <div>Storage Chests</div>
      <div>Bedroom Chairs</div>
    </div>

    <div className="change-color-onHover">
      <h3>Kids Bedroom</h3>
      <div>Kids Beds</div>
      <div>Bunk Beds</div>
    </div>

    <div className="change-color-onHover">
      <h3>Top Brands</h3>
      <div>Simplywud</div>
      <div>Wood Edge</div>
      <div>Casastyle</div>
      <div>Durian</div>
      <div>Spacewood</div>
      <div>Reach 360</div>
      <div>Trevi</div>
      <div>Lakshita Wood Studio</div>
    </div>
  </div>)
}