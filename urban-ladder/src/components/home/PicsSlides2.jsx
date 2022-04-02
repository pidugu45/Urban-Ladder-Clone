import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./HomePage.css";

export const PicsSlides2 = () => {
  return (
    <div className="setMargingForSliding">
      <div>
        <br />
        <br />
        <div className="orangeBorder">Explore Our Furniture Range</div>
      </div>
      <div className="slideshow-maindiv">
        <br />
        <br />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
              <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHEEKA CHINNAPPA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
            <div>Alexandria Book Shelf</div>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>

          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHRUTI S.POY RAITURCAR</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/223893/product/Twain_Study_Table_LP.jpg?1544673336"
              alt=""
            />
            <p>Williams Bed</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>JAYANTI MULLICK CHOPRA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/82584/product/1956_Lounge___Ottoman_Replica_Black_LP.jpg?1519629745"
              alt=""
            />
            <p>Striado TV Unit</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>UJVAL NANAVATI</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520"
              alt=""
            />
             <p>Bradbury-Charles Study Set</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>MANISHA DHURU BHATJIWALE</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869"
              alt=""
            />
            <p>Kafano Coffee Table Set</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHEEKA CHINNAPPA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/201808/product/Truman_Study_Table__Creamy_Crust_Finish_Teak_LP.jpg?1624608812"
              alt=""
            />
            <p>Larsson Study Table</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHEEKA CHINNAPPA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/150729/product/Thorpe_Upholstered_Storage_Bed_King_Revised_LP.jpg?1580728894"
              alt=""
            />
            <p>Larsson Study Table</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHEEKA CHINNAPPA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/216193/product/Carven_lounge_chair_Maroon_replace_LP.jpg?1569471073"
              alt=""
            />
            <p>Larsson Study Table</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                  <img className="borderRadius-for-img" src="https://graph.facebook.com/10154022464967981/picture?type=square" alt="" />
                  <h3>SHEEKA CHINNAPPA</h3>
                    <p>via Facebook</p>
              </div>
            <img
              src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869"
              alt=""
            />
            <p>Larsson Study Table</p>
            <button>VIEW PRODUCT</button>
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
    </div>
  );
};
