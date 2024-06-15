/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import './Footer.scss';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container classes={['footer__container']}>
        <div className="footer__block">
          <Logo />

          <div className="footer__copy">
            Платформа з пошуку крафтових
            <br />
            алкогольних напоїв
            <br />
            КОРЧМА 2024
          </div>
        </div>

        <div className="footer__catalog">
          <h2 className="footer__title">Каталог</h2>

          <ul className="footer__list footer__list--grid">
            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Пиво"
                onClick={() => window.scrollTo(0, 0)}
              >
                Пиво
              </Link>
            </li>

            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Сидр"
                onClick={() => window.scrollTo(0, 0)}
              >
                Сидр
              </Link>
            </li>

            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Вино"
                onClick={() => window.scrollTo(0, 0)}
              >
                Вино
              </Link>
            </li>

            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Наливки"
                onClick={() => window.scrollTo(0, 0)}
              >
                Наливки
              </Link>
            </li>

            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Лікери"
                onClick={() => window.scrollTo(0, 0)}
              >
                Лікери
              </Link>
            </li>

            <li className="footer__list-item">
              <Link
                className="footer__link"
                to="/catalog?category=Комбуча"
                onClick={() => window.scrollTo(0, 0)}
              >
                Комбуча
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__info">
          <h2 className="footer__title">Інформація</h2>

          <ul className="footer__list">
            <li className="footer__list-item">
              <Link className="footer__link" to="/faq">
                FAQ
              </Link>
            </li>

            <li className="footer__list-item">
              <Link className="footer__link" to="/about">
                Про проєкт
              </Link>
            </li>

            <li className="footer__list-item">
              <Link className="footer__link" to="/vendors">
                Виробникам
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h2 className="footer__title">Контакти</h2>

          <div className="footer__contacts-content">
            <ul className="footer__contacts-list footer__contacts-list--1">
              <li className="footer__list-item">
                <a className="footer__link" href="tel:+380674568312">
                  +38 (067) 456 83 12
                </a>
              </li>

              <li className="footer__list-item footer__list-item--small">
                Пн-пт з 9:00 до 17:00
              </li>
            </ul>

            <ul className="footer__contacts-list footer__contacts-list--2">
              <li className="footer__list-item">
                <a className="footer__link" href="mailto:info@korchma.com">
                  info@korchma.com
                </a>
              </li>

              <li className="footer__list-item">
                <a
                  className="footer__link footer__link--instagram"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Insta</span> <span>@korchma.platform</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
