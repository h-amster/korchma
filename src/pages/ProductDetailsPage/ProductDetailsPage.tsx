import { Link, useLocation } from 'react-router-dom';
import './ProductDetailsPage.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { httpClient } from '../../utils/httpClient';
import { Container } from '../../components/Container/Container';
import { ProductFull } from '../../types/PeoductFull';
import { Stars } from '../../components/Stars/Stars';
import { CommentBlock } from '../../components/Comment/CommentBlock';
import { ProductTabs } from '../../types/ProductTabs';
import { PageLoader } from '../../components/PageLoader/PageLoader';
// eslint-disable-next-line max-len
import { DrinksFromVendor } from '../../components/DrinksFromVendor/DrinksFromVendor';

export const ProductDetailsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const id = Number(location.pathname.split('/').at(-1));
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<number[]>(
    'recentlyViewed',
    [],
  );
  const [productData, setProductData] = useState<ProductFull | null>(null);
  const [tab, setTab] = useState(ProductTabs.Description);
  const [currentPhoto, setCurrentPhoto] = useState('');

  const roundedRating = productData?.rating
    ? Math.round(productData.rating)
    : 0;

  useEffect(() => {
    setIsLoading(true);

    httpClient
      .getDrinkById(id)
      .then(res => {
        setProductData(res);
        setCurrentPhoto(res.photos[0].image);
      })
      .finally(() => setIsLoading(false));

    if (recentlyViewed.includes(id)) {
      return;
    }

    if (recentlyViewed.length >= 4) {
      setRecentlyViewed([id, ...recentlyViewed.slice(0, 3)]);
    } else {
      setRecentlyViewed([id, ...recentlyViewed]);
    }
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  const productTabsValues = Object.values(ProductTabs);

  const getTabContent = () => {
    switch (tab) {
      case ProductTabs.Description:
        return (
          <section className="product__section">
            <h2 className="product__section-title">Опис товару</h2>

            <p className="product__description-text">
              {productData?.descriptions}
            </p>
          </section>
        );

      case ProductTabs.Details:
        return (
          <section className="product__section">
            <h2 className="product__section-title">ДЕТАЛІ</h2>

            <dl className="product__details">
              {productData?.drink_type.name && (
                <div className="product__details-block">
                  <dt className="product__details-term">Категорія напою</dt>
                  <dd className="product__details-description">
                    {productData?.drink_type.name}
                  </dd>
                </div>
              )}

              {productData?.strength && (
                <div className="product__details-block">
                  <dt className="product__details-term">Міцність</dt>
                  <dd className="product__details-description">
                    {productData?.strength}
                  </dd>
                </div>
              )}

              {productData?.volume.name && (
                <div className="product__details-block">
                  <dt className="product__details-term">Об’єм</dt>
                  <dd className="product__details-description">
                    {productData?.volume.name}
                  </dd>
                </div>
              )}

              {productData?.taste_parameters && (
                <div className="product__details-block">
                  <dt className="product__details-term">Параметри смаку</dt>
                  <dd className="product__details-description">
                    {productData?.taste_parameters}
                  </dd>
                </div>
              )}

              {productData?.producer.name && (
                <div className="product__details-block">
                  <dt className="product__details-term">Виробник</dt>
                  <dd className="product__details-description">
                    {productData?.producer.name}
                  </dd>
                </div>
              )}

              {productData?.tastes_together && (
                <div className="product__details-block">
                  <dt className="product__details-term">Смакує разом</dt>
                  <dd className="product__details-description">
                    {productData?.tastes_together}
                  </dd>
                </div>
              )}
            </dl>
          </section>
        );

      case ProductTabs.Comments:
        return (
          <section className="product__section">
            <h2 className="product__section-title">
              ВІДГУКИ
              {!!productData?.count_comments && (
                <span>{`(${productData?.count_comments})`}</span>
              )}
            </h2>

            <div className="product__feedback">
              <div className="product__rating">
                {productData?.rating.toFixed(1)}

                <Stars rating={roundedRating} />
              </div>

              <button className="product__feedback-btn">Залишити відгук</button>
            </div>

            {productData?.comments.length ? (
              <ul>
                {productData?.comments.map(item => (
                  <li key={item.id}>
                    <CommentBlock comment={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="product__no-comments">Немає жодного відгука</p>
            )}
          </section>
        );
    }
  };

  const tabContent = getTabContent();

  return (
    productData && (
      <div className="product">
        <Container>
          <div className="product__wrapper">
            <div className="product__main">
              <section className="product__top">
                <div className="product__images">
                  <img
                    className="product__main-img"
                    src={currentPhoto}
                    alt="Main img"
                  />

                  <div className="product__img-buttons">
                    {productData.photos.map(photo => (
                      <button
                        className="product__img-btn"
                        key={photo.id}
                        onClick={() => setCurrentPhoto(photo.image)}
                      >
                        <img
                          className="product__photo-option"
                          src={photo.image}
                          alt="Product photo"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product__top-content">
                  <ul className="product__navigation">
                    <li className="product__navigation-item">
                      <Link to="/" className="product__navigation-link">
                        Головна
                      </Link>
                    </li>

                    <li className="product__navigation-item">&#8212;</li>

                    <li className="product__navigation-item">
                      <Link
                        to={`/catalog?category=${productData.drink_type.name}`}
                        className="product__navigation-link"
                      >
                        {productData.drink_type.name}
                      </Link>
                    </li>

                    <li className="product__navigation-item">&#8212;</li>

                    <li className="product__navigation-item">
                      {productData.name}
                    </li>
                  </ul>

                  <h2 className="product__name">{productData.name}</h2>

                  <p className="product__vendor">
                    Від{' '}
                    <Link
                      className="product__vendor-link"
                      to={`/vendorslist/${productData.producer.id}`}
                    >
                      {productData.producer.name}
                    </Link>
                  </p>

                  <div className="product__rating-block">
                    <Stars rating={roundedRating} />
                    <div className="product__comments">
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

                      <span className="product__comments-count">
                        {productData.comments.length}
                      </span>
                    </div>
                  </div>

                  <p className="product__price">{productData.price} грн</p>

                  <div className="product__characteristics">
                    <h3 className="product__characteristics-title">
                      Характеристики
                    </h3>

                    <dl className="product__details">
                      {productData?.drink_type.name && (
                        <div className="product__details-block">
                          <dt className="product__details-term">
                            Категорія напою
                          </dt>
                          <dd className="product__details-description">
                            {productData?.drink_type.name}
                          </dd>
                        </div>
                      )}

                      {productData?.strength && (
                        <div className="product__details-block">
                          <dt className="product__details-term">Міцність</dt>
                          <dd className="product__details-description">
                            {productData?.strength}
                          </dd>
                        </div>
                      )}

                      {productData?.volume.name && (
                        <div className="product__details-block">
                          <dt className="product__details-term">Об’єм</dt>
                          <dd className="product__details-description">
                            {productData?.volume.name}
                          </dd>
                        </div>
                      )}

                      {productData?.taste_parameters && (
                        <div className="product__details-block">
                          <dt className="product__details-term">
                            Параметри смаку
                          </dt>
                          <dd className="product__details-description">
                            {productData?.taste_parameters}
                          </dd>
                        </div>
                      )}

                      {productData?.tastes_together && (
                        <div className="product__details-block">
                          <dt className="product__details-term">
                            Смакує разом
                          </dt>
                          <dd className="product__details-description">
                            {productData?.tastes_together}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              </section>

              <section className="product__content">
                <div className="product__tabs">
                  {productTabsValues.map(item => (
                    <button
                      className="product__tab-btn"
                      key={item}
                      onClick={() => setTab(item)}
                      disabled={item === tab}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {tabContent}
              </section>
            </div>

            <div className="product__buy">
              <div className="product__buy-wrapper">
                <h3 className="product__buy-title">ЗАМОВИТИ</h3>

                <div className="product__buy-block">
                  <p className="product__buy-vendor">
                    Придбати напряму <br />
                    від виробника
                  </p>

                  <p className="product__buy-text">Перейти на сторінку</p>

                  <a
                    className="product__buy-link"
                    href={productData.site_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {productData.producer.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DrinksFromVendor vendor={productData.producer.name} />
        </Container>
      </div>
    )
  );
};
