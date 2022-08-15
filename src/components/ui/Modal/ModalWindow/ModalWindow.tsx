import './ModalWindow.css';
import { WindowSvg } from 'components/svgs/window.svg';
import ReactDOM from 'react-dom';
import { AchievementsWindow } from '../ModalContent/AchievementsWindow';
import { DatasWindow } from '../ModalContent/DatasWindow';
import { ToolsWindow } from '../ModalContent/ToolsWindow/ToolsWindow';
import { ChefsWindow } from '../ModalContent/ChefsWindow';
import { InventoryWindow } from '../ModalContent/InventoryWindow';
import { OptionsWindow } from '../ModalContent/OptionsWindow';
import { ShopWindow } from '../ModalContent/ShopWindow';
import { PotionsWindow } from '../ModalContent/PotionsWindow';
import { InfoWindow } from '../ModalContent/InfoWindow';
export const ModalWindow = ({ name }: { name: string }) => {
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
