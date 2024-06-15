/* eslint-disable max-len */
import { Categories } from '../../components/Categories/Categories';
import { MainSlider } from '../../components/MainSlider/MainSlider';
import { Map } from '../../components/Map/Map';
import './HomePage.scss';
import { Container } from '../../components/Container/Container';
import { Choise } from '../../components/Choise/Choise';
import { RecentlyViewed } from '../../components/RecentlyViewed/RecentlyViewed';
import slide1 from '../../assets/images/main-slider/slide-1.webp';
import slide2 from '../../assets/images/main-slider/slide-2.webp';
import slide3 from '../../assets/images/main-slider/slide-3.webp';

export const HomePage: React.FC = () => {
  const slides = [
    { img: slide1, link: 'https://www.instagram.com/p/C5D5VZqtoxy/' },
    { img: slide2, link: 'https://www.instagram.com/p/C6GoX7zNPRU/' },
    { img: slide3, link: 'https://shoco-zwin.choiceqr.com/' },
  ];

  return (
    <section className="homepage">
      <MainSlider slides={slides} />

      <Map />

      <Categories classname="homepage__categories" />

      <Container>
        <Choise />

        <RecentlyViewed className="homepage__recently-viewed" />
      </Container>
    </section>
  );
};
