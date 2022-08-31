import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import toolsReducer from './slices/toolsSlice';
import userReducer from './slices/userSlice';
import inventoryReducer from './slices/inventorySlice';

export const store = configureStore({
  reducer: {
    modalReducer: modalReducer,
    toolsReducer: toolsReducer,
    userReducer: userReducer,
    inventoryReducer: inventoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
