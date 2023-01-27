import { PopoverBox } from '@holaplex/ui-library-react';

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
          <div key='option1'>Option 1</div>,
          <div key='option2'>Option 2</div>
        ]}
      />
    </div>
  );
}
