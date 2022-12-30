import { Icon } from '@holaplexui/react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      Copy
      <Icon.Copy className='w-6 h-6' />
      Currency
      <Icon.Currency className='w-6 h-6' />
      SolScan
      <Icon.SolScan className='w-6 h-6' />
      Sol
      <Icon.Sol className='w-6 h-6' />
      Twitter
      <Icon.Twitter className='w-6 h-6' />
      Medium
      <Icon.Medium className='w-6 h-6' />
      Discord
      <Icon.Discord className='w-6 h-6' />
      Web
      <Icon.Web className='w-6 h-6' />
      Sauce
      <Icon.Sauce className='w-6 h-6' />
    </div>
  );
}
