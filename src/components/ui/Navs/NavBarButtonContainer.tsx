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
        const { name, navSide, svg } = button;
        if (navSide !== navBarSide) return null;

        return (
          <React.Fragment key={name}>
            <NavButton name={name} svg={svg} />
          </React.Fragment>
        );
      })}
      {navBarSide === 'bottom' && <HotBar />}
    </div>
  );
};
