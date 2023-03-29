import { Button, Icon } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Buttons</span>
      Rounded
      <div className='flex gap-4 items-center'>
        <Button border='rounded' size='small'>
          Small
        </Button>
        <Button border='rounded' size='medium'>
          Medium
        </Button>
        <Button border='rounded' size='large'>
          Large
        </Button>
      </div>
      Square
      <div className='flex gap-4 items-center'>
        <Button border='square' size='small'>
          Small
        </Button>
        <Button border='square' size='medium'>
          Medium
        </Button>
        <Button border='square' size='large'>
          Large
        </Button>
      </div>
      Circular
      <div className='flex gap-4 items-center'>
        <Button border='circle' size='small'>
          Small
        </Button>
        <Button border='circle' size='medium'>
          Medium
        </Button>
        <Button border='circle' size='large'>
          Large
        </Button>
      </div>
      More
      <div className='flex gap-4 items-center'>
        <Button border='rounded' icon={<Icon.Discord />}>
          With Icon
        </Button>

        <Button border='rounded' loading>
          With Spinner
        </Button>

        <Button spinner={<div>🔄</div>} border='rounded' loading>
          With Custom Spinner
        </Button>
      </div>
    </div>
  );
}
