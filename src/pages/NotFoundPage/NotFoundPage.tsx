import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div>
        <h1 className="not-found__title">ЩОСЬ ПІШЛО НЕ ТАК :(</h1>

        <p className="not-found__subtitle">
          На жаль сторінка за вашим запитом не знайдена.
        </p>

        <p className="not-found__try-again">Давайте спробуємо заново</p>

        <div className="not-found__links">
          <Link className="not-found__link" to="/">
            Повернутися на головну
          </Link>
          <Link className="not-found__link" to="/catalog">
            Перейти в каталог
          </Link>
          <Link className="not-found__link" to="/about">
            Прочитати про проєкт
          </Link>
        </div>
      </div>
    </div>
  );
};
