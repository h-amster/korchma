import { Link } from 'react-router-dom';
import './Categories.scss';
import { Container } from '../Container/Container';
import classNames from 'classnames';

import beer from '../../assets/images/categories/beer.png';
import cider from '../../assets/images/categories/cider.png';
import combucha from '../../assets/images/categories/combucha.png';
import liquers from '../../assets/images/categories/liquers.png';
import rosolio from '../../assets/images/categories/rosolio.png';
import wine from '../../assets/images/categories/wine.png';
import { useState } from 'react';

type Props = {
  classname?: string;
};

export const Categories: React.FC<Props> = ({ classname = '' }) => {
  const [currentImg, setCurrentImg] = useState(beer);

  return (
    <section
      className={classNames('categories', {
        [classname]: classname,
      })}
    >
      <Container classes={['categories__container']}>
        <ul className="categories__list">
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Пиво"
              onMouseEnter={() => setCurrentImg(beer)}
            >
              пиво
            </Link>
          </li>
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Вино"
              onMouseEnter={() => setCurrentImg(wine)}
            >
              вино
            </Link>
          </li>
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Сидр"
              onMouseEnter={() => setCurrentImg(cider)}
            >
              Сидр
            </Link>
          </li>
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Наливки"
              onMouseEnter={() => setCurrentImg(rosolio)}
            >
              Наливки
            </Link>
          </li>
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Лікери"
              onMouseEnter={() => setCurrentImg(liquers)}
            >
              Лікери
            </Link>
          </li>
          <li className="categories__item">
            <Link
              className="categories__link"
              to="/catalog?category=Комбуча"
              onMouseEnter={() => setCurrentImg(combucha)}
            >
              Комбуча
            </Link>
          </li>
        </ul>

        <img
          className="categories__img"
          src={currentImg}
          alt="Categories Img"
        />
      </Container>
    </section>
  );
};
