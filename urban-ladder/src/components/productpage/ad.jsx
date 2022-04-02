import "./product.css";
export const Ad = () => {
  function displaymore() {
    console.log("clicked");
    document.getElementById("more").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("less").style.display = "unset";
    document.getElementById("para2").style.display = "unset";
  }
  function displayless() {
    document.getElementById("less").style.display = "none";
    document.getElementById("para2").style.display = "none";
    document.getElementById("more").style.display = "unset";
    document.getElementById("para1").style.display = "unset";
  }
  return (
    <>
      <img
        id="ad_img"
        src="https://www.ulcdn.net/media/collection/listings/SimplyWud---LiPB---DESKTOP---Beds-Starting-From.jpg?1647837304"
        alt=""
      />
      <div id="ad_text">
        <span id="para1">
          Clothes, shoes, extra bed linen, pillows...running out of place to put
          everything? That's why single or double, beds with storage are an
          absolute necessity. Our beds collection includes everything from
          hydraulic storage beds to those with drawers, box storage, and
          cubbyholes inside the headboard. Explore{"... "}
        </span>
        
        <span id="more" onClick={displaymore}>
          More
        </span>
        <span id="para2">
          Clothes, shoes, extra bed linen, pillows...running out of place to put
          everything? That's why single or double, beds with storage are an
          absolute necessity. Our beds collection includes everything from
          hydraulic storage beds to those with drawers, box storage, and
          cubbyholes inside the headboard. Explore now.
        </span>

        <span id="less" onClick={displayless}>
          Less
        </span>
      </div>
    </>
  );
};
