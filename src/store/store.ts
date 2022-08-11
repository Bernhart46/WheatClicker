import { configureStore } from '@reduxjs/toolkit';
import wheatReducer from './slices/wheatSlice';

export const store = configureStore({
  reducer: {
    wheatReducer: wheatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
