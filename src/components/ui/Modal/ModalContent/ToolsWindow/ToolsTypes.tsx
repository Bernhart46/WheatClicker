import { ToolTypes } from 'store/slices/toolsSlice';
import { RootState } from 'store/store';

export type keyDownType = 'Shift' | 'CTRL' | '';

export type ToolBuyButtonProps = {
  state: RootState;
  keyDown: keyDownType;
  name: ToolTypes;
};

export type ToolProps = {
  name: ToolTypes;
  keyDown: keyDownType;
};
