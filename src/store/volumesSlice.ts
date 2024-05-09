/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';
import { Volume } from '../types/Volume';

export const init = createAsyncThunk('volumes/fetch', () => {
  return httpClient.getVolumes();
});

type VolumesState = {
  volumes: Volume[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: VolumesState = {
  volumes: [],
  isLoading: false,
  hasError: false,
};

const volumesSlice = createSlice({
  name: 'volumes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.volumes = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

export default volumesSlice.reducer;
