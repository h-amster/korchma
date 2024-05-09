import * as drinkActions from '../../store/drinksSlice';
import * as volumesActions from '../../store/volumesSlice';
import * as categoriesActions from '../../store/categoriesSlice';
import * as producersActions from '../../store/producersSlice';
import * as regionsActions from '../../store/regionsSlice';
import './ErrorScreen.scss';
import { useAppDispatch } from '../../store/hooks';

export const ErrorScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    dispatch(drinkActions.init());
    dispatch(volumesActions.init());
    dispatch(categoriesActions.init());
    dispatch(producersActions.init());
    dispatch(regionsActions.init());
  };

  return (
    <div className="error-screen">
      <h1 className="error-screen__title">УПС</h1>

      <p className="error-screen__subtitle">Сталася помилка :&#40;</p>
      <button className="error-screen__btn" onClick={handleBtnClick}>
        Спробувати знову
      </button>
    </div>
  );
};
