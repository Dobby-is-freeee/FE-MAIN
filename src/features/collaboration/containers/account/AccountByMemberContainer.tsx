import { AccountByMemberTable } from '../../components/account/AccountByMemberTable';

export const AccountByMemberContainer = () => {
  return (
    <>
      <AccountByMemberTable tableData={[]} onPageChange={() => ({})} />
    </>
  );
};
