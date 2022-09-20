import { useAppSelector } from 'store/hooks';
import { ModalWindow } from './modal-window/modal-window';

export const Modal = () => {
  const { isOn, title } = useAppSelector((state) => state.modalReducer);

  return isOn ? <ModalWindow name={title} /> : <></>;
};
