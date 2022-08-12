import { WindowSvg } from 'components/svgs/window.svg';
import ReactDOM from 'react-dom';
import './ModalWindow.css';
export const ModalWindow = (name: string) => {
  return ReactDOM.createPortal(
    <div className="tools-window">
      {WindowSvg()}
      <div className="window-name">
        <div>{name}</div>
      </div>
    </div>,
    document.querySelector('#modal-root') as Element
  );
};
