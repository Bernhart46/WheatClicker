import { useAppSelector } from 'store/hooks';
import './MoneyPanel.css';
export const MoneyPanel = () => {
  const wheat = useAppSelector((state) => state.wheatReducer.wheat);
  return (
    <div className="money-panel">
      <h2>Money: 100.000.000</h2>
      <span>Wheat: {wheat}</span>
    </div>
  );
};
