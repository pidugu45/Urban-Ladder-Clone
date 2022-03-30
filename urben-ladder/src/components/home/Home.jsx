import { Navbar } from "../navbar/navbar";
import "./HomePage.css";
import { StyledEngineProvider } from "@mui/material/styles";
// import {img} from "../Images/slideShow1"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.ulcdn.net/media/slideshow/Colour-Crush-Sale-End--Slideshow_ends.jpg?1648550738" },
  { url: "https://www.ulcdn.net/media/slideshow/Recliners-slideshow-Desktop.jpg?1648039599" },
  { url: "https://www.ulcdn.net/media/slideshow/Fabric-sofa-slideshow-Desktop.gif?1647410135" },
  { url: "https://www.ulcdn.net/media/slideshow/SimplyWud-Slideshow.jpg?1647843445" },
  { url: "https://www.ulcdn.net/media/slideshow/Slideshow-Mattress_HAPPYSLEEP.jpg?1646114069" }

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
            width={1800}
            height={704}
            images={images}
            showBullets={true}
            autoPlay={true}
            showNavs={true}
            />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
