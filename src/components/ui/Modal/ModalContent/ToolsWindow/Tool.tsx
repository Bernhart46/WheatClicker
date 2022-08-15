import { HoeSvg } from 'components/svgs/WindowContent/hoe.svg';
import { RakeSvg } from 'components/svgs/WindowContent/rake.svg';
import { ShovelSvg } from 'components/svgs/WindowContent/shovel.svg';
import { StickSvg } from 'components/svgs/WindowContent/stick.svg';
import { capitalizeFirstLetter, formatNumber } from 'shared/functions';
import { useAppSelector } from 'store/hooks';
import { ToolBuyButton } from './ToolsBuyButton';
import { ToolProps } from './ToolsTypes';

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
