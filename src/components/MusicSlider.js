import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./Music.module.css";
import image1 from "../assets/Slider.jpg";
import image2 from "../assets/Slider2.jpg";
import image3 from "../assets/Slider4.jpg";
import image4 from "../assets/img1.jpg";
import image5 from "../assets/img2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
function MusicSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={700}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image5} className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} className={classes.image} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MusicSlider;
