import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import toolsReducer from './slices/toolsSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    modalReducer: modalReducer,
    toolsReducer: toolsReducer,
    userReducer: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
