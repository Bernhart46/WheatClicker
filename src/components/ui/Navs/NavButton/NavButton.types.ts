import { NavSide } from 'components/ui/Navs/Nav.types';

export type ButtonListItem = {
  name: string;
  navSide: NavSide;
  svg: () => JSX.Element;
};

export type NavButtonProps = Omit<ButtonListItem, 'navSide'>;
