import { Share } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <Share
        address=''
        twitterParams={{
          text: 'Hola Tweet!',
          hashtags: [''],
          url: 'https://www.holaplex.com/'
        }}
        shareButton={() => (
          <div className='underline cursor-pointer font-semibold'>Share</div>
        )}
      >
        Share
      </Share>
    </div>
  );
}
