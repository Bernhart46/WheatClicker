import { NavSide } from 'ui/navs/nav.types';

export type ButtonListItem = {
  name: string;
  navSide: NavSide;
  svgIcon: () => JSX.Element;
};

export type NavButtonProps = Omit<ButtonListItem, 'navSide'>;
