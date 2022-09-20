import { BaguetteSvg } from 'svgs/items/baguette.svg';
import { BreadSvg } from 'svgs/items/bread.svg';
import { BunSvg } from 'svgs/items/bun.svg';
import { CakeSvg } from 'svgs/items/cake.svg';
import { CheesecakeSvg } from 'svgs/items/cheesecake.svg';
import { CupCakeSvg } from 'svgs/items/cupcake.svg';
import { DonutSvg } from 'svgs/items/donut.svg';
import { PieSvg } from 'svgs/items/pie.svg';
import { PizzaSvg } from 'svgs/items/pizza.svg';
import { PretzelSvg } from 'svgs/items/pretzel.svg';
import { BakeryItemType } from './bakery-item';

export const bakeryGoodsList: BakeryItemType[] = [
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
