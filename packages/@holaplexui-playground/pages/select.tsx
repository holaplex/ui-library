import { Select } from '@holaplexui/react';

export default function App() {
  const sortOptions: { value: string; label: string }[] = [
    {
      value: 'option1',
      label: 'Option 1'
    },
    {
      value: 'option2',
      label: 'Option 2'
    },
    {
      value: 'option3',
      label: 'Option 3'
    }
  ];
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <Select
        variant='plain'
        value={'option1' as string}
        onChange={() => {}}
        options={sortOptions}
      />
    </div>
  );
}
