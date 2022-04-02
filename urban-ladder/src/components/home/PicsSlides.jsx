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

export const PicsSlides = () => {
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
            <img
              src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916"
              alt=""
            />
            <div>Alberto Bookself/Display unit</div>
            <div className="gray-description">(85-book capacity)</div>
            <div>
              <span className="strike-amount">Rs : 24,899</span>{" "}
              <span>Rs : 17,249</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/223893/product/Twain_Study_Table_LP.jpg?1544673336"
              alt=""
            />
            <p>Twain Study Table</p>
            <p className="gray-description">(Cherry Melamine Finish)</p>
            <div>
              <span className="strike-amount">Rs 10499</span>
              <span>Rs 7874</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/82584/product/1956_Lounge___Ottoman_Replica_Black_LP.jpg?1519629745"
              alt=""
            />
            <p>1956 Lounge & Ottoman Replica</p>
            <p className="gray-description">(Black)</p>
            <div>
              <span className="strike-amount">Rs 56,499</span>
              <span>Rs 45,199</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520"
              alt=""
            />
            <p>Thorpe Uphoistered Storage Bed</p>
            <p className="gray-description">(Queen Bed Size)</p>
            <div>
              <span className="strike-amount">Rs 36,399</span>
              <span>Rs 29,119</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869"
              alt=""
            />
            <p>Larsson Study Table</p>
            <p className="gray-description">(Teak Fininsh)</p>
            <div>
              <span className="strike-amount">Rs 13,999</span>
              <span>Rs 9,799</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/201808/product/Truman_Study_Table__Creamy_Crust_Finish_Teak_LP.jpg?1624608812"
              alt=""
            />
            <p>Larsson Study Table</p>
            <p className="gray-description">(Teak Fininsh)</p>
            <div>
              <span className="strike-amount">Rs 13,999</span>
              <span>Rs 9,799</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/150729/product/Thorpe_Upholstered_Storage_Bed_King_Revised_LP.jpg?1580728894"
              alt=""
            />
            <p>Larsson Study Table</p>
            <p className="gray-description">(Teak Fininsh)</p>
            <div>
              <span className="strike-amount">Rs 13,999</span>
              <span>Rs 9,799</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/216193/product/Carven_lounge_chair_Maroon_replace_LP.jpg?1569471073"
              alt=""
            />
            <p>Larsson Study Table</p>
            <p className="gray-description">(Teak Fininsh)</p>
            <div>
              <span className="strike-amount">Rs 13,999</span>
              <span>Rs 9,799</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869"
              alt=""
            />
            <p>Larsson Study Table</p>
            <p className="gray-description">(Teak Fininsh)</p>
            <div>
              <span className="strike-amount">Rs 13,999</span>
              <span>Rs 9,799</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
    </div>
  );
};
