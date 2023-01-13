import { Price } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4 '>
      <span className='font-bold underline'>Price</span>
      <Price className='p-2 rounded-md bg-gray-800' price={10} />
    </div>
  );
}
