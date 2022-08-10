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
    onClick: () => {},
    svg: () => HoeIconSvg({ width: '50px', height: '50px' }),
  },
  {
    name: 'Chefs',
    navSide: 'left',
    onClick: () => {},
    svg: () => CookIconSvg({ width: '50px', height: '50px' }),
  },
  {
    name: 'Inventory',
    navSide: 'left',
    onClick: () => {},
    svg: () => ChestIconSvg({ width: '45px', height: '45px' }),
  },
  {
    name: 'Achievements',
    navSide: 'bottom',
    onClick: () => {},
    svg: () => CupIconSvg({ width: '50px', height: '50px' }),
  },
  {
    name: 'Datas',
    navSide: 'bottom',
    onClick: () => {},
    svg: () => DataIconSvg({ width: '45px', height: '45px' }),
  },
  {
    name: 'Options',
    navSide: 'bottom',
    onClick: () => {},
    svg: () => OptionsIconSvg({ width: '50px', height: '50px' }),
  },
  {
    name: 'Shop',
    navSide: 'right',
    onClick: () => {},
    svg: () => DollarIconSvg({ width: '50px', height: '50px' }),
  },
  {
    name: 'Potions',
    navSide: 'right',
    onClick: () => {},
    svg: () => PotionIconSvg({ width: '40px', height: '40px' }),
  },
  {
    name: 'Info',
    navSide: 'right',
    onClick: () => {},
    svg: () => InfoIconSvg({ width: '40px', height: '40px' }),
  },
];
