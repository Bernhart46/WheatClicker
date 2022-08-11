import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface WheatState {
  wheat: number;
}

const initialState: WheatState = {
  wheat: 0,
};

export const wheatSlice = createSlice({
  name: 'wheatReducer',
  initialState,
  reducers: {
    addWheat: (state, action: PayloadAction<number>) => {
      state.wheat += action.payload;
    },
  },
});

export const { addWheat } = wheatSlice.actions;

export default wheatSlice.reducer;
