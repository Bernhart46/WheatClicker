import { NavButtonProps } from './NavButton.types';
import './NavButton.css';
import { navButtonSvg } from 'components/svgs/nav-button.svg';

export const NavButton = ({ name, onClick, svg }: NavButtonProps) => {
  return (
    <div className="nav-button" onClick={onClick} title={name}>
      {navButtonSvg({
        width: '50px',
        height: '50px',
      })}
      {svg()}
    </div>
  );
};
