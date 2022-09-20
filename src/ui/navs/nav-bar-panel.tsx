import { NavBarSvg } from 'svgs/nav-bar.svg';
import { NavLongBarSvg } from 'svgs/nav-long-bar.svg';
import { navSideProps } from './nav.types';

export const NavBarPanel = ({ navSide }: navSideProps) => {
  const navBar = navSide === 'bottom' ? <NavLongBarSvg /> : <NavBarSvg />;

  return <div className={`nav-svg-${navSide}`}>{navBar}</div>;
};
