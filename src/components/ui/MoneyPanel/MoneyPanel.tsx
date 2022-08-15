import { formatNumber } from 'shared/functions';
import { useAppSelector } from 'store/hooks';
import './MoneyPanel.css';
export const MoneyPanel = () => {
  const store = useAppSelector((state) => state);
  const { money, wheat } = store.userReducer;
  const { wheatPerClick } = store.toolsReducer;
  return (
    <div className="money-panel">
      <h2>Money: {formatNumber(money)}</h2>
      <span>
        Wheat: {formatNumber(wheat)} (+
        {formatNumber(wheatPerClick)}/click)
      </span>
    </div>
  );
};
