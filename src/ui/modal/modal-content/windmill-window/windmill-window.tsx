import { FlourSvg } from 'svgs/items/flour.svg';
import { itemGenerator } from 'items/item-generator';
import { useState } from 'react';
import { formatNumber } from 'shared/functions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addItem } from 'store/slices/inventory-slice';
import { decreaseWheat } from 'store/slices/user-slice';
import './windmill-window.css';

export const WindmillWindow = () => {
  return (
    <div className="windmill-window">
      <h2 className="flour-h2">Flour</h2>
      <div className="windmill-flour-svg">
        <FlourSvg position="static" />
      </div>
      <div className="windmill-button-container">
        {[1, 100, 1000].map((button) => {
          return <WindmillButton key={button} button={button} />;
        })}
      </div>
    </div>
  );
};

const WindmillButton = ({ button }: { button: number }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const wheat = useAppSelector((state) => state.userReducer.wheat);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    if (button * 1000 <= wheat) {
      dispatch(addItem(itemGenerator('Flour', button)));
      dispatch(decreaseWheat(button * 1000));
    }
  };

  return (
    <div
      className="windmill-button"
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
      onClick={clickHandler}
      style={{
        backgroundColor: isButtonHovered
          ? getPriceColor(button * 1000, wheat)
          : '',
      }}
    >
      {isButtonHovered
        ? `${formatNumber(button * 1000)} wheats`
        : `Buy ${button}`}
    </div>
  );
};

const getPriceColor = (price: number, money: number) => {
  return price <= money ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.2)';
};
