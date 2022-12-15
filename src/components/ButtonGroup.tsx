import clsx from 'clsx';
import { ReactNode } from 'react';
import { RadioGroup } from '@headlessui/react';

export interface ButtonGroupProps<T> {
  variant?: 'oval' | 'plain';
  children: ReactNode;
  value: T;
  onChange: (value: T | undefined) => void;
  border?: boolean;
  className?: string;
}

export function ButtonGroup<T>({
  variant = 'oval',
  children,
  value,
  onChange,
  border = false,
  className,
}: ButtonGroupProps<T>): JSX.Element {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={clsx('flex max-w-full flex-row items-center justify-start gap-4', className, {
        'rounded-full ': variant === 'oval',
        'rounded-md': variant === 'plain',
        'border border-gray-800 px-1 py-1': border === true,
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
          'h-12 w-28',
          !plain && 'h-12 w-28 rounded-full',
          checked
            ? plain
              ? 'border-b border-b-white bg-button-default py-1 px-2 rounded-md text-white'
              : 'rounded-full bg-button-default text-white'
            : plain
            ? 'cursor-pointer bg-transparent text-gray-300 hover:bg-button-default opacity-80 p-1 rounded-md hover:text-white transition duration-150'
            : 'rounded-full cursor-pointer bg-transparent text-gray-300 opacity-80 hover:bg-button-default p-1 hover:text-white transition duration-150'
        )
      }
    >
      {children}
    </RadioGroup.Option>
  );
}

ButtonGroup.Option = ButtonGroupOption;
