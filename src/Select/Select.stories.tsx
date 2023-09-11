import { StoryObj, Meta } from '@storybook/react';
import Select, { SelectProps } from '.';
import { noop } from '../utils/noop';

const meta: Meta<SelectProps> = {
  title: 'Select',
  component: Select,
  args: {},
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story<SelectProps> = (args) => {
  return (
    <Select
      onSelect={noop}
      options={[
        { label: 'Homer', value: 'Homer' },
        { label: 'Bart', value: 'Bart' },
      ]}
    />
  );
};
