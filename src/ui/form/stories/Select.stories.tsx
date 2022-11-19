/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from '../Select';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Select>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/form/Select',
  component: Select,
  argTypes,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ ...props }) => {
  const onChange = action('change');
  const placeholder = '선택해 보세요.';

  return (
    <Select placeholder={placeholder} onChange={onChange} {...props}></Select>
  );
};

const OPTIONS = [
  { label: '설명이 없어도 필요한 기능은 스스로 사용할 수 있어요.', value: '1' },
  { label: '사용법을 설명해줄 수 있을 정도로 경험이 많아요.', value: '2' },
];

const MULTI_OPTIONS = [
  {
    label: 'cskim132@gmail.com',
    value: 'cskim132@gmail.com',
  },
  {
    label: 'cskim133@gmail.com',
    value: 'cskim133@gmail.com',
  },
  {
    label: 'cskim134@gmail.com',
    value: 'cskim134@gmail.com',
  },
];

export const Default = Template.bind({});
Default.args = {
  options: OPTIONS,
};

export const Single = Template.bind({});
Single.args = {
  width: '843px',
  options: OPTIONS,
  isClearable: true,
  isSearchable: false,
  value: '1',
};

export const Multi = Template.bind({});
Multi.args = {
  options: MULTI_OPTIONS,
  width: '445px',
  value: ['cskim134@gmail.com', 'cskim132@gmail.com'],
  isMulti: true,
  isSearchable: true,
  showDropDownIcon: false,
};

export const InputMode = Template.bind({});
InputMode.args = {
  width: '445px',
  placeholder: '태그를 생성해 보세요.',
  inputMode: true,
};

export const NoOption = Template.bind({});
NoOption.args = {
  noOptionsMessage: () => '옵션이 없어요!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const Error = Template.bind({});
Error.args = {
  errorMessage: '잘못된 값입니다.',
};
