import { Button, Icon } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Buttons</span>
      Rounded
      <div className='flex gap-4 items-center'>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </div>
      More
      <div className='flex gap-4 items-center'>
        <Button icon={<Icon.Discord />}>With Icon</Button>

        <Button loading>With Spinner</Button>

        <Button spinner={<div>🔄</div>} loading>
          With Custom Spinner
        </Button>
      </div>
    </div>
  );
}
