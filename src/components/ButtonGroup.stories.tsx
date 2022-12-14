import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useMemo, useState } from 'react';

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      options: [10, 20, 30],
      control: { type: 'radio' },
    },
    border: {
      control: { type: 'boolean' },
    },
  },
};

// TODO: figure out how to write stories for dot notation components
// https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components

export default meta;

export const Oval = ({
  value = 10,
  onChange,
  variant = 'oval',
  border,
}: ButtonGroupProps<number>) => {
  const [stateValue, setStateValue] = useState(value);
  useEffect(() => {
    setStateValue(value);
  }, [value]);

  return (
    <ButtonGroup
      border={border}
      value={stateValue}
      onChange={(val) => setStateValue(val || 0)}
      variant={variant}
    >
      <ButtonGroup.Option plain={variant === 'plain'} value={10}>
        Button 1
      </ButtonGroup.Option>
      <ButtonGroup.Option plain={variant === 'plain'} value={20}>
        Button 2
      </ButtonGroup.Option>
      <ButtonGroup.Option plain={variant === 'plain'} value={30}>
        Button 3
      </ButtonGroup.Option>
    </ButtonGroup>
  );
};

export const Plain = ({
  value = 10,
  onChange,
  variant = 'plain',
  border,
}: ButtonGroupProps<number>) => {
  const [stateValue, setStateValue] = useState(value);
  useEffect(() => {
    setStateValue(value);
  }, [value]);

  return (
    <ButtonGroup
      border={border}
      value={stateValue}
      onChange={(val) => setStateValue(val || 0)}
      variant={variant}
    >
      <ButtonGroup.Option plain={variant === 'plain'} value={10}>
        Button 1
      </ButtonGroup.Option>
      <ButtonGroup.Option plain={variant === 'plain'} value={20}>
        Button 2
      </ButtonGroup.Option>
      <ButtonGroup.Option plain={variant === 'plain'} value={30}>
        Button 3
      </ButtonGroup.Option>
    </ButtonGroup>
  );
};
