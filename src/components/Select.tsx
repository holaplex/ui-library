import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { Fragment } from 'react';

export interface SelectProps<T> {
  value: T;
  onChange: (value: T | undefined) => void;
  options: { label: string; value: T }[];
  className?: string;
  variant: 'oval' | 'plain';
}

export default function Select<T>({
  variant = 'oval',
  value,
  onChange,
  options,
  className,
}: SelectProps<T>) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className={clsx('relative', className)}>
          <Listbox.Button
            className={clsx(
              'relative w-full cursor-pointer border bg-theme-default py-2 pl-5 pr-10 text-left text-base text-white shadow-md hover:border-white focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300',
              open && '',
              {
                'rounded-full': variant === 'oval',
                'rounded-md': variant === 'plain',
              }
            )}
          >
            <span className="block truncate text-center">
              {options.find((o) => o.value === value)?.label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDownIcon
                className={clsx('h-5 w-5 text-white', open && 'rotate-180 transition-transform')}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={clsx(
                'absolute left-0 right-0 z-30 mt-1 max-h-64 overflow-auto rounded-lg py-4 text-base bg-theme-dialog-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              )}
            >
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ selected }) =>
                    clsx(
                      'relative mx-4 cursor-pointer select-none whitespace-nowrap rounded-lg p-2 text-theme-dialog-text hover:bg-gradient-primary hover:text-theme-dialog-text hover:bg-theme-dialog-secondary transition ease-in-out duration-100',
                      {
                        'text-primary-500': selected,
                      }
                    )
                  }
                  value={option.value}
                >
                  <span className={clsx('', {})}>{option.label}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
