import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SliderItem } from "./SliderSwiper6.styled";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ISliderSwiper6 {
  imgArray: string[];
  height: number;
}

const SliderSwiper6 = ({ imgArray, height }: ISliderSwiper6) => (
  <div>
    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
      {imgArray.map((url, index) => (
        <SwiperSlide key={index}>
          <SliderItem height={height} bg={url} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default SliderSwiper6;
