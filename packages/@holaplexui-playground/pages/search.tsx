import clsx from 'clsx';
import { Search } from '@holaplexui/react';
import { useRef } from 'react';

export default function App() {
  const mobileSearchRef = useRef<HTMLDivElement>(null!);
  let searchTerm = 'DeGods';
  let searching = true;
  let results = null;
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4 bg-gray-800'>
      <Search onChange={() => {}}>
        <div className='fixed w-full md:relative inset-0 h-14 px-4 py-2'>
          <Search.Input
            placeholderText='Search..'
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
            <Search.Results
              searching={searching}
              hasResults={false}
              enabled={searchTerm.length > 2}
            >
              <div></div>
            </Search.Results>
          </div>
        </div>
      </Search>
    </div>
  );
}
