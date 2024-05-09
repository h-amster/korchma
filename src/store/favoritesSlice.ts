/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavItem } from '../types/FavItem';

export interface FavoritesState {
  favorites: FavItem[];
}

const initialFavoritesIds = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites') as string)
  : [];

const initialState: FavoritesState = {
  favorites: initialFavoritesIds,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      const newItem: FavItem = { id: action.payload, date: Date.now() };

      state.favorites.push(newItem);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearFavorites: state => {
      state.favorites = [];

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
