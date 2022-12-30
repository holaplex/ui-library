import { Modal } from '@holaplexui/react';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className='flex flex-col items-center justify-center p-4'>
        <div
          className='cursor-pointer text-lg font-bold text-gray-800'
          onClick={() => {
            setOpen(true);
          }}
        >
          Click to open modal!
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
