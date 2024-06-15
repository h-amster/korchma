import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import * as drinkActions from './store/drinksSlice';
import * as volumesActions from './store/volumesSlice';
import * as categoriesActions from './store/categoriesSlice';
import * as producersActions from './store/producersSlice';
import * as regionsActions from './store/regionsSlice';
import { useEffect } from 'react';
import { PageLoader } from './components/PageLoader/PageLoader';
import { ErrorScreen } from './components/ErrorScreen/ErrorScreen';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Modal } from './components/Modal/Modal';

export const App = () => {
  const [isAdult, setIsAdult] = useLocalStorage('isAdult', false);

  const dispatch = useAppDispatch();

  const drinks = useAppSelector(state => state.drinks);
  const volumes = useAppSelector(state => state.volumes);
  const categories = useAppSelector(state => state.categories);
  const producers = useAppSelector(state => state.producers);
  const regions = useAppSelector(state => state.regions);

  const isLoading =
    drinks.isLoading ||
    volumes.isLoading ||
    categories.isLoading ||
    producers.isLoading ||
    regions.isLoading;

  const hasError =
    drinks.hasError ||
    volumes.hasError ||
    categories.hasError ||
    producers.hasError ||
    regions.hasError;

  useEffect(() => {
    dispatch(drinkActions.init());
    dispatch(volumesActions.init());
    dispatch(categoriesActions.init());
    dispatch(producersActions.init());
    dispatch(regionsActions.init());
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Outlet />
      </main>

      <Footer />

      {!isAdult && (
        <Modal>
          <div className="app__modal-content">
            <h2 className="app__modal-title">ВІТАЄМО!</h2>

            <p className="app__modal-subtitle">Вам вже виповнилося 18 років?</p>

            <div className="app__modal-buttons">
              <button
                className="app__modal-button"
                onClick={() => {
                  setIsAdult(true);
                }}
              >
                Так
              </button>
              <a href="https://www.google.com/" className="app__modal-button">
                Ні
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
