import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Tiny: Story = {
  args: {
    children: 'Tiny',
    size: ButtonSize.Tiny,
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: ButtonSize.Small,
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: ButtonSize.Large,
  },
};
