import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface ModalSlice {
  isOn: boolean;
  title: string;
}

const initialState: ModalSlice = {
  isOn: false,
  title: '',
};

export const modalSlice = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOn = true;
      state.title = action.payload;
    },
    closeModal: (state) => {
      state.isOn = false;
      state.title = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
