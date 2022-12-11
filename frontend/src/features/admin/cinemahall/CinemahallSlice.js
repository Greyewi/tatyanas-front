import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


const initialState = {
  cinemahalls: [],
  places: [],
  isLoading: false
};

export const createCinemaHallAsync = createAsyncThunk(
  'cinemahall/createCinemaHall',
  async ({count_x, count_y, callback}) => {
    const response = await axios.post('http://127.0.0.1:8000/api/cinemahall', {count_x, count_y})
    callback && callback()
    return response.data;
  }
);

export const getCinemaHallAsync = createAsyncThunk(
  'cinemahall/getCinemaHall',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/cinemahall')
    return response.data;
  }
);

export const getPlacesAsync = createAsyncThunk(
  'cinemahall/getPlaces',
  async (hallId) => {
    const response = await axios.get('http://127.0.0.1:8000/api/place?hall_id=' + hallId)
    return response.data;
  }
);

export const updatePlacesAsync = createAsyncThunk(
  'cinemahall/updatePlaces',
  async (places) => {
    const response = await axios.put('http://127.0.0.1:8000/api/place', {places})
    return response.data;
  }
);

export const removeCinemaHallAsync = createAsyncThunk(
  'cinemahall/removeCinemaHall',
  async ({id, callback}) => {
    const response = await axios.delete('http://127.0.0.1:8000/api/cinemahall/' + id)
    callback && callback()
    return response.data;
  }
);

export const cinemahallSlice = createSlice({
  name: 'cinemahall',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createCinemaHallAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCinemaHallAsync.fulfilled, (state,) => {
        state.isLoading = false;
      })
      .addCase(getCinemaHallAsync.pending, (state) => {
        state.isLoading = true;

      })
      .addCase(getCinemaHallAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cinemahalls = action.payload;
      })
      .addCase(getPlacesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlacesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.places = action.payload;
      })
      .addCase(updatePlacesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePlacesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state) => state.auth.user;

export default cinemahallSlice.reducer;
