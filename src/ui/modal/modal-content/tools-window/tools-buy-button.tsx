import { useState } from 'react';
import { formatNumber } from 'shared/functions';
import { useAppDispatch } from 'store/hooks';
import { buyTool, ToolTypes } from 'store/slices/tools-slice';
import { decreaseMoney } from 'store/slices/user-slice';
import { ToolBuyButtonProps } from './tools-types';
import { keyDownType } from './tools-types';

export const ToolBuyButton = ({ state, keyDown, name }: ToolBuyButtonProps) => {
  const dispatch = useAppDispatch();
  const { price, price10, price100 } = state.toolsReducer[name];
  const { money } = state.userReducer;

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };
  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const handleClick = () => {
    if (keyDown === 'Shift') {
      if (price100 <= money) {
        dispatchBuyTool(price100, name, 100);
      }
      return;
    }
    if (keyDown === 'CTRL') {
      if (price10 <= money) {
        dispatchBuyTool(price10, name, 10);
      }
      return;
    }
    if (price <= money) {
      dispatchBuyTool(price, name, 1);
    }
  };
  const dispatchBuyTool = (price: number, name: ToolTypes, value: number) => {
    dispatch(decreaseMoney(price));
    dispatch(buyTool({ name, value }));
  };
  return (
    <div
      className="tool-button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isButtonHovered
          ? getPriceColorByPrice(keyDown, [price, price10, price100], money)
          : '',
      }}
    >
      {isButtonHovered ? (
        <span>
          Price:{' '}
          {keyDown === 'Shift'
            ? formatNumber(price100)
            : keyDown === 'CTRL'
            ? formatNumber(price10)
            : formatNumber(price)}
        </span>
      ) : (
        <span>
          Buy {keyDown === 'Shift' ? '100' : keyDown === 'CTRL' ? '10' : '1'}
        </span>
      )}
    </div>
  );
};

const getPriceColorByPrice = (
  keyDown: keyDownType,
  priceArray: Array<number>,
  money: number
) => {
  if (keyDown === 'Shift') {
    return getPriceColor(priceArray[2], money);
  }
  if (keyDown === 'CTRL') {
    return getPriceColor(priceArray[1], money);
  }
  if (keyDown === '') {
    return getPriceColor(priceArray[0], money);
  }
};

export const getPriceColor = (price: number, money: number) => {
  return price <= money ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.2)';
};
