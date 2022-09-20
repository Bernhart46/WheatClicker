import { NavButtonProps } from './nav-button.types';
import './nav-button.css';
import { NavButtonSvg } from 'svgs/nav-button.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { closeModal, openModal } from 'store/slices/modal-slice';

export const NavButton = ({ name, svgIcon }: NavButtonProps) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.modalReducer.title);

  const handleClick = () => {
    if (title === name) {
      dispatch(closeModal());
    } else {
      dispatch(openModal(name));
    }
  };

  return (
    <>
      <div className="nav-button" onClick={handleClick} title={name}>
        <NavButtonSvg />
        {svgIcon()}
      </div>
    </>
  );
};
