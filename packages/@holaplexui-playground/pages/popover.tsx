import { Icon, PopoverBox } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='p-4'>
        <PopoverBox
          triggerButton={
            <button className='font-bold underline cursor-pointer border border-gray-400'>
              Show Popover
            </button>
          }
          elements={[
            <div key='1' className='flex gap-2'>
              <Icon.Discord /> Open Discord
            </div>,
            <div key='2' className='flex gap-2'>
              <Icon.Twitter /> Open Twitter
            </div>
          ]}
        />
      </div>
    </div>
  );
}
