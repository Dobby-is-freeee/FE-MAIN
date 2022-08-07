import { useMemo } from 'react';
import styled from 'styled-components';

import { Close, Error, Error1 } from '@/assets/images';

interface ConfirmMessageStyleProps {
  status: 'error' | 'success';
  width: number | string;
  height: number | string;
}

const Wrap = styled.div<ConfirmMessageStyleProps>`
  display: flex;
  align-items: center;
  background-color: ${({ status }) => (status === 'error' ? 'rgba(235, 86, 86, 0.1)' : 'rgba(78, 53, 231, 0.1)')};
  padding: 16px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;

const ContentWrap = styled.div<Pick<ConfirmMessageStyleProps, 'status'>>`
  display: flex;
  align-items: center;
  color: ${({ status, theme }) => (status === 'error' ? theme.colors.error : theme.colors.primary)};
  flex: 1;
  font-size: 14px;
  font-weight: 700;
`;

const StatusError = styled(Error)`
  margin-right: 4px;
  margin-top: 4px;
`;

const StatusSuccess = styled(Error1)`
  margin-right: 4px;
  margin-top: 4px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
`;

interface ConfirmMessageProps extends ConfirmMessageStyleProps {
  children: React.ReactNode | string;
  onClose: () => void;
  visible: boolean;
}

export const ConfirmMessage = ({
  onClose,
  children,
  status = 'error',
  visible = false,
  width = '100%',
  height = 'auto',
}: Partial<ConfirmMessageProps>) => {
  const handleCloseClick = () => {
    onClose?.();
  };

  const renderStatusIcon = useMemo(() => (status === 'error' ? <StatusError /> : <StatusSuccess />), [status]);

  if (!visible) {
    return null;
  }

  return (
    <Wrap status={status} width={width} height={height}>
      {renderStatusIcon}
      <ContentWrap status={status}>{children}</ContentWrap>
      <CloseButton onClick={handleCloseClick}>
        <Close />
      </CloseButton>
    </Wrap>
  );
};
