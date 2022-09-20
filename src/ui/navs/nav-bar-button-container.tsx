import { NavButton } from 'ui/navs/nav-button/nav-button';
import React from 'react';
import { HotBar } from '../inventory/hot-bar';
import { navSideProps } from './nav.types';
import { menuButtonList } from './nav-button/nav-button-list';

export const NavBarButtonContainer = ({
  navSide: navSideProp,
}: navSideProps) => {
  return (
    <div className={`nav-${navSideProp}-button-container`}>
      {menuButtonList.map((button) => {
        const { name, navSide, svgIcon } = button;
        if (navSide !== navSideProp) return null;

        return (
          <React.Fragment key={name}>
            <NavButton name={name} svgIcon={svgIcon} />
          </React.Fragment>
        );
      })}
      {navSideProp === 'bottom' && <HotBar />}
    </div>
  );
};
