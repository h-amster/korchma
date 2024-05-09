import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainSlider.scss';
import uuid from 'react-uuid';
import { Autoplay, Pagination } from 'swiper/modules';

type Props = {
  images: string[];
};

export const MainSlider: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      allowTouchMove={false}
      loop
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={1}
      spaceBetween={50}
      className="slider"
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
    >
      {images.map(img => (
        <SwiperSlide key={uuid()}>
          <img src={img} alt="Slider Slide" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
