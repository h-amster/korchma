import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { getLinkClass } from '../../utils/getLinkClass';

export const Nav: React.FC = () => {
  const getNavLinkClass = getLinkClass(['nav__link'], ['nav__link--active']);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className={getNavLinkClass} to="/">
            Головна
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className={getNavLinkClass} to="/catalog">
            Каталог
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className={getNavLinkClass} to="/about">
            Про проєкт
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className={getNavLinkClass} to="/vendors">
            Виробникам
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
