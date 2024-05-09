/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';
import { Region } from '../types/Region';

export const init = createAsyncThunk('regions/fetch', () => {
  return httpClient.getRegions();
});

type DrinksState = {
  regions: Region[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: DrinksState = {
  regions: [],
  isLoading: false,
  hasError: false,
};

const regionsSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.regions = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export default regionsSlice.reducer;
