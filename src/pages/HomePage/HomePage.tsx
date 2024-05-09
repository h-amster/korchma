/* eslint-disable max-len */
import { Categories } from '../../components/Categories/Categories';
import { MainSlider } from '../../components/MainSlider/MainSlider';
import { Map } from '../../components/Map/Map';
import './HomePage.scss';
import { Container } from '../../components/Container/Container';
import { Choise } from '../../components/Choise/Choise';
import { RecentlyViewed } from '../../components/RecentlyViewed/RecentlyViewed';
import { Modal } from '../../components/Modal/Modal';

export const HomePage: React.FC = () => {
  return (
    <section className="homepage">
      <MainSlider
        images={[
          'https://placehold.co/1940x400',
          'https://placehold.co/1940x400',
          'https://placehold.co/1940x400',
        ]}
      />

      <Map />

      <Categories classname="homepage__categories" />

      <Container>
        <Choise />

        <RecentlyViewed className="homepage__recently-viewed" />
      </Container>
    </section>
  );
};
