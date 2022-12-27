import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Tiny: Story = {
  args: {
    height: 10,
    width: 10,
  },
};

export const Small: Story = {
  args: {
    height: 15,
    width: 15,
  },
};

export const Large: Story = {
  args: {
    height: 20,
    width: 20,
  },
};
