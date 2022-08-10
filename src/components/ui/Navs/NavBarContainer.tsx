import { NavBar } from './NavBar';
import { NavListProps } from './Nav.types';

export const NavBarContainer = ({ buttonList }: NavListProps) => {
  return (
    <>
      <NavBar navSide="left" buttonList={buttonList} />
      <NavBar navSide="bottom" buttonList={buttonList} />
      <NavBar navSide="right" buttonList={buttonList} />
    </>
  );
};
