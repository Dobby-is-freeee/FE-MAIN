import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom';

import { Title } from './Title';

import { Close } from '@/assets/images';

interface ModalBodyStyleProps {
  width: number | string;
  height: number | string;
}

const blowUpModal = keyframes`
  0% {
    transform: scale(0) translate(-50%, -50%);
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
  }
`;

const blowUpModalBg = keyframes`
	0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.8;
  }
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  animation: ${blowUpModalBg} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const ModalBody = styled.div<ModalBodyStyleProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: ${({ width }) =>
    `${typeof width === 'number' ? `${width}px` : width}`};
  height: ${({ height }) =>
    `${typeof height === 'number' ? `${height}px` : height}`};
  top: 50%;
  left: 50%;
  transform-origin: -10% -10%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  animation: ${blowUpModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const ModalHeader = styled.div`
  width: 100%;
`;

const WithTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 20px 12px 20px 28px;
`;

const CloseWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 12px;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ModalContent = styled.div`
  overflow: auto;
  flex: 1;
  padding: 28px;
`;

const ModalFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 8px 9px 8px 28px;
`;

export interface ModalProps {
  visible?: boolean;
  content?: string | React.ReactNode;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  width?: number | string;
  height?: number | string;

  onClose?: () => void;
}

// TODO: footer 로직 및 ok cancel 버튼 관련 제작 - Chkim
// TODO: Modal Animation 보완 필요 ex) 닫을 시 애니메이션 - chkim
export const Modal = ({
  visible,
  content,
  title,
  footer,
  width = 450,
  height = 258,
  onClose,
}: ModalProps) => {
  if (!visible) {
    return null;
  }

  const renderModalHeader = () => {
    if (title) {
      return (
        <ModalHeader>
          <WithTitleHeader>
            <Title level={3}>{title}</Title>
            <CloseButton onClick={onClose}>
              <Close />
            </CloseButton>
          </WithTitleHeader>
        </ModalHeader>
      );
    }

    return (
      <CloseWrap>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
      </CloseWrap>
    );
  };

  const renderContent = () => {
    return <ModalContent>{content}</ModalContent>;
  };

  const renderFooter = () => {
    if (!footer) {
      return null;
    }

    return <ModalFooter>{footer}</ModalFooter>;
  };

  return ReactDOM.createPortal(
    <ModalWrap>
      <ModalBackground onClick={onClose} />
      <ModalBody width={width} height={height}>
        {renderModalHeader()}
        {renderContent()}
        {renderFooter()}
      </ModalBody>
    </ModalWrap>,
    document.getElementById('portal') as HTMLElement,
  );
};
