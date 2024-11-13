import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import cn from "./Slider.module.css";

const Slider = () => {
  return (
    <>
      <Swiper
        autoplay
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={cn.slide}>
          <h2></h2>
        </SwiperSlide>
   
      </Swiper>
    </>
  );
};

export { Slider };
