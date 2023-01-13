import { Flex, FlexDirection } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Flex in column</span>
      <Flex direction={FlexDirection.Col} gap={4}>
        <div className='border border-gray-500 p-4'>1</div>
        <div className='border border-gray-500 p-4'>2</div>
        <div className='border border-gray-500 p-4'>3</div>
        <div className='border border-gray-500 p-4'>4</div>
      </Flex>
      <span className='font-bold underline'>Flex in row</span>
      <Flex direction={FlexDirection.Row} gap={4}>
        <div className='border border-gray-500 p-4'>1</div>
        <div className='border border-gray-500 p-4'>2</div>
        <div className='border border-gray-500 p-4'>3</div>
        <div className='border border-gray-500 p-4'>4</div>
      </Flex>
    </div>
  );
}
