import styled from 'styled-components';
import { ColumnType } from 'rc-table/lib/interface';

import { AccountByMemberTableModel } from '../../models/account.models';
import { IMAGE_DIC } from '../../constants';
import { AccountByMemberTable } from '../../components/account/AccountByMemberTable';
import TABLE_DATA from '../../_fixtures/member_account_list.json';

import { useQueryNavigate } from '@/hooks/useQueryNavigate';
import { Title } from '@/components';

const TitleStyled = styled(Title)`
  margin-bottom: 20px;
`;

const ToolWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MemberProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ImageStyled = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const columns: ColumnType<AccountByMemberTableModel>[] = [
  {
    title: '멤버',
    dataIndex: 'member',
    key: 'member',
    render: ({ image, name }) => {
      return (
        <MemberProfile>
          <ImageStyled src={image} alt="member profile image" />
          <span>{name}</span>
        </MemberProfile>
      );
    },
  },
  {
    title: '협업툴',
    dataIndex: 'tools',
    key: 'tools',
    render: (tools: string) => {
      return (
        <ToolWrap>
          <img src={IMAGE_DIC[tools]} />
          <span>{tools[0].toUpperCase() + tools.substring(1)}</span>
        </ToolWrap>
      );
    },
  },
  {
    title: '계정',
    dataIndex: 'account',
    key: 'account',
  },
];

export const AccountByMemberContainer = () => {
  const navigate = useQueryNavigate();

  const handlePageChange = (page: number) => {
    navigate({ page });
  };

  return (
    <>
      <TitleStyled level={2}>멤버별 계정</TitleStyled>
      <AccountByMemberTable
        columns={columns}
        tableData={TABLE_DATA}
        onPageChange={handlePageChange}
      />
    </>
  );
};
