import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
};

// TODO: figure out how to write stories for dot notation components
// https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components

export default meta;

export const Plain = ({ value, onChange, variant }: ButtonGroupProps<number>) => {
  return (
    <ButtonGroup value={10} onChange={onChange} variant={'plain'}>
      <ButtonGroup.Option plain value={10}>
        First
      </ButtonGroup.Option>
      <ButtonGroup.Option plain value={20}>
        Second
      </ButtonGroup.Option>
      <ButtonGroup.Option plain value={30}>
        Third
      </ButtonGroup.Option>
    </ButtonGroup>
  );
};
