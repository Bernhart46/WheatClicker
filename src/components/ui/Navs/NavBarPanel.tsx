import { NavBarSvg } from 'components/svgs/nav-bar.svg';
import { NavLongBarSvg } from 'components/svgs/nav-long-bar.svg';
import { NavBarProps } from './Nav.types';

export const NavBarPanel = ({ navBarSide }: NavBarProps) => {
  const navBar =
    navBarSide === 'bottom'
      ? NavLongBarSvg({ width: '500px', height: '100px' })
      : NavBarSvg({ width: '255px', height: '83px' });

  return (
    <div className={`nav-svg-${navBarSide} nav-svg-container`}>{navBar}</div>
  );
};
