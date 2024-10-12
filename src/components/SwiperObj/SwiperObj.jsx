import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { imagesWorkFun } from "../../mockData/mockdata";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperObj.css";

export default function SwiperObj() {
  return (
    <div className="swiperobject-tma">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        easing="ease-in-out"
        speed={1000}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/workfun/" + imagesWorkFun[0]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/workfun/" + imagesWorkFun[1]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/workfun/" + imagesWorkFun[2]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/workfun/" + imagesWorkFun[3]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
