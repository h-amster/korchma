/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import './Card.scss';
import beer from '../../assets/images/card/beer.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Drink } from '../../types/Drink';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as favoritesActions from '../../store/favoritesSlice';
import { FavItem } from '../../types/FavItem';

type Props = {
  product: Drink;
  classname?: string;
};

export const Card: React.FC<Props> = ({ product, classname = '' }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {
    name,
    id,
    volume,
    count_comments,
    drink_type,
    isRating,
    rating,
    price,
    photos,
    producer,
  } = product;

  const getCategoryImg = (cat: number) => {
    switch (cat) {
      case 1:
        return beer;
    }
  };

  const categoryImg = getCategoryImg(drink_type.id);

  const favorites = useAppSelector(state => state.favorites.favorites);
  const dispatch = useAppDispatch();

  const favoritesIds = favorites.map((item: FavItem) => item.id);

  const volumesFromServer = useAppSelector(state => state.volumes.volumes);
  const capacity = volumesFromServer.find(vol => vol.id === volume.id)?.name;
  const roundedRating = Math.round(rating);

  const handleFavBtnClick = (itemId: number) => {
    if (favoritesIds.includes(itemId)) {
      dispatch(favoritesActions.removeFromFavorites(itemId));
    } else {
      dispatch(favoritesActions.addToFavorites(itemId));
    }
  };

  return (
    <article
      className={classNames('card', {
        [classname]: classname,
        'card--favorite': favoritesIds.includes(id),
      })}
    >
      <div
        className={classNames('card__top-rated', {
          'card__top-rated--hidden': !isRating,
        })}
      >
        Top rated
      </div>

      <Link className="card__img-wrapper" to={`/catalog/${id}`}>
        <img className="card__img" src={photos[0]?.image} alt="Product" />
        <img className="card__category" src={categoryImg} alt="Category" />
      </Link>

      <h3 className="card__title">
        <Link className="card__link" to={`/catalog/${id}`}>
          {name}
        </Link>
      </h3>

      <p className="card__manufacturer">{producer.name}</p>

      <p className="card__capacity">{capacity}</p>

      <div className="card__block">
        <div className={`card__stars card__stars--${roundedRating}`}>
          <div className="card__star"></div>
          <div className="card__star"></div>
          <div className="card__star"></div>
          <div className="card__star"></div>
          <div className="card__star"></div>
        </div>
        <div className="card__comments">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V21L6.467 18.4C6.81319 18.1404 7.23426 18 7.667 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4Z"
              stroke="#CCCCCC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="card__comments-count">{count_comments}</span>
        </div>
      </div>

      <div className="card__price">{+price} грн</div>

      <div className="card__buttons">
        <Link className="card__main-button" to={`/catalog/${id}`}>
          <span className="card__button-text">Детальніше&nbsp;&gt;</span>
        </Link>

        <button
          className="card__favorite-button"
          onClick={() => handleFavBtnClick(id)}
        >
          <svg
            className="card__favorite-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="card__favorite-path--heart"
              d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3C19.5 3 23 4 23 8.4C23 14.1745 14.5797 19.4896 12.4732 20.729C12.1802 20.9014 11.8198 20.9014 11.5268 20.729C9.42031 19.4896 1 14.1745 1 8.4Z"
            />
            <path
              className="card__favorite-path--border"
              d="M12 6.5L11.1679 7.0547C11.3534 7.3329 11.6656 7.5 12 7.5C12.3344 7.5 12.6466 7.3329 12.8321 7.0547L12 6.5ZM12.4732 20.729L11.9662 19.8671L12.4732 20.729ZM2 8.4C2 6.5098 2.72944 5.46946 3.57952 4.86496C4.48418 4.22164 5.63474 4 6.5 4V2C5.36526 2 3.76582 2.27836 2.42048 3.23504C1.02056 4.23054 0 5.89019 0 8.4H2ZM6.5 4C7.4761 4 8.39816 4.39039 9.22114 4.9939C10.0452 5.59825 10.7183 6.3802 11.1679 7.0547L12.8321 5.9453C12.2817 5.1198 11.4548 4.15175 10.4039 3.38109C9.35184 2.60961 8.0239 2 6.5 2V4ZM12.8321 7.0547C13.2817 6.3802 13.9548 5.59825 14.7789 4.9939C15.6018 4.39039 16.5239 4 17.5 4V2C15.9761 2 14.6482 2.60961 13.5961 3.38109C12.5452 4.15175 11.7183 5.1198 11.1679 5.9453L12.8321 7.0547ZM17.5 4C18.3653 4 19.5158 4.22164 20.4205 4.86496C21.2706 5.46946 22 6.5098 22 8.4H24C24 5.89019 22.9794 4.23054 21.5795 3.23504C20.2342 2.27836 18.6347 2 17.5 2V4ZM22 8.4C22 10.8362 20.1874 13.352 17.845 15.5333C15.5541 17.6668 12.9936 19.2625 11.9662 19.8671L12.9803 21.5908C14.0593 20.956 16.7622 19.2746 19.208 16.997C21.6024 14.7672 24 11.7383 24 8.4H22ZM12.0338 19.8671C11.0064 19.2625 8.44592 17.6668 6.15496 15.5333C3.81259 13.352 2 10.8362 2 8.4H0C0 11.7383 2.39757 14.7672 4.79197 16.997C7.23777 19.2746 9.94071 20.956 11.0197 21.5908L12.0338 19.8671ZM11.9662 19.8671C11.975 19.8618 11.987 19.8583 12 19.8583C12.013 19.8583 12.025 19.8618 12.0338 19.8671L11.0197 21.5908C11.6257 21.9474 12.3743 21.9474 12.9803 21.5908L11.9662 19.8671Z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
