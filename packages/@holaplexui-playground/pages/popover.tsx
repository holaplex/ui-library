import { Icon, PopoverBox } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <PopoverBox
        triggerButton={
          <span className='font-bold underline cursor-pointer'>
            Show Popover
          </span>
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
  );
}
