import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Pagination } from '../../components/Pagination/Pagination';
import './FavoritesPage.scss';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { Choise } from '../../components/Choise/Choise';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SortFavoriteValues } from '../../types/SortFavoriteValues';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/getSearchWith';
import { FavoriteDrink } from '../../types/FavoriteDrink';
import { Drink } from '../../types/Drink';
import * as favoritesActions from '../../store/favoritesSlice';

export const FavoritesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const sortOptions = Object.values(SortFavoriteValues);

  const [searchParams, setSearchParams] = useSearchParams();

  const favorites = useAppSelector(state => state.favorites.favorites);
  const drinks = useAppSelector(state => state.drinks.drinks);

  const sortBy = searchParams.get('sort') || SortFavoriteValues.date;
  const page = Number(searchParams.get('page')) || 1;

  const favoritesDrinks = favorites
    .map(favItem => {
      return {
        date: favItem.date,
        item: drinks.find(drink => drink.id === favItem.id) as Drink,
      };
    })
    .filter(favItem => favItem.item !== undefined);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setSearchWith(params: any) {
    const search = getSearchWith(params, searchParams);

    setSearchParams(search);
  }

  function sortGoods(sortValue: SortFavoriteValues) {
    switch (sortValue) {
      case SortFavoriteValues.date:
        return (drink1: FavoriteDrink, drink2: FavoriteDrink): number =>
          drink1.date - drink2.date;

      case SortFavoriteValues.rating:
        return (drink1: FavoriteDrink, drink2: FavoriteDrink): number =>
          drink2.item.rating - drink1.item.rating;
    }
  }

  const itemsPerPage = 8;
  const total = drinks.length;
  const firstItem = (page - 1) * itemsPerPage;
  const lastItem =
    firstItem + itemsPerPage < total ? firstItem + itemsPerPage : total;

  const preparedItems = [...favoritesDrinks]
    .slice(firstItem, lastItem)
    .sort(sortGoods(sortBy as SortFavoriteValues));

  return (
    <Container>
      <div className="favorites">
        <h1 className="favorites__title">СПИСОК БАЖАНЬ</h1>

        {favorites.length > 0 ? (
          <div className="favorites__content">
            <div className="favorites__header">
              <Dropdown
                options={sortOptions}
                selectedOption={sortBy}
                onSelect={value => {
                  if (value === SortFavoriteValues.date) {
                    setSearchWith({ sort: null });
                  } else {
                    setSearchWith({ sort: value });
                  }
                }}
                className="favorites__dropdown"
              />

              <button
                className="favorites__clear"
                onClick={() => dispatch(favoritesActions.clearFavorites())}
              >
                Очистити список
              </button>
            </div>

            <div className="favorites__cards">
              {preparedItems.map(favItem => (
                <Card
                  key={favItem.item.id}
                  product={favItem.item}
                  classname="favorites__card"
                />
              ))}
            </div>

            <Pagination
              total={total}
              perPage={itemsPerPage}
              currentPage={page}
              onPageChange={newPage => {
                if (newPage === 1) {
                  setSearchWith({ page: null });
                } else {
                  setSearchWith({ query: newPage });
                }
              }}
            />
          </div>
        ) : (
          <div className="favorites__empty">
            <h2 className="favorites__empty-title">
              На превеликий жаль, ваш список побажань порожній :&#40;
            </h2>

            <Link className="favorites__empty-button" to="/catalog">
              Ознайомитися з каталогом
            </Link>
          </div>
        )}

        <Choise />
      </div>
    </Container>
  );
};
