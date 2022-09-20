import { BakeryItemButton } from './bakery-item-button';

export type BakeryItemType = {
  name: string;
  wheatPrice: number;
  row: 1 | 2;
  svg: JSX.Element;
};
export const BakeryItem = ({ item }: { item: BakeryItemType }) => {
  return (
    <div className="bakery-item">
      <div className="bakery-item-name">{item.name}</div>
      <div className="bakery-item-svg">{item.svg}</div>
      <BakeryItemButton {...item} />
    </div>
  );
};
