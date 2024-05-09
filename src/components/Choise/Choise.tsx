import { Link } from 'react-router-dom';
import './Choise.scss';
import { Card } from '../Card/Card';
import classNames from 'classnames';
import { useAppSelector } from '../../store/hooks';

type Props = {
  className?: string;
};

export const Choise: React.FC<Props> = ({ className = '' }) => {
  const drinksFromServer = useAppSelector(state => state.drinks.drinks);

  const preparedDrinks = [...drinksFromServer]
    .sort((drink1, drink2) => drink2.rating - drink1.rating)
    .slice(0, 4);

  return (
    <section
      className={classNames('choise', {
        [className]: className,
      })}
    >
      <header className="choise__header">
        <h2 className="choise__title">ВИБІР КОРИСТУВАЧІВ</h2>

        <Link to="/catalog?sort=З+найвищим+рейтингом" className="choise__link">
          Показати більше &gt;
        </Link>
      </header>

      <div className="choise__cards">
        {preparedDrinks.map(drink => (
          <Card product={drink} key={drink.id} />
        ))}
      </div>
    </section>
  );
};
