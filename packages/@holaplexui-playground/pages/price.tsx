import { Price } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4 bg-gray-800'>
      <Price price={10} />
    </div>
  );
}
