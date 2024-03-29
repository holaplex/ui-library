import { Modal } from '@holaplex/ui-library-react';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className='flex flex-col items-center justify-center p-4'>
        <span className='font-bold underline'>Modal</span>
        <div
          className='cursor-pointer text-lg mt-5 font-bold text-gray-800'
          onClick={() => {
            setOpen(true);
          }}
        >
          Click to open!
        </div>
      </div>
      <Modal
        title='Modal Title'
        open={open}
        setOpen={(open: boolean) => {
          setOpen(open);
        }}
      >
        <div className='flex justify-center items-center p-6'>
          Modal Content
        </div>
      </Modal>
    </>
  );
}
