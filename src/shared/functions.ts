import { useAppSelector } from 'store/hooks';

const capitalizeFirstLetter = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const formatNumber = (input: number) => {
  return input.toLocaleString(navigator.language);
};

const useGetItemAmount = (name: string) => {
  const state = useAppSelector((state) => state.inventoryReducer);
  const items = state.inventory.filter((slot) => slot.name === name);
  return items.reduce((prev, curr) => prev + curr.amount, 0);
};

export { capitalizeFirstLetter, formatNumber, useGetItemAmount };
