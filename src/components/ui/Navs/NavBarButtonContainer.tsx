import { NavButton } from 'components/ui/Navs/NavButton/NavButton';
import React from 'react';
import { HotBar } from '../Inventory/HotBar';
import { NavBarButtonContainerProps } from './Nav.types';

export const NavBarButtonContainer = ({
  navBarSide,
  buttonList,
}: NavBarButtonContainerProps) => {
  return (
    <div className={`${navBarSide}-nav nav-button-container`}>
      {buttonList.map((button) => {
        const { name, navSide, svgIcon } = button;
        if (navSide !== navBarSide) return null;

        return (
          <React.Fragment key={name}>
            <NavButton name={name} svgIcon={svgIcon} />
          </React.Fragment>
        );
      })}
      {navBarSide === 'bottom' && <HotBar />}
    </div>
  );
};
