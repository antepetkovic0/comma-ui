import { StoryObj, Meta } from '@storybook/react';
import { Spinner } from './Spinner';
import { SpinnerProps } from './types';

const meta: Meta<SpinnerProps> = {
  title: 'Spinner',
  component: Spinner,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
