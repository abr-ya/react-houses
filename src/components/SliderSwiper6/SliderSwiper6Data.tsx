import { IHouse } from "interfaces";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SliderItem } from "./SliderSwiper6.styled";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ISliderSwiper6Data {
  dataArray: { data: IHouse; id: string }[];
  height: number;
}

const SliderSwiper6Data = ({ dataArray, height }: ISliderSwiper6Data) => (
  <div>
    <Swiper slidesPerView={1} pagination={{ clickable: true }}>
      {dataArray.map(({ id, data }) =>
        !data?.imageUrls ? null : (
          <SwiperSlide key={id}>
            <SliderItem height={height} bg={data.imageUrls[0]} />
          </SwiperSlide>
        ),
      )}
    </Swiper>
  </div>
);

export default SliderSwiper6Data;
