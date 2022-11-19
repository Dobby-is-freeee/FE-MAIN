import styled from 'styled-components';
import { Title, LineButton } from '@ui';

const TableOutTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TableOutButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;

  button {
    &:nth-last-of-type(1) {
      width: 100px;
    }
    width: fit-content;
    padding: 9px 16px;
  }
`;

interface EditableTableHeaderProps {
  title: string;

  isSelectedTable: boolean;
  isEditableTable: boolean;

  onDeleteClick: () => void;
  onEditableClick: () => void;
  onAddClick: () => void;
  onConfirmClick: () => void;
}

export const EditableTableHeader = ({
  title,
  isEditableTable,
  isSelectedTable,
  onAddClick,
  onConfirmClick,
  onDeleteClick,
  onEditableClick,
}: EditableTableHeaderProps) => {
  return (
    <TableOutTitleWrap>
      <Title level={2}>{title}</Title>
      <TableOutButtonWrap>
        {isSelectedTable ? (
          <>
            <LineButton onClick={onDeleteClick}>삭제하기</LineButton>
            <LineButton onClick={onEditableClick}>수정하기</LineButton>
          </>
        ) : null}
        {isEditableTable ? (
          <LineButton onClick={onConfirmClick}>완료</LineButton>
        ) : null}
        <LineButton variant="primary" onClick={onAddClick}>
          계정 추가 +
        </LineButton>
      </TableOutButtonWrap>
    </TableOutTitleWrap>
  );
};
