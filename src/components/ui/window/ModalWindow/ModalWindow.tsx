import './ModalWindow.css';
import { WindowSvg } from 'components/svgs/window.svg';
import ReactDOM from 'react-dom';
import { AchievementsWindow } from '../WindowContent/AchievementsWindow';
import { DatasWindow } from '../WindowContent/DatasWindow';
import { ToolsWindow } from '../WindowContent/ToolsWindow';
import { ChefsWindow } from '../WindowContent/ChefsWindow';
import { InventoryWindow } from '../WindowContent/InventoryWindow';
import { OptionsWindow } from '../WindowContent/OptionsWindow';
import { ShopWindow } from '../WindowContent/ShopWindow';
import { PotionsWindow } from '../WindowContent/PotionsWindow';
import { InfoWindow } from '../WindowContent/InfoWindow';
export const ModalWindow = (name: string) => {
  const chooseContent = () => {
    switch (name) {
      case 'Tools':
        return <ToolsWindow />;
      case 'Chefs':
        return <ChefsWindow />;
      case 'Inventory':
        return <InventoryWindow />;
      case 'Achievements':
        return <AchievementsWindow />;
      case 'Datas':
        return <DatasWindow />;
      case 'Options':
        return <OptionsWindow />;
      case 'Shop':
        return <ShopWindow />;
      case 'Potions':
        return <PotionsWindow />;
      case 'Info':
        return <InfoWindow />;
      default:
        return null;
    }
  };
  return ReactDOM.createPortal(
    <div className="modal-window">
      {WindowSvg()}
      <div className="window-name">
        <div>{name}</div>
      </div>
      <div className="window-content">{chooseContent()}</div>
    </div>,
    document.querySelector('#modal-root') as Element
  );
};
