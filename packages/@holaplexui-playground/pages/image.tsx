import { Img, ImgBackdrop } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Image</span>

      <Img
        className='h-40 w-40 rounded-md'
        src='https://pbs.twimg.com/media/FMRmJmbXsAIYTNx.jpg'
        alt='bonk'
      />
    </div>
  );
}
