import { HoeSvg } from 'components/svgs/WindowContent/hoe.svg';
import { RakeSvg } from 'components/svgs/WindowContent/rake.svg';
import { ShovelSvg } from 'components/svgs/WindowContent/shovel.svg';
import { StickSvg } from 'components/svgs/WindowContent/stick.svg';
import './WindowContent.css';
export const ToolsWindow = () => {
  return (
    <div className="tools-window">
      <Tool name="Stick" />
      <Tool name="Shovel" />
      <Tool name="Rake" />
      <Tool name="Hoe" />
    </div>
  );
};

const Tool = ({ name }: { name: string }) => {
  const chooseSvg = () => {
    switch (name) {
      case 'Stick':
        return <StickSvg />;
      case 'Shovel':
        return <ShovelSvg />;
      case 'Rake':
        return <RakeSvg />;
      case 'Hoe':
        return <HoeSvg />;
      default:
        return null;
    }
  };
  return (
    <div className="tool">
      <div className="tool-name">{name}</div>
      <div className="tool-level">Lvl: 1</div>
      <div className="tool-picture">{chooseSvg()}</div>
      <div className="tool-value">Wheat: 1</div>
      <div className="tool-button">Buy 1</div>
    </div>
  );
};
