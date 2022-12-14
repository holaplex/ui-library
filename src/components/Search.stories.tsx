import { Meta } from '@storybook/react';
import clsx from 'clsx';
import { useRef } from 'react';
import Search, { SearchProps } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Input = ({ children }: SearchProps) => {
  let searchTerm = 'DeGods';

  return (
    <Search>
      <div className={clsx('fixed w-full md:relative inset-0  h-14  px-4 py-2')}>
        <Search.Input
          placeholderText="Search.."
          value={searchTerm}
          onChange={() => {}}
          autofocus={true}
          className="mx-auto w-full max-w-4xl md:block"
        />
      </div>
    </Search>
  );
};

export const Searching = ({ children }: SearchProps) => {
  const mobileSearchRef = useRef<HTMLDivElement>(null!);

  let searchTerm = 'DeGods';
  let searching = true;
  let results = null;
  return (
    <Search>
      <div className={clsx('fixed w-full md:relative inset-0 h-14 px-4 py-2')}>
        <Search.Input
          placeholderText="Search.."
          value={searchTerm}
          onChange={() => {}}
          autofocus={true}
        />
        <div
          ref={mobileSearchRef}
          className={clsx(
            'fixed left-0 right-0 top-12 bottom-0 z-40 mx-auto  block max-w-4xl ',
            searching || results ? 'block' : 'hidden'
          )}
        >
          <Search.Results searching={searching} hasResults={false} enabled={searchTerm.length > 2}>
            <div></div>
          </Search.Results>
        </div>
      </div>
    </Search>
  );
};
