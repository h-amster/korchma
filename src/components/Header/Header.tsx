import React from 'react';
import { Nav } from '../Nav/Nav';
import './Header.scss';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const favorites = useAppSelector(state => state.favorites.favorites);

  return (
    <header className="header">
      <Container classes={['header__container']}>
        <Logo />

        <div className="header__content">
          <Nav />

          <Link
            to="/favorites"
            className={classNames('header__favorites', {
              'header__favorites--empty': favorites.length === 0,
            })}
            aria-label="favorites button"
            data-count={favorites.length}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // eslint-disable-next-line max-len
                d="M12 6.5L11.376 6.91603C11.5151 7.12467 11.7492 7.25 12 7.25C12.2508 7.25 12.4849 7.12467 12.624 6.91603L12 6.5ZM12.4732 20.729L12.0929 20.0825L12.4732 20.729ZM1.75 8.4C1.75 6.43235 2.51583 5.31459 3.43464 4.66122C4.39439 3.97873 5.60106 3.75 6.5 3.75V2.25C5.39894 2.25 3.85561 2.52127 2.56536 3.43878C1.23417 4.3854 0.25 5.96765 0.25 8.4H1.75ZM6.5 3.75C7.54458 3.75 8.51737 4.16779 9.36898 4.7923C10.2214 5.41743 10.9137 6.22265 11.376 6.91603L12.624 6.08397C12.0863 5.27735 11.2786 4.33257 10.256 3.5827C9.23263 2.83221 7.95542 2.25 6.5 2.25V3.75ZM12.624 6.91603C13.0863 6.22265 13.7786 5.41743 14.631 4.7923C15.4826 4.16779 16.4554 3.75 17.5 3.75V2.25C16.0446 2.25 14.7674 2.83221 13.744 3.5827C12.7214 4.33257 11.9137 5.27735 11.376 6.08397L12.624 6.91603ZM17.5 3.75C18.3989 3.75 19.6056 3.97873 20.5654 4.66122C21.4842 5.31459 22.25 6.43235 22.25 8.4H23.75C23.75 5.96765 22.7658 4.3854 21.4346 3.43878C20.1444 2.52127 18.6011 2.25 17.5 2.25V3.75ZM22.25 8.4C22.25 10.9489 20.3643 13.5289 18.0154 15.7163C15.7051 17.8677 13.1268 19.4742 12.0929 20.0825L12.8536 21.3754C13.9261 20.7444 16.6112 19.0736 19.0377 16.814C21.4256 14.5903 23.75 11.6255 23.75 8.4H22.25ZM11.9071 20.0825C10.8732 19.4742 8.2949 17.8677 5.98458 15.7163C3.63571 13.5289 1.75 10.9489 1.75 8.4H0.25C0.25 11.6255 2.57445 14.5903 4.96234 16.814C7.38879 19.0736 10.0739 20.7444 11.1464 21.3754L11.9071 20.0825ZM12.0929 20.0825C12.0346 20.1168 11.9654 20.1168 11.9071 20.0825L11.1464 21.3754C11.6742 21.6859 12.3258 21.6859 12.8536 21.3754L12.0929 20.0825Z"
                fill="#f4f4f1"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  );
};
