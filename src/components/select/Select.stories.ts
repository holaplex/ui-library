import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select Button',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Oval: Story = {
  args: {
    value: 10,
    options: [{ label: 'Option 1', value: 10 }],
  },
};

export const Plain: Story = {
  args: {
    value: 10,
    variant: 'plain',
    options: [{ label: 'Option 1', value: 10 }],
  },
};
