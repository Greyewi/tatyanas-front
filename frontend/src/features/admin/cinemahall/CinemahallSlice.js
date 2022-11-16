import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


const initialState = {
  cinemahalls: [],
  isLoading: false
};

export const createCinemaHallAsync = createAsyncThunk(
  'auth/signIn',
  async ({count_x, count_y}) => {
    const response = await axios.post('127.0.0.1:8000/cinemahall', {count_x, count_y})
    return response.data;
  }
);

export const getCinemaHallAsync = createAsyncThunk(
  'auth/signUp',
  async ({count_x, count_y}) => {
    const response = await axios.get('127.0.0.1:8000/cinemahall')
    return response.data;
  }
);

export const removeCinemaHallAsync = createAsyncThunk(
  'auth/signUp',
  async ({id}) => {
    const response = await axios.delete('127.0.0.1:8000/cinemahall', {id})
    return response.data;
  }
);

export const cinemahallSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createCinemaHallAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCinemaHallAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getCinemaHallAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCinemaHallAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
