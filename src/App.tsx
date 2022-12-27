// Use this area as a playground/stub for testing new development

import { useState } from 'react';
import { Avatar, AvatarSize } from './components/Avatar';
import Button from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import Select from './components/Select';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Avatar circle size={AvatarSize.Large} handle={'mrue'} />
      <ButtonGroup border value={value} onChange={(val) => setValue(val || 0)} variant={'plain'}>
        <ButtonGroup.Option value={0}>Button 1</ButtonGroup.Option>
        <ButtonGroup.Option value={10}>Button 2</ButtonGroup.Option>
        <ButtonGroup.Option value={20}>Button 3</ButtonGroup.Option>
      </ButtonGroup>
      <Button border={'rounded'} circle>
        Button
      </Button>
      <Select
        value={0}
        onChange={() => {}}
        options={[
          { label: 'Option 1', value: 0 },
          { label: 'Option 1', value: 0 },
        ]}
      />
    </>
  );
}

export default App;
