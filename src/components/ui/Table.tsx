import styled from 'styled-components';
import { TableProps } from 'rc-table/lib/Table';
import { default as RcTable } from 'rc-table';
import 'rc-table/assets/index.css';

const TableStyled = styled(RcTable)<any>`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  & .rc-table-content {
    border: none;
  }

  & .rc-table-thead {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray3};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    th.rc-table-cell {
      border: none;
      text-align: left;
      line-height: 24px;
      padding: 8px 18px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  & .rc-table-tbody {
    tr.rc-table-row {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};

      &:nth-last-of-type(1) {
        border: none;
      }

      td.rc-table-cell {
        border: none;
        vertical-align: middle;
        padding: 18px;
        line-height: 24px;
        font-weight: 500;
        font-size: 16px;

        &.rc-table-cell-row-hover {
          background-color: transparent;
        }
      }
    }

    /* Empty */
    tr.rc-table-placeholder {
      border-top: none;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 6px;

      td {
        text-align: center;
        vertical-align: middle;
        border: none;
        font-size: 14px;
        line-height: 22px;
        height: 180px;
      }
    }
  }
`;

export const Table = <T,>(props: TableProps<T>) => {
  return <TableStyled {...props} />;
};
