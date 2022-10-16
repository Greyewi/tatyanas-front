import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchSignIn, fetchSignUp} from "./authAPI";

const initialState = {
  user: null,
  isLoading: false
};

export const authAsync = createAsyncThunk(
  'auth/signIn',
  async ({login, password}) => {
    const response = await fetchSignIn(login, password);
    return response.data;
  }
);

export const registerAsync = createAsyncThunk(
  'auth/signUp',
  async ({login, password}) => {
    const response = await fetchSignUp(login, password);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
