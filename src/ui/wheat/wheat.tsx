import { WheatSvg } from 'svgs/wheat.svg';
import './wheat.css';
import { increaseWheat } from 'store/slices/user-slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Wheat = () => {
  const dispatch = useAppDispatch();
  const { wheatPerClick } = useAppSelector((state) => state.toolsReducer);
  const clickHandler = () => {
    dispatch(increaseWheat(wheatPerClick));
  };

  return (
    <div
      style={{ width: '320px', height: '320px' }}
      className="wheat"
      onClick={() => clickHandler()}
    >
      <WheatSvg />
    </div>
  );
};

export default Wheat;
