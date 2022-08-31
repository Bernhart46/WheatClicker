import { ChestIconSvg } from 'components/svgs/icons/chest-icon.svg';
import { CookIconSvg } from 'components/svgs/icons/cook-icon.svg';
import { CupIconSvg } from 'components/svgs/icons/cup-icon.svg';
import { DataIconSvg } from 'components/svgs/icons/data-icon.svg';
import { DollarIconSvg } from 'components/svgs/icons/dollar-icon.svg';
import { HoeIconSvg } from 'components/svgs/icons/hoe-icon.svg';
import { InfoIconSvg } from 'components/svgs/icons/info-icon.svg';
import { OptionsIconSvg } from 'components/svgs/icons/options-icon.svg';
import { PotionIconSvg } from 'components/svgs/icons/potion-icon.svg';
import { ButtonListItem } from './NavButton.types';

export const menuButtonList: ButtonListItem[] = [
  {
    name: 'Tools',
    navSide: 'left',
    svgIcon: () => <HoeIconSvg />,
  },
  {
    name: 'Bakery',
    navSide: 'left',
    svgIcon: () => <CookIconSvg />,
  },
  {
    name: 'Inventory',
    navSide: 'left',
    svgIcon: () => <ChestIconSvg />,
  },
  {
    name: 'Achievements',
    navSide: 'bottom',
    svgIcon: () => <CupIconSvg />,
  },
  {
    name: 'Datas',
    navSide: 'bottom',
    svgIcon: () => <DataIconSvg />,
  },
  {
    name: 'Options',
    navSide: 'bottom',
    svgIcon: () => <OptionsIconSvg />,
  },
  {
    name: 'Shop',
    navSide: 'right',
    svgIcon: () => <DollarIconSvg />,
  },
  {
    name: 'Windmill',
    navSide: 'right',
    svgIcon: () => <PotionIconSvg />,
  },
  {
    name: 'Info',
    navSide: 'right',
    svgIcon: () => <InfoIconSvg />,
  },
];
