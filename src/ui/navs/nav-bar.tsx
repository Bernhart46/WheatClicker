import { navSideProps } from 'ui/navs/nav.types';
import './nav.css';
import { NavBarPanel } from './nav-bar-panel';
import { NavBarButtonContainer } from './nav-bar-button-container';

export const NavBar = ({ navSide }: navSideProps) => {
  return (
    <>
      <nav className={`nav-${navSide}`}>
        <NavBarPanel navSide={navSide} />
        <NavBarButtonContainer navSide={navSide} />
      </nav>
    </>
  );
};
