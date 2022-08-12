import { ButtonListItem } from 'components/ui/Navs/NavButton/NavButton.types';

export type NavSide = 'left' | 'right' | 'bottom';

export type NavProps = {
  navSide: NavSide;
  buttonList: ButtonListItem[];
};
export type NavListProps = {
  buttonList: ButtonListItem[];
};
export type NavBarButtonContainerProps = {
  navBarSide: NavSide;
  buttonList: ButtonListItem[];
};
export type NavBarProps = {
  navBarSide: NavSide;
};
