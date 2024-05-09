/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Drink } from '../types/Drink';
import { httpClient } from '../utils/httpClient';

export const init = createAsyncThunk('producers/fetch', () => {
  return httpClient.getProducers();
});

type ProducersState = {
  producers: Drink[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: ProducersState = {
  producers: [],
  isLoading: false,
  hasError: false,
};

const producersSlice = createSlice({
  name: 'producers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.producers = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export default producersSlice.reducer;
