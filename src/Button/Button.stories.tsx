import { StoryObj, Meta } from '@storybook/react';
import { noop } from '../utils/noop';
import Button, { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    ...meta.args,
    label: 'Button',
    // appearance: 'primary',
    onClick: noop,
  },
};
