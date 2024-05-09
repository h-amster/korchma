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

export const App = () => {
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
    </div>
  );
};
