/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';

import { MemberInviteModal } from '../MemberInviteModal';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof MemberInviteModal>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'studio/create/MemberInviteModal',
  component: MemberInviteModal,
  argTypes,
} as ComponentMeta<typeof MemberInviteModal>;

const Template: ComponentStory<typeof MemberInviteModal> = ({ ...props }) => {
  return <MemberInviteModal {...props}></MemberInviteModal>;
};

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};

export const InvitedMember = Template.bind({});
InvitedMember.args = {
  isVisible: true,
  invitedMember: [
    'example1@gmail.com',
    'example2@gmail.com',
    'example3@gmail.com',
  ],
};
