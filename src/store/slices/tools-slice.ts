import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type ToolTypes = 'stick' | 'shovel' | 'rake' | 'hoe';

interface Tool<T = number> {
  level: number;
  wheatValue: T;
  price: number;
  price10: number;
  price100: number;
}
interface ToolsState {
  stick: Tool<1>;
  shovel: Tool<5>;
  rake: Tool<10>;
  hoe: Tool<50>;
  wheatPerClick: number;
  [key: string]: Tool | number;
}

const initialState: ToolsState = {
  stick: {
    level: 1,
    wheatValue: 1,
    price: 1,
    price10: 195,
    price100: 169200,
  },
  shovel: {
    level: 1,
    wheatValue: 5,
    price: 3,
    price10: 965,
    price100: 845900,
  },
  rake: {
    level: 1,
    wheatValue: 10,
    price: 5,
    price10: 1925,
    price100: 1691750,
  },
  hoe: {
    level: 1,
    wheatValue: 50,
    price: 25,
    price10: 9625,
    price100: 8458750,
  },
  wheatPerClick: 1,
};
type PayloadProps = {
  name: ToolTypes;
  value: number;
};
export const toolsSlice = createSlice({
  name: 'toolsSlice',
  initialState,
  reducers: {
    buyTool: (state, action: PayloadAction<PayloadProps>) => {
      const { name, value } = action.payload;
      state[name].level += value;
      let { level, wheatValue } = state[name];

      state[name].price = calculatePrice(level, wheatValue, 1);
      state[name].price10 = calculatePrice(level, wheatValue, 10);
      state[name].price100 = calculatePrice(level, wheatValue, 100);
      state.wheatPerClick += state[name].wheatValue * value;
    },
  },
});

const calculatePrice = (
  level: number,
  wheatValue: number,
  howManyTimes: number
) => {
  let calculatedPrice = 0;
  let calculatedLevel = level;
  for (let i = 0; i < howManyTimes; i++) {
    calculatedPrice += Math.ceil(
      calculatedLevel * (calculatedLevel * ((wheatValue * 50) / 100))
    );
    calculatedLevel++;
  }

  return calculatedPrice;
};

export const { buyTool } = toolsSlice.actions;

export default toolsSlice.reducer;
