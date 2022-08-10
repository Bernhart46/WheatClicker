import { NavProps } from 'components/ui/Navs/Nav.types';
import './Nav.css';
import { NavBarPanel } from './NavBarPanel';
import { NavBarButtonContainer } from './NavBarButtonContainer';

export const NavBar = ({ navSide: navBarSide, buttonList }: NavProps) => {
  return (
    <>
      <nav>
        <NavBarPanel navBarSide={navBarSide} />
        <NavBarButtonContainer
          navBarSide={navBarSide}
          buttonList={buttonList}
        />
      </nav>
    </>
  );
};
