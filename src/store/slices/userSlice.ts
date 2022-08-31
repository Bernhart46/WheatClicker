import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  wheat: number;
  money: number;
  click: number;
}

const initialState: UserState = {
  wheat: 10000000000,
  money: 1000,
  click: 0,
};
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    increaseMoney: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
    },
    decreaseMoney: (state, action: PayloadAction<number>) => {
      state.money -= action.payload;
    },
    addWheat: (state, action: PayloadAction<number>) => {
      state.wheat += action.payload;
      state.click++;
    },
    decreaseWheat: (state, action: PayloadAction<number>) => {
      state.wheat -= action.payload;
    },
  },
});

export const { decreaseMoney, addWheat, decreaseWheat } = userSlice.actions;

export default userSlice.reducer;
