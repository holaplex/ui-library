import { Select } from '@holaplexui/react';
import { useState } from 'react';

export default function App() {
  const options: { value: string; label: string }[] = [
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
  const [value, setValue] = useState<string>(options[0].value);

  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Select</span>

      <Select
        variant='plain'
        value={value}
        onChange={(value: string | undefined) => {
          value && setValue(value);
        }}
        options={options}
      />
    </div>
  );
}
