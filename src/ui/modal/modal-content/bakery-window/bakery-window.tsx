import { bakeryGoodsList } from './bakery-goods-list';
import { BakeryItem } from './bakery-item';
import './bakery-window.css';

export const BakeryWindow = () => {
  const firstRowGoods = bakeryGoodsList.filter((item) => item.row === 1);
  const secondRowGoods = bakeryGoodsList.filter((item) => item.row === 2);

  return (
    <div className="bakery-window">
      <div className="bakery-row-1">
        {firstRowGoods.map((item) => {
          return <BakeryItem key={item.name} item={item} />;
        })}
      </div>
      <div className="bakery-row-2">
        {secondRowGoods.map((item) => {
          return <BakeryItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};
