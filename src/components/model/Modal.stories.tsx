import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    setOpen: () => {},
    title: 'Modal Title',
    children: <div className="py-10 flex justify-center items-center">Modal container</div>,
  },
};
