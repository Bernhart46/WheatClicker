import { ChestSvg } from 'svgs/icons/chest.svg';
import { BakerySvg } from 'svgs/icons/bakery.svg';
import { CupSvg } from 'svgs/icons/cup.svg';
import { DataSvg } from 'svgs/icons/data.svg';
import { DollarSvg } from 'svgs/icons/dollar.svg';
import { HoeSvg } from 'svgs/icons/hoe.svg';
import { InfoSvg } from 'svgs/icons/info.svg';
import { OptionsSvg } from 'svgs/icons/options.svg';
import { WindmillSvg } from 'svgs/icons/windmill.svg';
import { ButtonListItem } from './nav-button.types';

export const menuButtonList: ButtonListItem[] = [
  {
    name: 'Tools',
    navSide: 'left',
    svgIcon: () => <HoeSvg />,
  },
  {
    name: 'Bakery',
    navSide: 'left',
    svgIcon: () => <BakerySvg />,
  },
  {
    name: 'Inventory',
    navSide: 'left',
    svgIcon: () => <ChestSvg />,
  },
  {
    name: 'Achievements',
    navSide: 'bottom',
    svgIcon: () => <CupSvg />,
  },
  {
    name: 'Datas',
    navSide: 'bottom',
    svgIcon: () => <DataSvg />,
  },
  {
    name: 'Options',
    navSide: 'bottom',
    svgIcon: () => <OptionsSvg />,
  },
  {
    name: 'Shop',
    navSide: 'right',
    svgIcon: () => <DollarSvg />,
  },
  {
    name: 'Windmill',
    navSide: 'right',
    svgIcon: () => <WindmillSvg />,
  },
  {
    name: 'Info',
    navSide: 'right',
    svgIcon: () => <InfoSvg />,
  },
];
