import { useToggle } from 'react-use';
import { Modal as CommonModal, ModalProps } from '@ui';

interface ModalHooksArgs extends ModalProps {}

const useModal = ({ onClose, visible = false, ...props }: ModalHooksArgs) => {
  const [isVisible, handleIsVisible] = useToggle(visible);

  const Modal = () => {
    const handleClose = () => {
      handleIsVisible(false);

      onClose?.();
    };

    return <CommonModal visible={isVisible} onClose={handleClose} {...props} />;
  };

  return [Modal, handleIsVisible] as const;
};

export default useModal;
