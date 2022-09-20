import { useState } from 'react';
import { itemGenerator } from 'items/item-generator';
import { useGetItemAmount } from 'shared/functions';
import { useAppDispatch } from 'store/hooks';
import { addItem, removeItem } from 'store/slices/inventory-slice';
import { BakeryItemType } from './bakery-item';
import { getPriceColor } from '../tools-window/tools-buy-button';

export const BakeryItemButton = (item: BakeryItemType) => {
  const amount = useGetItemAmount('Flour');
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (amount >= item.wheatPrice) {
      dispatch(removeItem({ name: 'Flour', amount: item.wheatPrice }));
      dispatch(addItem(itemGenerator(item.name, 1)));
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="bakery-item-buy-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered
          ? getPriceColor(item.wheatPrice, amount)
          : '',
      }}
    >
      {isHovered ? `Wheat: ${item.wheatPrice}` : 'Buy'}
    </div>
  );
};
