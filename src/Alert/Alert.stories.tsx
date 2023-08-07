import { StoryObj, Meta } from '@storybook/react';
import Alert, { AlertProps } from '.';

const meta: Meta<AlertProps> = {
  title: 'Alert',
  component: Alert,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    ...meta.args,
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
};
