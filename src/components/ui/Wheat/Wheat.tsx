import { WheatSvg } from 'components/svgs/wheat.svg';
import './Wheat.css';
import { addWheat } from 'store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
type WheatProps = {
  width: string;
  height: string;
};
const Wheat = ({ width, height }: WheatProps) => {
  const dispatch = useAppDispatch();
  const { wheatPerClick } = useAppSelector((state) => state.toolsReducer);
  const clickHandler = () => {
    dispatch(addWheat(wheatPerClick));
  };

  return (
    <div
      style={{ width, height }}
      className="wheat"
      onClick={() => clickHandler()}
    >
      {WheatSvg()}
    </div>
  );
};

export default Wheat;
