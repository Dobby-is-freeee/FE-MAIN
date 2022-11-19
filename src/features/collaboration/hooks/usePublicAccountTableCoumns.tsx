import styled from 'styled-components';
import { ChangeEventHandler, useCallback, useMemo } from 'react';
import type { ColumnType } from 'rc-table/lib/interface';
import { CheckBox, CheckedValue, Input, InputPassword, Select, Tag } from '@ui';

import type { PublicAccountTableModel } from '../models/account.models';
import { IMAGE_DIC } from '../constants';

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 4px;
`;

const CheckBoxHeadStyled = styled(CheckBox)`
  & + label {
    height: 18px;
  }
`;

const CheckBoxStyled = styled(CheckBox)`
  & + label {
    height: 28px;
  }
`;

const SelectStyled = styled(Select)`
  height: 24px;

  & .apro__control {
    border: none;
    padding: 0;
    height: 24px;
    min-height: 24px;

    & .apro__value-container {
      padding: 0;
      height: 24px;
      min-height: 24px;
    }
  }

  & .apro__menu {
    & > div > * {
      padding-left: 2px;
    }
  }
`;

const InputStyled = styled(Input)`
  & {
    height: 24px;
    padding: 4px;
  }
  border: none;
  min-width: 24px;
  border-color: transparent;
`;

const MOCK_OPTIONS = ['zoom', 'slack', 'notion', 'figma'].map((tool) => ({
  label: (
    <Wrap>
      <img src={IMAGE_DIC[tool]} />
      <span>{tool[0].toUpperCase() + tool.substring(1)}</span>
    </Wrap>
  ),
  value: tool,
}));

const MOCK_TAG_OPTIONS = ['협업툴', '사이트'].map((tool) => ({
  label: (
    <Tag color={tool === '협업툴' ? 'primary' : 'point'}>
      {tool[0].toUpperCase() + tool.substring(1)}
    </Tag>
  ),
  value: tool,
}));

interface UsePublicAccountTableColumnsProps {
  isAllSelected: boolean;
  selectedRowIds: number[];
  onRowChange: (row: Partial<PublicAccountTableModel>) => void;
  onSelectRows: () => void;
  onSelectRow: (rowId: number) => void;
}

export const usePublicAccountTableColumns = ({
  isAllSelected,
  selectedRowIds,
  onRowChange,
  onSelectRow,
  onSelectRows,
}: UsePublicAccountTableColumnsProps): ColumnType<PublicAccountTableModel>[] => {
  const handleSelectRow = useCallback(
    ({ id }: CheckedValue) => {
      onSelectRow(Number(id));
    },
    [onSelectRow],
  );

  const handleSelectCategoryChangeCurried = useCallback(
    (record: PublicAccountTableModel) => (value: string) => {
      if (!value.length) {
        return;
      }

      onRowChange({ ...record, category: value });
    },
    [onRowChange],
  );

  const handleSelectPasswordChangeCurried = useCallback(
    (record: PublicAccountTableModel): ChangeEventHandler<HTMLInputElement> =>
      (e) => {
        onRowChange({ ...record, password: e.target.value });
      },
    [onRowChange],
  );

  const handleSelectChangeCurried = useCallback(
    (record: PublicAccountTableModel) => (value: string) => {
      if (!value.length) {
        return;
      }
      onRowChange({ ...record, tools: value });
    },
    [onRowChange],
  );

  const handleInputChangeCurried = useCallback(
    (record: PublicAccountTableModel): ChangeEventHandler<HTMLInputElement> =>
      (e) => {
        onRowChange({ ...record, account: e.target.value });
      },
    [onRowChange],
  );

  const columns: ColumnType<PublicAccountTableModel>[] = useMemo(() => {
    return [
      {
        title: (
          <CheckBoxHeadStyled
            id="public-all"
            onChange={onSelectRows}
            checked={isAllSelected}
          />
        ),
        dataIndex: 'id',
        key: 'id',
        render: (id: number) => (
          <CheckBoxStyled
            id={id.toString()}
            onChange={handleSelectRow}
            checked={selectedRowIds.includes(id)}
          />
        ),
        width: 100,
      },
      {
        title: '구분',
        dataIndex: 'category',
        key: 'category',
        render: (category, record) => {
          if (record.editable) {
            return (
              <SelectStyled
                options={MOCK_TAG_OPTIONS}
                value={category}
                onChange={handleSelectCategoryChangeCurried(record)}
              />
            );
          }
          return (
            <Tag color={category === '협업툴' ? 'primary' : 'point'}>
              {category}
            </Tag>
          );
        },
      },
      {
        title: '협업툴',
        dataIndex: 'tools',
        key: 'tools',
        render: (tools, record) => {
          if (record.editable) {
            return (
              <SelectStyled
                // TODO: 변경
                options={MOCK_OPTIONS}
                value={tools}
                onChange={handleSelectChangeCurried(record)}
              />
            );
          }
          return (
            <Wrap>
              <img src={IMAGE_DIC[tools]} />
              <span>{tools[0].toUpperCase() + tools.substring(1)}</span>
            </Wrap>
          );
        },
        width: 400,
      },
      {
        title: '계정',
        dataIndex: 'account',
        key: 'account',
        render: (account: string, record) => {
          if (record.editable) {
            return (
              <InputStyled
                placeholder="계정 정보를 입력해 주세요."
                onChange={handleInputChangeCurried(record)}
              />
            );
          }
          return account;
        },
      },
      {
        title: '비밀번호',
        dataIndex: 'password',
        key: 'password',
        render: (password, record) => {
          if (record.editable) {
            return (
              <InputStyled
                as={InputPassword}
                onChange={handleSelectPasswordChangeCurried(record)}
              />
            );
          }

          return password;
        },
      },
    ];
  }, [
    handleInputChangeCurried,
    handleSelectCategoryChangeCurried,
    handleSelectChangeCurried,
    handleSelectPasswordChangeCurried,
    handleSelectRow,
    isAllSelected,
    onSelectRows,
    selectedRowIds,
  ]);

  return columns;
};
