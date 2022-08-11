import { WheatSvg } from 'components/svgs/wheat.svg';
import './Wheat.css';
import { addWheat } from 'store/slices/wheatSlice';
import { useAppDispatch } from 'store/hooks';
type WheatProps = {
  width: string;
  height: string;
};
const Wheat = ({ width, height }: WheatProps) => {
  const dispatch = useAppDispatch();
  const clickHandler = (amount: number) => {
    dispatch(addWheat(amount));
  };

  return (
    <div
      style={{ width, height }}
      className="wheat"
      onClick={() => clickHandler(1)}
    >
      {WheatSvg()}
    </div>
  );
};

export default Wheat;
