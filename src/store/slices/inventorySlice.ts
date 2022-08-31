import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './inventoryInitialState';

const MAX_ITEM_STACK_NUMBER = 1000;

export type Item = {
  name: string | null;
  index: number;
  amount: number;
  svg: JSX.Element | null;
};

export const inventorySlice = createSlice({
  name: 'inventorySlice',
  initialState,
  reducers: {
    changeIndex: (
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) => {
      const { from, to } = action.payload;
      if (from === to) return;
      const item = state.inventory.find(({ index }) => index === from);
      const otherItem = state.inventory.find(({ index }) => index === to);
      if (!item || !otherItem) return;
      if (item.name === otherItem.name) {
        if (otherItem.amount < MAX_ITEM_STACK_NUMBER) {
          const diff = MAX_ITEM_STACK_NUMBER - otherItem.amount;
          if (diff <= item.amount) {
            otherItem.amount += diff;
            item.amount -= diff;
          } else {
            otherItem.amount += item.amount;
            item.amount = 0;
          }
          if (item.amount === 0) {
            item.name = null;
          }
        }
        return;
      }
      item.index = to;
      otherItem.index = from;
      state.inventory[from] = otherItem;
      state.inventory[to] = item;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      const { inventory } = state;
      const payloadItem = action.payload;

      const findSameNameItem = (): Item | null => {
        const slot = inventory.find((slot) => {
          if (slot.amount !== 1000) {
            return slot.name === payloadItem.name;
          }
        });

        if (!slot) return null;
        return slot;
      };

      const findFirstNullItem = (): Item | null => {
        const slot = inventory.find((slot) => slot.name === null);
        if (!slot) return null;
        return slot;
      };

      const ifItemExistsAddToAmount = (item: Item | null) => {
        if (!item) return;
        if (item.amount + payloadItem.amount <= MAX_ITEM_STACK_NUMBER) {
          inventory[item.index].amount += payloadItem.amount;
        } else {
          const difference = MAX_ITEM_STACK_NUMBER - item.amount;
          item.amount += difference;
          payloadItem.amount -= difference;
          addItemToNullSlot(findFirstNullItem());
        }
      };

      const addItemToNullSlot = (item: Item | null) => {
        if (!item) return;
        payloadItem.index = item.index;
        inventory[item.index] = payloadItem;
      };

      const sameNameItem = findSameNameItem();

      if (sameNameItem) {
        ifItemExistsAddToAmount(sameNameItem);
      } else {
        addItemToNullSlot(findFirstNullItem());
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ name: string; amount: number }>
    ) => {
      const { name, amount } = action.payload;
      const items = state.inventory.filter((slot) => slot.name === name);
      const itemAmount = items.reduce((prev, curr) => prev + curr.amount, 0);
      if (itemAmount < amount) {
        state.error = 'There is not enough item.';
        return;
      }

      const returnArrayAfterRemove = () => {
        let left = amount;
        for (let i = 0; i < items.length; i++) {
          if (items[i].amount >= left) {
            items[i].amount -= left;
            if (items[i].amount === 0) {
              items[i].name = null;
            }
            break;
          }

          left -= items[i].amount;
          items[i].amount = 0;
          items[i].name = null;
        }

        state.error = '';
      };
      returnArrayAfterRemove();
    },
  },
});

export const { changeIndex, addItem, removeItem } = inventorySlice.actions;

export default inventorySlice.reducer;
