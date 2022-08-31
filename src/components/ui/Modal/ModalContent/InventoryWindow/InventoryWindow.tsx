import React, { useRef, useState } from 'react';
import { formatNumber } from 'shared/functions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeIndex, Item } from 'store/slices/inventorySlice';
import './InventoryWindow.css';

type ButtonNumbers = 1 | 2 | 3 | 4 | 5 | 6;

const buttons: ButtonNumbers[] = [1, 2, 3, 4, 5, 6];

export const InventoryWindow = () => {
  const inventory = useAppSelector((state) => state.inventoryReducer.inventory);
  const dispatch = useAppDispatch();
  const [buttonActive, setButtonActive] = useState<ButtonNumbers>(1);
  //slotChange
  const [canChange, setCanChange] = useState(false);
  const [fromItem, setFromItem] = useState({} as Item);
  //For the information window
  const informationRef = useRef<HTMLDivElement>(null);
  const [parentRect, setParentRect] = useState<DOMRect>();
  const [rect, setRect] = useState<DOMRect>();

  const handleMouseEnter = (item: Item) => {
    if (!informationRef.current) return;
    const iRef = informationRef.current;
    iRef.style.opacity = item.name ? '1' : '0';

    let text = '';
    text += item.name ? `<h3>${item.name}</h3>` : '';
    text += item.name ? `\nAmount: ${formatNumber(item.amount)}` : '';
    iRef.innerHTML = text;

    setParentRect(iRef.offsetParent?.getBoundingClientRect());
    setRect(iRef.getBoundingClientRect());
  };
  const handleMouseLeave = () => {
    if (!informationRef.current) return;
    informationRef.current.style.opacity = '0';
    informationRef.current.style.top = '-10000px';
    informationRef.current.style.left = '-10000px';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!informationRef.current) return;
    if (informationRef.current.style.opacity === '0') return;
    if (!parentRect || !rect) return;

    const iRef = informationRef.current;
    iRef.style.left = `${e.clientX - parentRect.left - 20}px`;
    iRef.style.top = `${e.clientY - parentRect.top - rect.height - 20}px`;
  };

  const handleClick = (item: Item) => {
    if (!canChange) {
      if (!item.name) return; //only move when item is exists
      setFromItem(item);
      setCanChange(true);
    } else {
      dispatch(changeIndex({ from: fromItem.index, to: item.index }));
      setCanChange(false);
    }
  };

  return (
    <>
      <div className="inventory-window">
        <div className="inventory-button-container">
          {buttons.map((button) => {
            const classes = `inventory-button ${
              buttonActive === button ? 'inventory-button-active' : ''
            }`;
            return (
              <div
                key={button}
                className={classes}
                onClick={() => setButtonActive(button)}
              >
                {button}
              </div>
            );
          })}
        </div>
        <div className="inventory-slots-container">
          {getItemsFromAnInventoryPage(inventory, buttonActive).map((item) => {
            return (
              <div
                key={item.index}
                className="inventory-slot"
                style={{
                  backgroundColor: canChange ? 'rgba(0,255,0, 0.2)' : '#794841',
                }}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e)}
                onClick={() => handleClick(item)}
              >
                {item.name && item.svg}
                {item.name && (
                  <div className="inventory-item-amount">
                    {formatNumber(item.amount)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div ref={informationRef} className="item-information"></div>
    </>
  );
};

const getItemsFromAnInventoryPage = (inventory: Item[], pageNumber: number) => {
  const ITEMS_PER_PAGE = 18;
  const pageItems = inventory.slice(
    pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );
  return pageItems;
};
