import { Share } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Share</span>

      <Share
        address=''
        twitterParams={{
          text: 'Hola Tweet!',
          hashtags: [''],
          url: 'https://www.holaplex.com/'
        }}
        shareButton={() => (
          <div className='cursor-pointer font-semibold'>Click to share!</div>
        )}
      />
    </div>
  );
}
