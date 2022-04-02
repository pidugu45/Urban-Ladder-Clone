import { Navbar } from "../navbar/Navbar";
import "./HomePage.css";
import SimpleImageSlider from "react-simple-image-slider";
import {PicsSlides} from "./PicsSlides"
import {PicsSlides2} from "./PicsSlides2"
// eslint-disable-next-line
import "swiper/css/bundle";
import {TopFooter} from "../footer/TopFooter"
import {Footer} from "../footer/footer"

const images = [
  {
    url: "https://www.ulcdn.net/media/slideshow/Colour-Crush-Sale-End--Slideshow_ends.jpg?1648550738",
  },
  {
    url: "https://www.ulcdn.net/media/slideshow/Recliners-slideshow-Desktop.jpg?1648039599",
  },
  {
    url: "https://www.ulcdn.net/media/slideshow/Fabric-sofa-slideshow-Desktop.gif?1647410135",
  },
  {
    url: "https://www.ulcdn.net/media/slideshow/SimplyWud-Slideshow.jpg?1647843445",
  },
  {
    url: "https://www.ulcdn.net/media/slideshow/Slideshow-Mattress_HAPPYSLEEP.jpg?1646114069",
  },
];

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div id="slideShowForBigImages">
          <SimpleImageSlider
            width={1455}
            height={604}
            images={images}
            showBullets={true}
            autoPlay={true}
            showNavs={true}
          />
        </div>
        <div>
          <div id="backgroundColorgray">
            <br />
            <br />
            <div className="orangeBorder">Explore Our Furniture Range</div>
            <br />
            <br />
            <div>
              <div className="category-row">
                <a href="">
                  <span className="material-icons">chair</span>
                  <h3>Sofas</h3>
                </a>
                <a href="">
                  <span className="material-icons">bed</span>
                  <h3>Beds</h3>
                </a>
                <a href="">
                  <span className="material-icons">table_restaurant</span>
                  <h3>Dining</h3>
                </a>
                <a href="">
                  <span className="material-icons">connected_tv</span>
                  <h3>TV Units</h3>
                </a>
                <a href="">
                  <span className="material-icons">local_play</span>
                  <h3>Mattresses</h3>
                </a>
                <a href="">
                  <span className="material-icons">chair_alt</span>
                  <h3>Seating</h3>
                </a>
                <a href="">
                  <span className="material-icons">rectangle</span>
                  <h3>Cofee Tables</h3>
                </a>
                <a href="">
                  <span className="material-icons">auto_awesome_mosaic</span>
                  <h3>Cupboards</h3>
                </a>
              </div>
            </div>
            <div>
              <div className="category-row">
                <a href="">
                  <span className="material-icons">chair</span>
                  <h3>Sofas</h3>
                </a>
                <a href="">
                  <span className="material-icons">bed</span>
                  <h3>Beds</h3>
                </a>
                <a href="">
                  <span className="material-icons">table_restaurant</span>
                  <h3>Dining</h3>
                </a>
                <a href="">
                  <span className="material-icons">connected_tv</span>
                  <h3>TV Units</h3>
                </a>
                <a href="">
                  <span className="material-icons">local_play</span>
                  <h3>Mattresses</h3>
                </a>
                <a href="">
                  <span className="material-icons">chair_alt</span>
                  <h3>Seating</h3>
                </a>
                <a href="">
                  <span className="material-icons">rectangle</span>
                  <h3>Cofee Tables</h3>
                </a>
                <a href="">
                  <span className="material-icons">auto_awesome_mosaic</span>
                  <h3>Cupboards</h3>
                </a>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>

        <br />
        <div>
            <PicsSlides />
        </div>
        <div>
          <PicsSlides2 />
        </div>
        <div>
          <TopFooter />
        </div>
        <div>
          <Footer />
        </div>

    </div>
  );
};
