import { ButtonNumbers } from './inventory-window';

const buttons: ButtonNumbers[] = [1, 2, 3, 4, 5, 6];

type InventoryButtonContainerProps = {
  buttonActive: ButtonNumbers;
  setButtonActive: React.Dispatch<React.SetStateAction<ButtonNumbers>>;
};

export const InventoryButtonContainer = ({
  buttonActive,
  setButtonActive,
}: InventoryButtonContainerProps) => {
  return (
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
  );
};
