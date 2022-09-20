import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modal-slice';
import toolsReducer from './slices/tools-slice';
import userReducer from './slices/user-slice';
import inventoryReducer from './slices/inventory-slice';

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
