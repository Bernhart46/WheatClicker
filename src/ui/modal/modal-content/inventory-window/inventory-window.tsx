import { useRef, useState } from 'react';
import { InventoryButtonContainer } from './inventory-button-container';
import { InventorySlotsContainer } from './inventory-slots-container';
import './inventory-window.css';

export type ButtonNumbers = 1 | 2 | 3 | 4 | 5 | 6;

export const InventoryWindow = () => {
  const informationRef = useRef<HTMLDivElement>(null);
  const [buttonActive, setButtonActive] = useState<ButtonNumbers>(1);

  return (
    <>
      <div className="inventory-window">
        <InventoryButtonContainer
          buttonActive={buttonActive}
          setButtonActive={setButtonActive}
        />
        <InventorySlotsContainer
          buttonActive={buttonActive}
          informationRef={informationRef}
        />
      </div>
      <div ref={informationRef} className="item-information"></div>
    </>
  );
};
