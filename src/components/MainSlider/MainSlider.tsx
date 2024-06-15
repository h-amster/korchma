import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainSlider.scss';
import uuid from 'react-uuid';
import { Autoplay, Pagination } from 'swiper/modules';

type Props = {
  slides: { img: string; link: string }[];
};

export const MainSlider: React.FC<Props> = ({ slides }) => {
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
      {slides.map(slide => (
        <SwiperSlide key={uuid()}>
          <a href={slide.link} target="_blank" rel="noreferrer">
            <img src={slide.img} alt="Slider Slide" className="swiper__img" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
