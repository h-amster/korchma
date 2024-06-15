import { Link } from 'react-router-dom';
import './DrinksFromVendor.scss';
import { Card } from '../Card/Card';
import classNames from 'classnames';
import { useAppSelector } from '../../store/hooks';

type Props = {
  className?: string;
  vendor: string;
};

export const DrinksFromVendor: React.FC<Props> = ({
  className = '',
  vendor,
}) => {
  const drinksFromServer = useAppSelector(state => state.drinks.drinks);

  const vendorLink = vendor.replaceAll(' ', '+');

  const preparedDrinks = [...drinksFromServer]
    .filter(drink => drink.producer.name === vendor)
    .sort((drink1, drink2) => drink2.rating - drink1.rating)
    .slice(0, 4);

  return (
    <section
      className={classNames('drinks', {
        [className]: className,
      })}
    >
      <header className="drinks__header">
        <h2 className="drinks__title">
          <span className="drinks__plain-text">Більше від</span>
          <span>{vendor}</span>
        </h2>

        <Link to={`/catalog?vendor=${vendorLink}`} className="drinks__link">
          Показати більше &gt;
        </Link>
      </header>

      <div className="drinks__cards">
        {preparedDrinks.map(drink => (
          <Card product={drink} key={drink.id} classname="drinks__card" />
        ))}
      </div>
    </section>
  );
};
