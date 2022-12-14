import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarSize } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Square: Story = {
  args: {
    size: AvatarSize.Standard,
  },
};

export const Circle: Story = {
  args: {
    size: AvatarSize.Standard,
    circle: true,
  },
};

export const Image: Story = {
  args: {
    size: AvatarSize.Standard,
    circle: true,
    src: 'https://nightmarket.holaplex.dev/images/launchpad/motley-launchpad-nft.png',
  },
};
