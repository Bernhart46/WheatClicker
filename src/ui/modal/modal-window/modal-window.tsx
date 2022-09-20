import './modal-window.css';
import { WindowSvg } from 'svgs/window.svg';
import ReactDOM from 'react-dom';
import { AchievementsWindow } from '../modal-content/achievement-window';
import { DatasWindow } from '../modal-content/datas-window';
import { ToolsWindow } from '../modal-content/tools-window/tools-window';
import { BakeryWindow } from '../modal-content/bakery-window/bakery-window';
import { InventoryWindow } from '../modal-content/inventory-window/inventory-window';
import { OptionsWindow } from '../modal-content/options-window';
import { ShopWindow } from '../modal-content/shop-window';
import { WindmillWindow } from '../modal-content/windmill-window/windmill-window';
import { InfoWindow } from '../modal-content/info-window';
export const ModalWindow = ({ name }: { name: string }) => {
  const chooseContent = () => {
    switch (name) {
      case 'Tools':
        return <ToolsWindow />;
      case 'Bakery':
        return <BakeryWindow />;
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
      case 'Windmill':
        return <WindmillWindow />;
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
