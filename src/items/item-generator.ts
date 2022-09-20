import { BaguetteSvg } from 'svgs/items/baguette.svg';
import { BreadSvg } from 'svgs/items/bread.svg';
import { BunSvg } from 'svgs/items/bun.svg';
import { CakeSvg } from 'svgs/items/cake.svg';
import { CheesecakeSvg } from 'svgs/items/cheesecake.svg';
import { CupCakeSvg } from 'svgs/items/cupcake.svg';
import { DonutSvg } from 'svgs/items/donut.svg';
import { FlourSvg } from 'svgs/items/flour.svg';
import { PieSvg } from 'svgs/items/pie.svg';
import { PizzaSvg } from 'svgs/items/pizza.svg';
import { PretzelSvg } from 'svgs/items/pretzel.svg';

export const itemGenerator = (
  name: string,
  amount: number,
  index: number = 0
) => {
  return {
    name: name,
    amount,
    index,
    svg: itemSvgGenerator(name),
  };
};

export const itemSvgGenerator = (name: string) => {
  switch (name) {
    case 'Flour':
      return FlourSvg({ position: 'absolute' });
    case 'Bun':
      return BunSvg({ position: 'absolute' });
    case 'Pretzel':
      return PretzelSvg({ position: 'absolute' });
    case 'Baguette':
      return BaguetteSvg({ position: 'absolute' });
    case 'Bread':
      return BreadSvg({ position: 'absolute' });
    case 'Pizza':
      return PizzaSvg({ position: 'absolute' });
    case 'Donut':
      return DonutSvg({ position: 'absolute' });
    case 'Cupcake':
      return CupCakeSvg({ position: 'absolute' });
    case 'Pie':
      return PieSvg({ position: 'absolute' });
    case 'Cake':
      return CakeSvg({ position: 'absolute' });
    case 'Cheesecake':
      return CheesecakeSvg({ position: 'absolute' });
    default:
      return FlourSvg({ position: 'absolute' });
    //temp. default
  }
};
