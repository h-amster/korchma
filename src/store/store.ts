import { configureStore } from '@reduxjs/toolkit';
import drinksSlice from './drinksSlice';
import volumesSlice from './volumesSlice';
import categoriesSlice from './categoriesSlice';
import producersSlice from './producersSlice';
import regionsSlice from './regionsSlice';
import favoritesSlice from './favoritesSlice';

export const store = configureStore({
  reducer: {
    drinks: drinksSlice,
    volumes: volumesSlice,
    categories: categoriesSlice,
    producers: producersSlice,
    regions: regionsSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
