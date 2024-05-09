/* eslint-disable max-len */
import { useMemo, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { CheckboxVendor } from '../../components/CheckboxVendor/CheckboxVendor';
import { Container } from '../../components/Container/Container';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import './CatalogPage.scss';
import classNames from 'classnames';
import { Pagination } from '../../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/getSearchWith';
import { useAppSelector } from '../../store/hooks';
import { SortValues } from '../../types/sortValues';
import { Choise } from '../../components/Choise/Choise';
import { Drink } from '../../types/Drink';

export const CatalogPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isRegionsHidden, setIsRegionsHidden] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const drinksFromServer = useAppSelector(state => state.drinks.drinks);
  const volumesFromServer = useAppSelector(state => state.volumes.volumes);
  const categoriesFromServer = useAppSelector(
    state => state.categories.categories,
  );
  const vendorsFromServer = useAppSelector(state => state.producers.producers);
  const regionsFromServer = useAppSelector(state => state.regions.regions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setSearchWith(params: any) {
    const search = getSearchWith(params, searchParams);

    setSearchParams(search);
  }

  const volumeFilters = useMemo(
    () => searchParams.getAll('volume') || [],
    [searchParams],
  );
  const vendorFilters = useMemo(
    () => searchParams.getAll('vendor') || [],
    [searchParams],
  );
  const regionFilters = useMemo(
    () => searchParams.getAll('region') || [],
    [searchParams],
  );
  const categoryFilters = useMemo(
    () => searchParams.getAll('category') || [],
    [searchParams],
  );

  const query = searchParams.get('query') || '';

  const sortBy = searchParams.get('sort') || SortValues.price;

  const clearFilters = () => setSearchParams('');

  const toggleCategory = (name: string) => {
    const newCategories = categoryFilters.includes(name)
      ? categoryFilters.filter(category => name !== category)
      : [...categoryFilters, name];

    setSearchWith({ category: newCategories });
  };

  const toggleVolume = (name: string) => {
    const newVolumes = volumeFilters.includes(name)
      ? volumeFilters.filter(volume => name !== volume)
      : [...volumeFilters, name];

    setSearchWith({ volume: newVolumes });
  };

  const toggleVendor = (name: string) => {
    const newVendros = vendorFilters.includes(name)
      ? vendorFilters.filter(vendor => name !== vendor)
      : [...vendorFilters, name];

    setSearchWith({ vendor: newVendros });
  };

  const toggleRegion = (name: string) => {
    const newRegions = regionFilters.includes(name)
      ? regionFilters.filter(region => name !== region)
      : [...regionFilters, name];

    setSearchWith({ region: newRegions });
  };

  const handleAddRegionClick = () => setIsRegionsHidden(false);

  const page = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 9;
  const total = drinksFromServer.length;
  const firstItem = (page - 1) * itemsPerPage;
  const lastItem =
    firstItem + itemsPerPage < total ? firstItem + itemsPerPage : total;

  const preparedRegions = [...regionsFromServer].sort((reg1, reg2) => {
    if (
      regionFilters.includes(reg2.name) &&
      !regionFilters.includes(reg1.name)
    ) {
      return 1;
    } else if (
      regionFilters.includes(reg1.name) &&
      !regionFilters.includes(reg2.name)
    ) {
      return -1;
    } else {
      return 0;
    }
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchWith({ query: inputValue });
  };

  function sortGoods(sortValue: SortValues) {
    switch (sortValue) {
      case SortValues.price:
        return (drink1: Drink, drink2: Drink): number =>
          +drink1.price - +drink2.price;

      case SortValues.rating:
        return (drink1: Drink, drink2: Drink): number =>
          drink2.rating - drink1.rating;
    }
  }

  const dropdownOptions = Object.values(SortValues);

  const preparedItems = useMemo(() => {
    return [...drinksFromServer]
      .slice(firstItem, lastItem)
      .filter(
        item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.producer.name.toLowerCase().includes(query.toLowerCase()),
      )
      .filter(item =>
        volumeFilters.length
          ? volumeFilters.includes(`${item.volume.name}`)
          : true,
      )
      .filter(item =>
        regionFilters.length
          ? regionFilters.includes(`${item.region.name}`)
          : true,
      )
      .filter(item =>
        categoryFilters.length
          ? categoryFilters.includes(`${item.drink_type.name}`)
          : true,
      )
      .filter(item =>
        vendorFilters.length
          ? vendorFilters.includes(`${item.producer.name}`)
          : true,
      )
      .sort(sortGoods(sortBy as SortValues));
  }, [
    drinksFromServer,
    firstItem,
    lastItem,
    sortBy,
    query,
    volumeFilters,
    regionFilters,
    categoryFilters,
    vendorFilters,
  ]);

  return (
    <div className="catalog">
      <Container classes={['catalog__container']}>
        <h2 className="catalog__title">ПІДБЕРЕМО НАЙКРАЩЕ!</h2>

        <form className="catalog__input-wrapper" onSubmit={onFormSubmit}>
          <div className="catalog__input-label">
            <input
              className="catalog__input"
              type="text"
              placeholder="Пошук"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />

            <button
              className="catalog__input-clear"
              disabled={inputValue.length === 0}
              onClick={() => setInputValue('')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="catalog__input-svg"
                  d="M1 1L8 8M8 8L15 1M8 8L1 15M8 8L15 15"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <button
            className="catalog__input-button"
            aria-label="search button"
            type="submit"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.988 21L17.6273 16.657M17.6273 16.657C18.3733 15.9141 18.9649 15.0322 19.3686 14.0615C19.7723 13.0909 19.9801 12.0506 19.9801 11C19.9801 9.94939 19.7723 8.90908 19.3686 7.93845C18.965 6.96782 18.3733 6.08588 17.6273 5.34299C16.8814 4.6001 15.9959 4.01081 15.0213 3.60877C14.0467 3.20672 13.0022 2.99979 11.9473 2.99979C10.8924 2.99979 9.84789 3.20672 8.87331 3.60877C7.89873 4.01081 7.01321 4.6001 6.26729 5.34299C4.76086 6.84332 3.91455 8.87821 3.91455 11C3.91455 13.1218 4.76086 15.1567 6.26729 16.657C7.77373 18.1573 9.8169 19.0002 11.9473 19.0002C14.0777 19.0002 16.1209 18.1573 17.6273 16.657Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        <div className="catalog__wrapper">
          <div className="catalog__settings">
            <div className="catalog__settings-block">
              <h3 className="catalog__settings-title">КАТЕГОРІЇ</h3>

              <div className="catalog__checkboxes">
                {categoriesFromServer.map(cat => (
                  <Checkbox
                    title={cat.name}
                    key={cat.id}
                    checked={categoryFilters.includes(cat.name)}
                    onChange={() => toggleCategory(cat.name)}
                  />
                ))}
              </div>
            </div>

            <div className="catalog__settings-block">
              <h3 className="catalog__settings-title">Сортування</h3>

              <div className="catalog__settings-group">
                <h4 className="catalog__settings-group-title">
                  Спершу показувати
                </h4>

                <Dropdown
                  options={dropdownOptions}
                  onSelect={value => {
                    if (value === SortValues.price) {
                      setSearchWith({ sort: null });
                    } else {
                      setSearchWith({ sort: value });
                    }
                  }}
                  selectedOption={sortBy}
                />
              </div>
            </div>

            <div className="catalog__settings-block">
              <h3 className="catalog__settings-title catalog__settings-title--small-margin">
                Фільтри
              </h3>

              <button
                className="catalog__clear-filters"
                onClick={() => clearFilters()}
              >
                Очистити фільтри
              </button>

              <div className="catalog__settings-groups">
                <div className="catalog__settings-group">
                  <h4 className="catalog__settings-group-title">
                    Область виробництва
                  </h4>

                  <div className="catalog__checkboxes">
                    <p
                      className={classNames('catalog__add-title', {
                        'catalog__add-title--hidden': isRegionsHidden,
                      })}
                    >
                      Додати
                    </p>

                    {preparedRegions.map(region => (
                      <Checkbox
                        title={region.name}
                        key={region.id}
                        checked={regionFilters.includes(region.name)}
                        isHidden={isRegionsHidden}
                        onChange={() => toggleRegion(region.name)}
                      />
                    ))}

                    <button
                      className={classNames('catalog__add-region', {
                        'catalog__add-region--hidden': !isRegionsHidden,
                      })}
                      onClick={handleAddRegionClick}
                    >
                      Додати
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.24264 1.25736L5.24264 5.5M5.24264 5.5L9.48528 5.5M5.24264 5.5L1 5.5M5.24264 5.5L5.24264 9.74264"
                          stroke="#210901"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <button
                    className={classNames('catalog__regions-hide', {
                      'catalog__regions-hide--hidden': isRegionsHidden,
                    })}
                    onClick={() => setIsRegionsHidden(true)}
                  >
                    Приховати
                  </button>
                </div>

                <div className="catalog__settings-group">
                  <h4 className="catalog__settings-group-title">Об’єм</h4>

                  <div className="catalog__checkboxes">
                    {volumesFromServer.map(volume => (
                      <Checkbox
                        title={volume.name}
                        key={volume.id}
                        checked={volumeFilters.includes(volume.name)}
                        onChange={() => toggleVolume(volume.name)}
                      />
                    ))}
                  </div>
                </div>

                <div className="catalog__settings-group">
                  <h4 className="catalog__settings-group-title">Виробники</h4>

                  <div className="catalog__settings-vendors">
                    {vendorsFromServer.map(vendor => (
                      <CheckboxVendor
                        key={vendor.id}
                        title={vendor.name}
                        checked={vendorFilters.includes(vendor.name)}
                        onChange={() => toggleVendor(vendor.name)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="catalog__content">
            <h2 className="catalog__content-title">Результати пошуку</h2>

            <div className="catalog__results">
              <>
                {preparedItems.length === 0 ? (
                  <div className="catalog__no-results">
                    Збігів не знайдено. Спробуйте ввести запит інакше
                  </div>
                ) : (
                  <div className="catalog__results-title">
                    <span>Знайдено результатів за вашим запитом:</span>

                    <span>{preparedItems.length}</span>
                  </div>
                )}
              </>

              <div className="catalog__cards">
                {preparedItems.map(item => (
                  <Card
                    key={item.id}
                    product={item}
                    classname="catalog__card"
                  />
                ))}
              </div>
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
        </div>

        <Choise className="catalog__choise" />
      </Container>
    </div>
  );
};
