import { BaguetteSvg } from 'components/svgs/items/baguette.svg';
import { BreadSvg } from 'components/svgs/items/bread.svg';
import { BunSvg } from 'components/svgs/items/bun.svg';
import { CakeSvg } from 'components/svgs/items/cake.svg';
import { CheesecakeSvg } from 'components/svgs/items/cheesecake.svg';
import { CupCakeSvg } from 'components/svgs/items/cupcake.svg';
import { DonutSvg } from 'components/svgs/items/donut.svg';
import { PieSvg } from 'components/svgs/items/pie.svg';
import { PizzaSvg } from 'components/svgs/items/pizza.svg';
import { PretzelSvg } from 'components/svgs/items/pretzel.svg';
import { itemGenerator } from 'items/itemGenerator';
import { useState } from 'react';
import { useGetItemAmount } from 'shared/functions';
import { useAppDispatch } from 'store/hooks';
import { addItem, removeItem } from 'store/slices/inventorySlice';
import { getPriceColor } from '../ToolsWindow/ToolsBuyButton';
import './BakeryWindow.css';

type BakeryItemType = {
  name: string;
  wheatPrice: number;
  row: 1 | 2;
  svg: JSX.Element;
};

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

const BakeryItem = ({ item }: { item: BakeryItemType }) => {
  return (
    <div className="bakery-item">
      <div className="bakery-item-name">{item.name}</div>
      <div className="bakery-item-svg">{item.svg}</div>
      <BakeryItemBuyButton {...item} />
    </div>
  );
};

const BakeryItemBuyButton = (item: BakeryItemType) => {
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

const bakeryGoodsList: BakeryItemType[] = [
  {
    name: 'Bun',
    wheatPrice: 5,
    row: 1,
    svg: <BunSvg position="static" />,
  },
  {
    name: 'Pretzel',
    wheatPrice: 10,
    row: 1,
    svg: <PretzelSvg position="static" />,
  },
  {
    name: 'Baguette',
    wheatPrice: 100,
    row: 1,
    svg: <BaguetteSvg position="static" />,
  },
  {
    name: 'Bread',
    wheatPrice: 150,
    row: 1,
    svg: <BreadSvg position="static" />,
  },
  {
    name: 'Pizza',
    wheatPrice: 500,
    row: 1,
    svg: <PizzaSvg position="static" />,
  },
  {
    name: 'Donut',
    wheatPrice: 10,
    row: 2,
    svg: <DonutSvg position="static" />,
  },
  {
    name: 'Cupcake',
    wheatPrice: 20,
    row: 2,
    svg: <CupCakeSvg position="static" />,
  },
  {
    name: 'Pie',
    wheatPrice: 150,
    row: 2,
    svg: <PieSvg position="static" />,
  },
  {
    name: 'Cake',
    wheatPrice: 1000,
    row: 2,
    svg: <CakeSvg position="static" />,
  },
  {
    name: 'Cheesecake',
    wheatPrice: 1500,
    row: 2,
    svg: <CheesecakeSvg position="static" />,
  },
];
