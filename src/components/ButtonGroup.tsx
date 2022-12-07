import clsx from 'clsx';
import { ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';

export interface ButtonGroupProps<T> {
  variant?: 'oval' | 'plain';
  children: ReactNode;
  value: T;
  onChange: (value: T | undefined) => void;
  className?: string;
}

export function ButtonGroup<T>({
  variant = 'oval',
  children,
  value,
  onChange,
  className,
}: ButtonGroupProps<T>): JSX.Element {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={clsx('flex max-w-full flex-row items-center justify-start gap-4', className, {
        'rounded-full border border-gray-800 px-1 py-1': variant === 'oval',
        '': variant === 'plain',
      })}
    >
      {children}
    </RadioGroup>
  );
}

export interface ButtonGroupOptionProps<T> {
  children: ReactNode;
  active?: boolean;
  value: T;
  plain?: boolean;
}

function ButtonGroupOption<T>({ children, value, plain }: ButtonGroupOptionProps<T>): JSX.Element {
  return (
    <RadioGroup.Option
      value={value}
      className={({ checked }) =>
        clsx(
          'flex items-center justify-center text-base',
          !plain && 'h-12 w-28 rounded-full',
          checked
            ? plain
              ? 'border-b border-b-white bg-gray-800 p-1 rounded-md text-white'
              : 'rounded-full bg-gray-800 text-black'
            : 'cursor-pointer bg-transparent text-gray-300 hover:bg-gray-800 p-1 rounded-md hover:text-gray-200 transition duration-150'
        )
      }
    >
      {children}
    </RadioGroup.Option>
  );
}

ButtonGroup.Option = ButtonGroupOption;
