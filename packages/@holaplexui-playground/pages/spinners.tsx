import { Spinner } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Spinners</span>
      Tiny
      <Spinner width={10} height={10} />
      Small
      <Spinner width={15} height={15} />
      Large
      <Spinner width={20} height={20} />
    </div>
  );
}
