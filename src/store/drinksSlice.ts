/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Drink } from '../types/Drink';
import { httpClient } from '../utils/httpClient';

export const init = createAsyncThunk('drinks/fetch', () => {
  return httpClient.getDrinks();
});

type DrinksState = {
  drinks: Drink[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: DrinksState = {
  drinks: [],
  isLoading: false,
  hasError: false,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.drinks = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export default drinksSlice.reducer;
