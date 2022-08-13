import { Input } from '@/components';
import { LineButton } from '@/components/LineButton';
import { Field, Label } from './CreateForm';

export const ProjectMemberSetting = () => {
  return (
    <>
      <Field>
        <Label htmlFor="name">팀구성</Label>
        <Input type="date" />
      </Field>
      setGeneratorType{' '}
      <Field>
        <Label htmlFor="name">멤버</Label>
        <LineButton type="submit">이메일로 초대</LineButton>
      </Field>
    </>
  );
};
