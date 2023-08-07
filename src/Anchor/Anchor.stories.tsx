import { StoryObj, Meta } from '@storybook/react';
import Anchor, { AnchorProps } from '.';

const meta: Meta<AnchorProps> = {
  title: 'Anchor',
  component: Anchor,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Anchor>;

export const Primary: Story = {
  args: {
    ...meta.args,
    url: 'https://www.google.com',
    children: 'Anchor example',
  },
};
