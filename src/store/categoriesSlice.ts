/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';
import { Category } from '../types/Category';

export const init = createAsyncThunk('categories/fetch', () => {
  return httpClient.getCategories();
});

type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  hasError: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
