import './RecentlyViewed.scss';
import { useAppSelector } from '../../store/hooks';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Drink } from '../../types/Drink';
import { Card } from '../Card/Card';
import classNames from 'classnames';

type Props = {
  className?: string;
};

export const RecentlyViewed: React.FC<Props> = ({ className = '' }) => {
  const [recentlyViewedIds] = useLocalStorage<number[]>('recentlyViewed', []);

  const drinksFromServer = useAppSelector(state => state.drinks.drinks);

  const preparedDrinks = recentlyViewedIds
    .map((id: number) => drinksFromServer.find(drink => drink.id === id))
    .filter((drink: Drink): drink is Drink => drink !== undefined);

  if (preparedDrinks.length === 0) {
    return null;
  }

  return (
    <section
      className={classNames('recently-viewed', {
        [className]: className,
      })}
    >
      <h2 className="recently-viewed__title">ВИ РАНІШЕ ПЕРЕГЛЯДАЛИ</h2>

      <div className="recently-viewed__cards">
        {preparedDrinks.map((item: Drink) => (
          <Card
            key={item.id}
            product={item}
            classname="recently-viewed__card"
          />
        ))}
      </div>
    </section>
  );
};
