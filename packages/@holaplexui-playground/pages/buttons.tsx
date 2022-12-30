import { Button } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      Rounded Buttons
      <div className='flex gap-4'>
        <Button border='rounded' size='small' variant='secondary'>
          Small
        </Button>
        <Button border='rounded' size='medium'>
          Medium
        </Button>
        <Button border='rounded' size='large'>
          Large
        </Button>
      </div>
      Square Buttons
      <div className='flex gap-4'>
        <Button border='square' size='small' variant='secondary'>
          Small
        </Button>
        <Button border='square' size='medium'>
          Medium
        </Button>
        <Button border='square' size='large'>
          Large
        </Button>
      </div>
      Circular Buttons
      <div className='flex gap-4'>
        <Button border='circle' size='small' variant='secondary'>
          Small
        </Button>
        <Button border='circle' size='medium'>
          Medium
        </Button>
        <Button border='circle' size='large'>
          Large
        </Button>
      </div>
    </div>
  );
}
