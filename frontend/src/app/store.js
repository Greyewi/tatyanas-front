import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import cinemahallReducer from '../features/admin/cinemahall/CinemahallSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinemahall: cinemahallReducer,
  },
});
