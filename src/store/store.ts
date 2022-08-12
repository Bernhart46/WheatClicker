import { configureStore } from '@reduxjs/toolkit';
import wheatReducer from './slices/wheatSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    wheatReducer: wheatReducer,
    modalReducer: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
