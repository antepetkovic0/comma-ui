import { StoryObj, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
  title: 'Spinner',
  component: Spinner,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
