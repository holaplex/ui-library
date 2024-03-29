import { ButtonGroup } from '@holaplex/ui-library-react';
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
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      <span className='font-bold underline'>ButtonGroup</span>

      <ButtonGroup
        className='bg-gray-900'
        value={value}
        onChange={(value: string | undefined) => {
          value && setValue(value);
        }}
      >
        {options.map((option) => (
          <ButtonGroup.Option value={option.value} key={option.value}>
            {option.label}
          </ButtonGroup.Option>
        ))}
      </ButtonGroup>
    </div>
  );
}
