import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

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
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.pixelstalk.net/wp-content/uploads/images2/Computer-Wallpaper-HD-Free-download.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/R.e6f2cedf317be31914a0057344eacd84?rik=lfjPJ3TUzOTvow&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fDesktop-computer-nature-wallpaper-hd.jpg&ehk=9aJz5cz8NKlzsXNWOSKRpzEd3Ez5IHxpkLjp8NZ%2fmXg%3d&risl=&pid=ImgRaw&r=0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.pixelstalk.net/wp-content/uploads/images2/Computer-Wallpaper-HD-Free-download.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.pixelstalk.net/wp-content/uploads/images2/Computer-Wallpaper-HD-Free-download.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
