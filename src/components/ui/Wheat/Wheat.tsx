import { WheatSvg } from 'components/svgs/wheat.svg';
import './Wheat.css';
type WheatProps = {
  width: string;
  height: string;
};
//transform="scale(-1 1)"
const Wheat = ({ width, height }: WheatProps) => {
  return (
    <div style={{ width, height }} className="wheat">
      {WheatSvg()}
    </div>
  );
};

export default Wheat;
