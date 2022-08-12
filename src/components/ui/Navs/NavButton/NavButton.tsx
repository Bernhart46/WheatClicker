import { NavButtonProps } from './NavButton.types';
import './NavButton.css';
import { navButtonSvg } from 'components/svgs/nav-button.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { closeModal, openModal } from 'store/slices/modalSlice';

export const NavButton = ({ name, svgIcon }: NavButtonProps) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.modalReducer.title);

  const handleClick_ToOpenModalWindow = () => {
    if (title === name) {
      dispatch(closeModal());
    } else {
      dispatch(openModal(name));
    }
  };

  return (
    <>
      <div
        className="nav-button"
        onClick={handleClick_ToOpenModalWindow}
        title={name}
      >
        {navButtonSvg({
          width: '50px',
          height: '50px',
        })}
        {svgIcon()}
      </div>
    </>
  );
};
