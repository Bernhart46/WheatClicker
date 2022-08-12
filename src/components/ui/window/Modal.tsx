import { useAppSelector } from 'store/hooks';
import { ModalWindow } from './ModalWindow/ModalWindow';

export const Modal = () => {
  const { isOn, title } = useAppSelector((state) => state.modalReducer);
  return <>{isOn && ModalWindow(title)}</>;
};
