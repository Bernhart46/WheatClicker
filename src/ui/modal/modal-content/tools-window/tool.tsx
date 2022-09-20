import { HoeSvg } from 'svgs/window-content/hoe.svg';
import { RakeSvg } from 'svgs/window-content/rake.svg';
import { ShovelSvg } from 'svgs/window-content/shovel.svg';
import { StickSvg } from 'svgs/window-content/stick.svg';
import { capitalizeFirstLetter, formatNumber } from 'shared/functions';
import { useAppSelector } from 'store/hooks';
import { ToolBuyButton } from './tools-buy-button';
import { ToolProps } from './tools-types';

export const Tool = ({ name, keyDown }: ToolProps) => {
  const state = useAppSelector((state) => state);
  const { level, wheatValue } = state.toolsReducer[name];
  const chooseSvg = () => {
    switch (name) {
      case 'stick':
        return <StickSvg />;
      case 'shovel':
        return <ShovelSvg />;
      case 'rake':
        return <RakeSvg />;
      case 'hoe':
        return <HoeSvg />;
      default:
        return null;
    }
  };

  return (
    <div className="tool">
      <div className="tool-name">{capitalizeFirstLetter(name)}</div>
      <div className="tool-level">Lvl: {formatNumber(level)}</div>
      <div className="tool-picture">{chooseSvg()}</div>
      <div className="tool-value">
        Wheat: {formatNumber(wheatValue * (level - 1))}
      </div>
      <ToolBuyButton state={state} keyDown={keyDown} name={name} />
    </div>
  );
};
