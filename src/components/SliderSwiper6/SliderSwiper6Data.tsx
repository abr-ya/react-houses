import { useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SlidePrice, SliderItem, SlideTitle } from "./SliderSwiper6.styled";
import { IHouse } from "interfaces";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface ISliderSwiper6Data {
  dataArray: { data: IHouse; id: string }[];
  height: number;
}

const SliderSwiper6Data = ({ dataArray, height }: ISliderSwiper6Data) => {
  const navigate = useNavigate();

  return (
    <div>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {dataArray.map(({ id, data }) =>
          !data?.imageUrls ? null : (
            <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
              <SliderItem height={height} bg={data.imageUrls[0]} isLink>
                <SlideTitle>{data.name}</SlideTitle>
                <SlidePrice>
                  {data.discountedPrice ?? data.regularPrice} {data.type === "rent" && "/ month"}
                </SlidePrice>
              </SliderItem>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default SliderSwiper6Data;
