import "./footer.css";
import { FiFacebook, FiMail } from "react-icons/fi";
import {
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer-title">
          SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK.
        </div>
        <div className="main-footer-for-subscription">
          <input type="text" placeholder="Yout Email ID" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="horizontal-line-gray">
        <div className="footer-about-section">
          <div className="top-div-footer-about-section">
            <div className="title-for-company-privacy-polocy-box">
              <div>
                <h3>The Company:</h3>
              </div>
              <div className="company-privacy-polocy-box">
                <ul>
                  <li>About Us</li>
                  <li>Help</li>
                  <li>Blog</li>
                  <li>Inside UL</li>
                </ul>
                <ul>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Team</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="title-for-company-privacy-polocy-box">
              <div>
                <h3>More Information:</h3>
              </div>
              <div className="company-privacy-polocy-box">
                <ul>
                  <li>Fees and Payment</li>
                  <li>Shipping & Delivery</li>
                  <li>Terms and Conditions</li>
                  <li>Warranty, Return and Refund</li>
                </ul>
                <ul>
                  <li>Contact Us</li>
                  <li>Visit Us</li>
                  <li>Buy In Bulk</li>
                </ul>
              </div>
            </div>
            <div className="title-for-company-privacy-polocy-box">
              <div>
                <h3>Explore More</h3>
              </div>
              <div className="company-privacy-polocy-box">
                <ul>
                  <li>Refer & Earn</li>
                  <li>Gift Cards</li>
                </ul>
              </div>
            </div>
            <div className="title-for-company-privacy-polocy-box">
              <div>
                <h3>Address</h3>
              </div>
              <div className="company-privacy-polocy-box">
                <ul>
                  <li>Reliance Retail Limited,</li>
                  <li>
                    3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao,
                    Mumbai- 400 002, Maharashtra, India
                  </li>
                  <li>CIN: U01100MH1999PLC120563</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-details-div">
          <div className="connect-with-us-div">
            <div>Connect With Us:</div>
            <div>
              <span>
                <FaPhoneAlt />
              </span>
              <span>
                <FiMail />
              </span>
              <span>
                <FiFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaPinterest />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="download-app-div">
            <div>Download App:</div>
            <div>
              <img
                src="https://www.ulcdn.net/media/badges/app_store/app_store_badge.svg"
                alt=""
              />
              <img
                src="https://www.ulcdn.net/media/badges/play_store/google-play-badge.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom-div-and-darkgreen">
        <div id="footer-bottom-div-marginAuto">
          <div className="display-flex-for-bottom-div">
            <div>Popular Furniture Categories:</div>
            <div>
              Bed , Beds By Design , Sofa Set , Wooden Sofa , Sofas By Design ,
              Sofa Cum Bed , Double Bed , Single Bed , Queen Size Bed , King
              Size Bed , Chair , Wooden Table , Study Table , Study Chair ,
              Wardrobe , Chest of Drawers , Futon , Loveseat , Dining Table Set
              , Dining Chair , Bookshelves , Shoe Rack , TV Units , Recliners ,
              Furniture , Office Furniture , Office Table , Office Chair , 2
              Seater Sofa , TV Cupboard , TV Showcase , TV Stand , Center Table
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>Shop Furniture By Room:</div>
            <div>
              Living Room Furniture , Bedroom Furniture , Dining Room Furniture
              , Study Room Furniture , Bar Furniture , Balcony Furniture
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>Popular Decor Categories:</div>
            <div>
              Home Decor , Carpets , Mirrors , Study Lamps , Table Lamps , Bed
              Sheets , Floor Lamps , Wall Lights , Lighting , Ceiling Lights ,
              Quilt , Wall Decor , Wall Mirror , Table Decor , Table Cover ,
              Table Napkin , Table Mat , Cushion Cover , Table Runners , Home
              Furnishing , Wall Art , Showpiece , Artificial Plants , Photo
              Frame , Candle Stand , Clocks , Wall Clocks , Festive Lights ,
              Candles , Bath Mat , Vases , Flower Vase , Bathroom Accessories ,
              Bathroom Mirrors
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>Popular Mattress Categories:</div>
            <div>
              Mattresses , Single Bed Mattresses , Double Bed Mattresses , King
              Size Mattresses , Queen Size Mattresses , Foam Mattress , Coir
              Mattress , Latex Mattress , Spring Mattress , Orthopaedic Mattress
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>Popular Tableware Categories:</div>
            <div>
              Shot Glass , Dinner Plates , Baking Tray , Forks , Dinner Set ,
              Tumbler , Drinking Glass , Cutlery Holder , Tissue Holder , Bottle
              Opener , Spoons , Whiskey Glass , Kitchen Organizers , Hot Pot ,
              Chef's Cap , Glass Jars , Kitchen Gloves , Kitchen Storage
              Containers , Bar Tools , Masala Box , Glass Bottles , Coasters ,
              Cutlery Set , Knives Set , Oven Gloves , Aprons , Cake Stand ,
              Fruit Basket , Spice Box , Beer Glass , Bowls , Oil Dispenser ,
              Housewarming Gifts
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>Delivering in:</div>
            <div>
              Aanamalai , Agra , Ahmedabad , Alappuzha , Aler , Alibaug ,
              Alleppey , Alwar , Ambala , Ambarnath , Amdapur , Amritsar ,
              Amtala , Anand , Anikorai , Arimpur , Arnala , Arutla , Asansol ,
              Athikunna , Athipalli{" "}
            </div>
          </div>
          <div className="display-flex-for-bottom-div">
            <div>We Accept:</div>
            <div>Cards</div>
          </div>
          <h3 id="alignRight-code">© 2012-2022 URBAN LADDER</h3>
        </div>
      </div>
    </div>
  );
};
